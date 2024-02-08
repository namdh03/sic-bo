import { Dispatch } from "react";

import { AuthActionType } from "./auth.enum";

export interface User {
    id: string;
}

export interface AuthState {
    isAuthenticated?: boolean;
    isInitialized?: boolean;
    user: User | null;
}

export interface PayloadAction<T> {
    type: AuthActionType;
    payload: T;
}

export interface AuthContextType extends AuthState {
    dispatch: Dispatch<PayloadAction<AuthState>>;
}

export interface ReducerHandler {
    INITIALIZE(state: AuthState, action: PayloadAction<AuthState>): AuthState;
    SIGN_IN(state: AuthState, action: PayloadAction<AuthState>): AuthState;
    SIGN_OUT(state: AuthState): AuthState;
}
