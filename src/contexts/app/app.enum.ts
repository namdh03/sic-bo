export enum AppActionType {
    SET_RECEIVED_MESSAGE = "SET_RECEIVED_MESSAGE",
    SET_BET_TYPE = "SET_BET_TYPE",
    SET_BET_AMOUNT = "SET_BET_AMOUNT",
}

export enum GameStatus {
    STARTING = "STARTING",
    BET_LOCKED = "BET_LOCKED",
    CLOSED = "CLOSED",
}

export enum GameResult {
    WIN = "WIN",
    LOSE = "LOSE",
}

export enum BetType {
    TAI = "TAI",
    XIU = "XIU",
}
