import { memo } from "react";

import { BetType } from "@/contexts/app/app.enum";
import { setBetAmount, setBetType } from "@/contexts/app/reducer";
import { useApp } from "@/hooks";

import Dice from "../Dice";

import {
    LeftCheek,
    Lip,
    Mouth,
    QuackWrapper,
    RightCheek,
} from "./Quack.styled";

const Quack = memo(() => {
    const {
        receivedMessage: { diceResult, gameStatus },
        bet,
        dispatch,
    } = useApp();

    const handleBet = (betType: BetType) => {
        dispatch(setBetType(betType));

        if (betType === bet.betType) {
            dispatch(setBetType(undefined));
            dispatch(setBetAmount(0));
        }
    };

    return (
        <QuackWrapper>
            <LeftCheek
                $type={BetType.XIU}
                $betType={bet.betType}
                onClick={() => handleBet(BetType.XIU)}
            >
                QUACK
            </LeftCheek>
            <Lip $gameStatus={gameStatus}>
                <Mouth>
                    <Dice value={diceResult.dice1} />
                    <Dice value={diceResult.dice2} />
                    <Dice value={diceResult.dice3} />
                </Mouth>
            </Lip>
            <RightCheek
                $type={BetType.TAI}
                $betType={bet.betType}
                onClick={() => handleBet(BetType.TAI)}
            >
                QUACK
            </RightCheek>
        </QuackWrapper>
    );
});

export default Quack;
