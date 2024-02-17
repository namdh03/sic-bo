import { GameStatus } from "./app.enum";
import { AppState } from "./app.interface";

const initialState: AppState = {
    receivedMessage: {
        amountMaxOfAll: 0,
        amountMinOfAll: 0,
        diceResult: {
            dice1: 0,
            dice2: 0,
            dice3: 0,
        },
        gameStatus: GameStatus.CLOSED,
        second: -1,
    },
    bet: {
        betType: undefined,
        amount: 0,
    },
};

export default initialState;
