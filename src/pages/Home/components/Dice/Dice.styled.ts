import styled, { css } from "styled-components";

import { GameStatus } from "@/contexts/app/app.enum";
import theme from "@/themes";

import { DiceStyledProps } from "./Dice.type";

const DICE_SIZE = 28;
const DOT_SIZE = 5;
const DOT_MARGIN = 8;

export const DiceWrapper = styled.article<DiceStyledProps>`
    width: ${DICE_SIZE}px;
    height: ${DICE_SIZE}px;

    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

    ${({ $gameStatus, $value, $randomValues }) =>
        ($gameStatus === GameStatus.STARTING ||
            $gameStatus === GameStatus.BET_LOCKED) &&
        css`
            -webkit-animation: roll-${$value}-${$randomValues[
                    $randomValues.length - 1
                ]}
                linear 20s infinite;
            animation: roll-${$value}-${$randomValues[$randomValues.length - 1]}
                linear 20s infinite;

            @-webkit-keyframes roll-${$value}-${$randomValues[
                $randomValues.length - 1
            ]} {
                0% {
                    -webkit-transform: rotateX(0) rotateZ(0);
                    transform: rotateX(0) rotateZ(0);
                }

                10% {
                    -webkit-transform: rotateY(${$randomValues[0]}deg)
                        rotateZ(${$randomValues[1]}deg);
                    transform: rotateY(${$randomValues[0]}deg)
                        rotateZ(${$randomValues[1]}deg);
                }

                20% {
                    -webkit-transform: rotateX(${$randomValues[2]}deg)
                        rotateZ(${$randomValues[3]}deg);
                    transform: rotateX(${$randomValues[2]}deg)
                        rotateZ(${$randomValues[3]}deg);
                }

                30% {
                    -webkit-transform: rotateY(${$randomValues[4]}deg)
                        rotateZ(${$randomValues[5]}deg);
                    transform: rotateY(${$randomValues[4]}deg)
                        rotateZ(${$randomValues[5]}deg);
                }

                40% {
                    -webkit-transform: rotateY(${$randomValues[6]}deg)
                        rotateZ(${$randomValues[7]}deg);
                    transform: rotateY(${$randomValues[6]}deg)
                        rotateZ(${$randomValues[7]}deg);
                }

                50% {
                    -webkit-transform: rotateX(${$randomValues[8]}deg)
                        rotateZ(${$randomValues[9]}deg);
                    transform: rotateX(${$randomValues[8]}deg)
                        rotateZ(${$randomValues[9]}deg);
                }

                60% {
                    -webkit-transform: rotateY(${$randomValues[10]}deg)
                        rotateZ(${$randomValues[11]}deg);
                    transform: rotateY(${$randomValues[10]}deg)
                        rotateZ(${$randomValues[11]}deg);
                }

                70% {
                    -webkit-transform: rotateX(${$randomValues[12]}deg)
                        rotateZ(${$randomValues[13]}deg);
                    transform: rotateX(${$randomValues[12]}deg)
                        rotateZ(${$randomValues[13]}deg);
                }

                80% {
                    -webkit-transform: rotateY(${$randomValues[14]}deg)
                        rotateZ(${$randomValues[15]}deg);
                    transform: rotateY(${$randomValues[14]}deg)
                        rotateZ(${$randomValues[15]}deg);
                }

                90% {
                    -webkit-transform: rotateX(${$randomValues[16]}deg)
                        rotateZ(${$randomValues[17]}deg);
                    transform: rotateX(${$randomValues[16]}deg)
                        rotateZ(${$randomValues[17]}deg);
                }

                100% {
                    -webkit-transform: rotateX(1080deg) rotateZ(-1080deg);
                    transform: rotateX(1080deg) rotateZ(-1080deg);
                }
            }
            @keyframes roll-${$value}-${$randomValues[
                $randomValues.length - 1
            ]} {
                0% {
                    -webkit-transform: rotateX(0) rotateZ(0);
                    transform: rotateX(0) rotateZ(0);
                }

                10% {
                    -webkit-transform: rotateY(${$randomValues[0]}deg)
                        rotateZ(${$randomValues[1]}deg);
                    transform: rotateY(${$randomValues[0]}deg)
                        rotateZ(${$randomValues[1]}deg);
                }

                20% {
                    -webkit-transform: rotateX(${$randomValues[2]}deg)
                        rotateZ(${$randomValues[3]}deg);
                    transform: rotateX(${$randomValues[2]}deg)
                        rotateZ(${$randomValues[3]}deg);
                }

                30% {
                    -webkit-transform: rotateY(${$randomValues[4]}deg)
                        rotateZ(${$randomValues[5]}deg);
                    transform: rotateY(${$randomValues[4]}deg)
                        rotateZ(${$randomValues[5]}deg);
                }

                40% {
                    -webkit-transform: rotateY(${$randomValues[6]}deg)
                        rotateZ(${$randomValues[7]}deg);
                    transform: rotateY(${$randomValues[6]}deg)
                        rotateZ(${$randomValues[7]}deg);
                }

                50% {
                    -webkit-transform: rotateX(${$randomValues[8]}deg)
                        rotateZ(${$randomValues[9]}deg);
                    transform: rotateX(${$randomValues[8]}deg)
                        rotateZ(${$randomValues[9]}deg);
                }

                60% {
                    -webkit-transform: rotateY(${$randomValues[10]}deg)
                        rotateZ(${$randomValues[11]}deg);
                    transform: rotateY(${$randomValues[10]}deg)
                        rotateZ(${$randomValues[11]}deg);
                }

                70% {
                    -webkit-transform: rotateX(${$randomValues[12]}deg)
                        rotateZ(${$randomValues[13]}deg);
                    transform: rotateX(${$randomValues[12]}deg)
                        rotateZ(${$randomValues[13]}deg);
                }

                80% {
                    -webkit-transform: rotateY(${$randomValues[14]}deg)
                        rotateZ(${$randomValues[15]}deg);
                    transform: rotateY(${$randomValues[14]}deg)
                        rotateZ(${$randomValues[15]}deg);
                }

                90% {
                    -webkit-transform: rotateX(${$randomValues[16]}deg)
                        rotateZ(${$randomValues[17]}deg);
                    transform: rotateX(${$randomValues[16]}deg)
                        rotateZ(${$randomValues[17]}deg);
                }

                100% {
                    -webkit-transform: rotateX(1080deg) rotateZ(-1080deg);
                    transform: rotateX(1080deg) rotateZ(-1080deg);
                }
            }
        `}
`;

export const Side = styled.div`
    position: absolute;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    width: ${DICE_SIZE}px;
    height: ${DICE_SIZE}px;
    border-radius: 2px;
    background-color: ${theme.colors.white};

    &:nth-child(1) {
        -webkit-transform: translateZ(${DICE_SIZE / 2}px);
        transform: translateZ(${DICE_SIZE / 2}px);
    }

    &:nth-child(2) {
        -webkit-transform: rotateY(-180deg) translateZ(${DICE_SIZE / 2}px);
        transform: rotateY(-180deg) translateZ(${DICE_SIZE / 2}px);
    }

    &:nth-child(3) {
        -webkit-transform: rotateY(-90deg) translateZ(${DICE_SIZE / 2}px);
        transform: rotateY(-90deg) translateZ(${DICE_SIZE / 2}px);
    }

    &:nth-child(4) {
        -webkit-transform: rotateX(90deg) translateZ(${DICE_SIZE / 2}px);
        transform: rotateX(90deg) translateZ(${DICE_SIZE / 2}px);
    }

    &:nth-child(5) {
        -webkit-transform: rotateX(-90deg) translateZ(${DICE_SIZE / 2}px);
        transform: rotateX(-90deg) translateZ(${DICE_SIZE / 2}px);
    }

    &:nth-child(6) {
        -webkit-transform: rotateY(90deg) translateZ(${DICE_SIZE / 2}px);
        transform: rotateY(90deg) translateZ(${DICE_SIZE / 2}px);
    }
`;

export const Dot = styled.span<{ $value: number }>`
    display: inline-block;
    width: ${DOT_SIZE}px;
    height: ${DOT_SIZE}px;
    border-radius: 50%;

    ${({ $value }) => {
        switch ($value) {
            case 1:
                return css`
                    background-color: ${theme.colors.black};
                `;

            case 2:
                return css`
                    background-color: transparent;

                    -webkit-box-shadow: -${DOT_MARGIN}px 0 0 ${theme.colors.black},
                        ${DOT_MARGIN}px 0 0 ${theme.colors.black};
                    box-shadow: -${DOT_MARGIN}px 0 0 ${theme.colors.black},
                        ${DOT_MARGIN}px 0 0 ${theme.colors.black};
                `;

            case 3:
                return css`
                    background-color: ${theme.colors.black};

                    -webkit-box-shadow: -${DOT_MARGIN}px 0 0 ${theme.colors.black},
                        ${DOT_MARGIN}px 0 0 ${theme.colors.black};
                    box-shadow: -${DOT_MARGIN}px 0 0 ${theme.colors.black},
                        ${DOT_MARGIN}px 0 0 ${theme.colors.black};
                `;

            case 4:
                return css`
                    background-color: transparent;

                    -webkit-box-shadow: -${DOT_MARGIN}px -${DOT_MARGIN}px 0
                            ${theme.colors.black},
                        ${DOT_MARGIN}px -${DOT_MARGIN}px 0 ${theme.colors.black},
                        -${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black},
                        ${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black};
                    box-shadow: -${DOT_MARGIN}px -${DOT_MARGIN}px 0
                            ${theme.colors.black},
                        ${DOT_MARGIN}px -${DOT_MARGIN}px 0 ${theme.colors.black},
                        -${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black},
                        ${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black};
                `;

            case 5:
                return css`
                    background-color: ${theme.colors.black};

                    -webkit-box-shadow: -${DOT_MARGIN}px -${DOT_MARGIN}px 0
                            ${theme.colors.black},
                        ${DOT_MARGIN}px -${DOT_MARGIN}px 0 ${theme.colors.black},
                        -${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black},
                        ${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black};
                    box-shadow: -${DOT_MARGIN}px -${DOT_MARGIN}px 0
                            ${theme.colors.black},
                        ${DOT_MARGIN}px -${DOT_MARGIN}px 0 ${theme.colors.black},
                        -${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black},
                        ${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black};
                `;

            case 6:
                return css`
                    background-color: transparent;

                    -webkit-box-shadow: -${DOT_MARGIN}px -${DOT_MARGIN}px 0
                            ${theme.colors.black},
                        ${DOT_MARGIN}px -${DOT_MARGIN}px 0 ${theme.colors.black},
                        -${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black},
                        ${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black},
                        -${DOT_MARGIN}px 0 0 ${theme.colors.black},
                        ${DOT_MARGIN}px 0 0 ${theme.colors.black};
                    box-shadow: -${DOT_MARGIN}px -${DOT_MARGIN}px 0
                            ${theme.colors.black},
                        ${DOT_MARGIN}px -${DOT_MARGIN}px 0 ${theme.colors.black},
                        -${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black},
                        ${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black},
                        -${DOT_MARGIN}px 0 0 ${theme.colors.black},
                        ${DOT_MARGIN}px 0 0 ${theme.colors.black};
                `;
        }
    }}
`;
