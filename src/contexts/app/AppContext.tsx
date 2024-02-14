import {
    createContext,
    FC,
    PropsWithChildren,
    useEffect,
    useReducer,
} from "react";
import { useSubscription } from "react-stomp-hooks";

import Loading from "@/components/Loading";
import configs from "@/configs";

import initialState from "./app.initialState";
import { AppContextType } from "./app.interface";
import { reducer, setReceivedMessage, switchFlag } from "./reducer";

const AppContext = createContext<AppContextType>({
    ...initialState,
    dispatch: () => null,
});

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useSubscription(configs.socket.start, (message) => {
        const data = JSON.parse(message.body);
        dispatch(setReceivedMessage(data));
    });

    useEffect(() => {
        dispatch(switchFlag());
    }, [
        state.receivedMessage.diceResult.dice1,
        state.receivedMessage.diceResult.dice2,
        state.receivedMessage.diceResult.dice3,
    ]);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {state.receivedMessage.diceResult.dice1 &&
            state.receivedMessage.diceResult.dice2 &&
            state.receivedMessage.diceResult.dice3 ? (
                children
            ) : (
                <Loading />
            )}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
