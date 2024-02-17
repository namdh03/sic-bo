import { BetType } from "@/contexts/app/app.enum";

export type BetListStyleProps = {
    $betType?: BetType;
};

export type BetAmountStyleProps = {
    $valueBet?: number | string;
    $currentBet?: number | string;
};
