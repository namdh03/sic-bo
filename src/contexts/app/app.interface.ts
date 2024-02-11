import { Dispatch } from "react";

import { AppActionType } from "./app.enum";

export interface DiceValue {
    left: number;
    center: number;
    right: number;
}

export interface AppState {
    value: DiceValue;
    flag: boolean;
}

export interface PayloadAction<T> {
    type: AppActionType;
    payload: T;
}

export interface AppContextType extends AppState {
    dispatch: Dispatch<PayloadAction<AppState>>;
}

export interface ReducerHandler {
    SET_VALUE(state: AppState, action: PayloadAction<AppState>): AppState;
    SWITCH_FLAG(state: AppState): AppState;
}
