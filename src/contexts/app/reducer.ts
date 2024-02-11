import { AppActionType } from "./app.enum";
import initialState from "./app.initialState";
import { AppState, PayloadAction, ReducerHandler } from "./app.interface";

// Reducer
const reducerHandlers: ReducerHandler = {
    SET_VALUE: (state, action) => ({
        ...state,
        value: action.payload.value,
    }),

    SWITCH_FLAG: (state) => ({
        ...state,
        flag: !state.flag,
    }),
};

export function reducer(state: AppState, action: PayloadAction<AppState>) {
    if (!reducerHandlers[action.type]) return state;

    return reducerHandlers[action.type](state, action);
}

// Actions
export const setValue = (
    value: AppState["value"]
): PayloadAction<AppState> => ({
    type: AppActionType.SET_VALUE,
    payload: {
        ...initialState,
        value,
    },
});

export const switchFlag = (): PayloadAction<AppState> => ({
    type: AppActionType.SWITCH_FLAG,
    payload: initialState,
});
