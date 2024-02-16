import { memo } from "react";

import { useApp } from "@/hooks";
import { getMultiplesOf90, getRandomElementsFromArray } from "@/utils";

import { DiceWrapper, Dot, Side } from "./Dice.styled";
import { DiceProps } from "./Dice.type";

const multipleValues = getMultiplesOf90(-2160, 2160);

const Dice = memo(({ value }: DiceProps) => {
    const {
        receivedMessage: { gameStatus },
    } = useApp();
    const randomValues = getRandomElementsFromArray(multipleValues, 18);

    const renderSide = () => {
        const sides = [];

        for (let i = 1; i <= 6; i++) {
            if (i === value) {
                sides.unshift(
                    <Side key={value}>
                        <Dot $value={value} />
                    </Side>
                );

                continue;
            }

            sides.push(
                <Side key={i}>
                    <Dot $value={i} />
                </Side>
            );
        }

        return sides;
    };

    return (
        <DiceWrapper
            $gameStatus={gameStatus}
            $value={value}
            $randomValues={randomValues}
        >
            {renderSide()}
        </DiceWrapper>
    );
});

export default Dice;
