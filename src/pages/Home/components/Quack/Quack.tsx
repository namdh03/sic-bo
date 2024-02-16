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
        receivedMessage: { diceResult, gameStatus },
    } = useApp();

    return (
        <QuackWrapper>
            <LeftCheek>QUACK</LeftCheek>
            <Lip $gameStatus={gameStatus}>
                <Mouth>
                    <Dice value={diceResult.dice1} />
                    <Dice value={diceResult.dice2} />
                    <Dice value={diceResult.dice3} />
                </Mouth>
            </Lip>
            <RightCheek>QUACK</RightCheek>
        </QuackWrapper>
    );
};

export default Actions;
