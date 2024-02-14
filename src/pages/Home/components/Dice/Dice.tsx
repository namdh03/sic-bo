import { memo } from "react";

import { getMultiplesOf90, getRandomElementsFromArray } from "@/utils";

import { DiceWrapper, Dot, Side } from "./Dice.styled";
import { DiceProps } from "./Dice.type";

const multipleValues = getMultiplesOf90(-2160, 2160);

const Dice = memo(({ value, flag }: DiceProps) => {
    const randomValues = getRandomElementsFromArray(multipleValues, 18);

    const renderSide = () => {
        const sides = [];

        for (let i = 1; i <= 6; i++) {
            if (i === value) continue;

            sides.push(
                <Side key={i}>
                    <Dot $value={i} />
                </Side>
            );
        }

        sides.unshift(
            <Side key={value}>
                <Dot $value={value} />
            </Side>
        );

        return sides;
    };

    return (
        <DiceWrapper $value={value} $flag={flag} $randomValues={randomValues}>
            {renderSide()}
        </DiceWrapper>
    );
});

export default Dice;
