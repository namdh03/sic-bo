import {
    createContext,
    FC,
    PropsWithChildren,
    useEffect,
    useReducer,
    useState,
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
    const [portrait, setPortrait] = useState<boolean>(
        window.matchMedia("(orientation: portrait").matches
    );

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

    // Detect Landscape or Portrait mode with JavaScript
    useEffect(() => {
        window
            .matchMedia("(orientation: portrait)")
            .addEventListener("change", (e) => setPortrait(e.matches));

        return () => {
            window
                .matchMedia("(orientation: portrait)")
                .removeEventListener("change", () => {});
        };
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {state.isInitialized ? (
                portrait ? (
                    <p>
                        Please rotate your device to landscape mode to view this
                        page.
                    </p>
                ) : (
                    children
                )
            ) : (
                <Loading />
            )}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
