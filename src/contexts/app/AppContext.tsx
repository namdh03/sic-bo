import { createContext, FC, PropsWithChildren, useReducer } from "react";
import { useSubscription } from "react-stomp-hooks";

import Loading from "@/components/Loading";
import configs from "@/configs";

import initialState from "./app.initialState";
import { AppContextType } from "./app.interface";
import { reducer, setReceivedMessage } from "./reducer";

const AppContext = createContext<AppContextType>({
    ...initialState,
    dispatch: () => null,
});

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useSubscription(configs.socket.start, (message) => {
        const data = JSON.parse(message.body);
        console.log("Received message: ", data);
        dispatch(setReceivedMessage(data));
    });

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {state.receivedMessage.second >= 0 ? children : <Loading />}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
