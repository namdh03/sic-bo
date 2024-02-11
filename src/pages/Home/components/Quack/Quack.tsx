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
    const { value, flag } = useApp();

    return (
        <QuackWrapper>
            <LeftCheek>QUACK</LeftCheek>
            <Lip $flag={flag}>
                <Mouth>
                    <Dice flag={flag} value={value.left} />
                    <Dice flag={flag} value={value.center} />
                    <Dice flag={flag} value={value.right} />
                </Mouth>
            </Lip>
            <RightCheek>QUACK</RightCheek>
        </QuackWrapper>
    );
};

export default Actions;
