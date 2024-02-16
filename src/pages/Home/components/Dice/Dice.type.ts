import { GameStatus } from "@/contexts/app/app.enum";

export type DiceProps = {
    value: number;
};

export type DiceStyledProps = {
    $gameStatus: GameStatus;
    $value: number;
    $randomValues: number[];
};
