import { Dispatch } from "react";

import { AppActionType, BetType, GameStatus } from "./app.enum";

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

export interface Bet {
    betType?: BetType;
    amount?: number | string;
}

export interface AppState {
    receivedMessage: ReceivedMessage;
    bet: Bet;
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
    SET_BET_TYPE(state: AppState, action: PayloadAction<AppState>): AppState;
    SET_BET_AMOUNT(state: AppState, action: PayloadAction<AppState>): AppState;
}

export interface GameStyledProps {
    $gameStatus: GameStatus;
}
