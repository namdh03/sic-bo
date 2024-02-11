import {
    createContext,
    FC,
    PropsWithChildren,
    useEffect,
    useReducer,
} from "react";

import initialState from "./app.initialState";
import { AppContextType } from "./app.interface";
import { reducer, setValue, switchFlag } from "./reducer";

const AppContext = createContext<AppContextType>({
    ...initialState,
    dispatch: () => null,
});

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const id = setInterval(() => {
            dispatch(
                setValue({
                    left: Math.floor(Math.random() * 6) + 1,
                    center: Math.floor(Math.random() * 6) + 1,
                    right: Math.floor(Math.random() * 6) + 1,
                })
            );

            dispatch(switchFlag());
        }, 10000);

        return () => clearInterval(id);
    }, []);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
