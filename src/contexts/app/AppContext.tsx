import {
    createContext,
    FC,
    PropsWithChildren,
    useEffect,
    useReducer,
} from "react";
import toast from "react-hot-toast";
import { useSubscription } from "react-stomp-hooks";

import Loading from "@/components/Loading";
import configs from "@/configs";
import { useAuth } from "@/hooks";
import { getUser } from "@/services/user";
import { AppError, AxiosError } from "@/utils/interface";

import { signIn } from "../auth/reducers";

import { GameStatus } from "./app.enum";
import initialState from "./app.initialState";
import { AppContextType } from "./app.interface";
import { reducer, setReceivedMessage } from "./reducer";

const AppContext = createContext<AppContextType>({
    ...initialState,
    dispatch: () => null,
});

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    const { dispatch: authDispatch } = useAuth();
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

    useEffect(() => {
        if (state.receivedMessage.gameStatus === GameStatus.CLOSED)
            (async () => {
                try {
                    const {
                        data: { data },
                    } = await getUser();

                    authDispatch(signIn({ user: data }));
                } catch (error) {
                    const e = error as AxiosError<AppError>;
                    toast.error(
                        e.response?.data.message || "Something went wrong"
                    );
                }
            })();
    }, [authDispatch, state.receivedMessage.gameStatus]);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {state.receivedMessage.second >= 0 ? children : <Loading />}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
