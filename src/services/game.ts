import { BetType } from "@/contexts/app/app.enum";

import { post } from "./api";

type BetParams = {
    betAmount: number;
    betType: BetType;
};

export const bet = (betParams: BetParams) => {
    return post("/api/v1/game/bet", betParams);
};
