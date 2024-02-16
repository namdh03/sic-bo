import Cookies from "universal-cookie";

import configs from "@/configs";

import { AuthActionType } from "./auth.enum";
import { AuthState, PayloadAction, ReducerHandler } from "./auth.interface";

const cookies = new Cookies(null, { path: "/" });

// Reducer
const reducerHandlers: ReducerHandler = {
    INITIALIZE(state: AuthState, action: PayloadAction<AuthState>): AuthState {
        const { isAuthenticated, user } = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
        };
    },

    SIGN_IN(state: AuthState, action: PayloadAction<AuthState>): AuthState {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },

    SIGN_OUT(state: AuthState): AuthState {
        return {
            ...state,
            isAuthenticated: false,
            user: null,
        };
    },
};

export function reducer(state: AuthState, action: PayloadAction<AuthState>) {
    if (!reducerHandlers[action.type]) return state;

    return reducerHandlers[action.type](state, action);
}

// Actions
export function initialize(payload: AuthState): PayloadAction<AuthState> {
    return {
        type: AuthActionType.INITIALIZE,
        payload,
    };
}

export function signIn(payload: AuthState): PayloadAction<AuthState> {
    return {
        type: AuthActionType.SIGN_IN,
        payload,
    };
}

export function signOut(): PayloadAction<AuthState> {
    cookies.remove(configs.cookies.token);

    return {
        type: AuthActionType.SIGN_OUT,
        payload: {
            user: null,
        },
    };
}
