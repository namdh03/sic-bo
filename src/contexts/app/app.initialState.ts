import { AppState } from "./app.interface";

const initialState: AppState = {
    value: {
        left: 0,
        center: 0,
        right: 0,
    },
    flag: false,
};

export default initialState;
