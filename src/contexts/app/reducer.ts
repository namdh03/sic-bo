import { AppActionType, BetType } from "./app.enum";
import initialState from "./app.initialState";
import {
    AppState,
    PayloadAction,
    ReceivedMessage,
    ReducerHandler,
} from "./app.interface";

// Reducer
const reducerHandlers: ReducerHandler = {
    SET_RECEIVED_MESSAGE: (state, action) => ({
        ...state,
        receivedMessage: action.payload.receivedMessage,
    }),
    SET_BET_TYPE: (state, action) => ({
        ...state,
        bet: {
            ...state.bet,
            betType: action.payload.bet.betType,
        },
    }),
    SET_BET_AMOUNT: (state, action) => ({
        ...state,
        bet: {
            ...state.bet,
            amount: action.payload.bet.amount,
        },
    }),
};

export function reducer(state: AppState, action: PayloadAction<AppState>) {
    if (!reducerHandlers[action.type]) return state;

    return reducerHandlers[action.type](state, action);
}

// Actions
export const setReceivedMessage = (
    receivedMessage: ReceivedMessage
): PayloadAction<AppState> => ({
    type: AppActionType.SET_RECEIVED_MESSAGE,
    payload: {
        ...initialState,
        receivedMessage: receivedMessage,
    },
});

export const setBetType = (betType?: BetType): PayloadAction<AppState> => ({
    type: AppActionType.SET_BET_TYPE,
    payload: {
        ...initialState,
        bet: { betType },
    },
});

export const setBetAmount = (amount: number): PayloadAction<AppState> => ({
    type: AppActionType.SET_BET_AMOUNT,
    payload: {
        ...initialState,
        bet: { amount },
    },
});
