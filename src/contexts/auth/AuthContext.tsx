import {
    createContext,
    FC,
    PropsWithChildren,
    useEffect,
    useReducer,
} from "react";
import Cookies from "universal-cookie";

import Loading from "@/components/Loading";
import configs from "@/configs";
import { getUser } from "@/services/user";

import { AuthContextType, AuthState } from "./auth.interface";
import { initialize, reducer } from "./reducers";

const cookies = new Cookies(null, { path: "/" });

const initialState: AuthState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const AuthContext = createContext<AuthContextType>({
    ...initialState,
    dispatch: () => null,
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        (async () => {
            const token = cookies.get(configs.cookies.token);

            if (!token) {
                return dispatch(
                    initialize({ isAuthenticated: false, user: null })
                );
            }

            try {
                const {
                    data: { data },
                } = await getUser();
                dispatch(initialize({ isAuthenticated: true, user: data }));
            } catch (error) {
                dispatch(initialize({ isAuthenticated: false, user: null }));
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {state.isInitialized ? children : <Loading />}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
