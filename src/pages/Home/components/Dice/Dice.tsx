import { DiceWrapper, Dot, Side } from "./Dice.styled";
import { DiceProps } from "./Dice.type";

const Dice = ({ value, flag }: DiceProps) => {
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
        <DiceWrapper $value={value} $flag={flag}>
            {renderSide()}
        </DiceWrapper>
    );
};

export default Dice;
