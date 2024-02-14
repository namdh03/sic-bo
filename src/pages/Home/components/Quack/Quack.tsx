import { useApp } from "@/hooks";

import Dice from "../Dice";

import {
    LeftCheek,
    Lip,
    Mouth,
    QuackWrapper,
    RightCheek,
} from "./Quack.styled";

const Actions = () => {
    const {
        receivedMessage: { diceResult },
        flag,
    } = useApp();

    return (
        <QuackWrapper>
            <LeftCheek>QUACK</LeftCheek>
            <Lip $flag={flag}>
                <Mouth>
                    <Dice flag={flag} value={diceResult.dice1} />
                    <Dice flag={flag} value={diceResult.dice2} />
                    <Dice flag={flag} value={diceResult.dice3} />
                </Mouth>
            </Lip>
            <RightCheek>QUACK</RightCheek>
        </QuackWrapper>
    );
};

export default Actions;
