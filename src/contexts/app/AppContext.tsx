import { createContext, FC, PropsWithChildren, useReducer } from "react";
import toast from "react-hot-toast";
import { useSubscription } from "react-stomp-hooks";

import Loading from "@/components/Loading";
import configs from "@/configs";

import { GameStatus } from "./app.enum";
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

        if (data.gameStatus != state.receivedMessage.gameStatus)
            switch (data.gameStatus) {
                case GameStatus.STARTING:
                    toast("Game is starting", {
                        icon: "🦆",
                    });
                    break;

                case GameStatus.BET_LOCKED:
                    toast("Bet is locked", {
                        icon: "🔒",
                    });
                    break;

                case GameStatus.CLOSED:
                    toast("Game is closed", {
                        icon: "💸",
                    });
                    break;
            }

        dispatch(setReceivedMessage(data));
    });

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {state.receivedMessage.second >= 0 ? children : <Loading />}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
