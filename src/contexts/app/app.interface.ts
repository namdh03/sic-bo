import { Dispatch } from "react";

import { AppActionType, GameStatus } from "./app.enum";

export interface DiceResult {
    dice1: number;
    dice2: number;
    dice3: number;
}

export interface ReceivedMessage {
    amountMaxOfAll: number;
    amountMinOfAll: number;
    diceResult: DiceResult;
    gameStatus: GameStatus;
    second: number;
}

export interface AppState {
    receivedMessage: ReceivedMessage;
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
    SET_RECEIVED_MESSAGE(
        state: AppState,
        action: PayloadAction<AppState>
    ): AppState;
    SWITCH_FLAG(state: AppState): AppState;
}
