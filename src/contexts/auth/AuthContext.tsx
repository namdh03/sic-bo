import {
    createContext,
    FC,
    PropsWithChildren,
    useEffect,
    useReducer,
} from "react";

import Loading from "@/components/Loading";

import { AuthContextType, AuthState } from "./auth.interface";
import { reducer } from "./reducers";

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
        (() => {})();
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {state.isInitialized ? children : <Loading />}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
