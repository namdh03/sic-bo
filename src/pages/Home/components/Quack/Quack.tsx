import { useEffect, useState } from "react";

import Dice from "../Dice";

import {
    LeftCheek,
    Lip,
    Mouth,
    QuackWrapper,
    RightCheek,
} from "./Quack.styled";

const Actions = () => {
    // Flag is used to trigger the animation again
    const [flag, setFlag] = useState<boolean>(false);
    const [value, setValue] = useState({
        left: 4,
        center: 5,
        right: 6,
    });

    useEffect(() => {
        setTimeout(() => {
            setValue({
                left: Math.floor(Math.random() * 6) + 1,
                center: Math.floor(Math.random() * 6) + 1,
                right: Math.floor(Math.random() * 6) + 1,
            });
            setFlag(!flag);
        }, 10000);
    }, [flag]);

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
