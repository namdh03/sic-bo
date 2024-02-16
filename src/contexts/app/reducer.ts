import { AppActionType } from "./app.enum";
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
