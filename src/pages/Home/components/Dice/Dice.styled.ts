import styled, { css } from "styled-components";

import theme from "@/themes";

const DICE_SIZE = 28;
const DOT_SIZE = 5;
const DOT_MARGIN = 8;

export const DiceWrapper = styled.article<{
    $value: number;
    $flag: boolean;
    $randomValues: number[];
}>`
    width: ${DICE_SIZE}px;
    height: ${DICE_SIZE}px;
    transform-style: preserve-3d;
    animation: ${({ $value, $flag, $randomValues }) =>
            `roll-${$value}-${$flag}${$randomValues[$randomValues.length - 1]}`}
        linear 6s forwards;

    ${({ $value, $flag, $randomValues }) => css`
        @keyframes ${"roll-" +
        $value +
        "-" +
        $flag +
        $randomValues[$randomValues.length - 1]} {
            0% {
                transform: rotateX(0) rotateZ(0);
            }

            10% {
                transform: rotateY(${$randomValues[0]}deg)
                    rotateZ(${$randomValues[1]}deg);
            }

            20% {
                transform: rotateX(${$randomValues[2]}deg)
                    rotateZ(${$randomValues[3]}deg);
            }

            30% {
                transform: rotateY(${$randomValues[4]}deg)
                    rotateZ(${$randomValues[5]}deg);
            }

            40% {
                transform: rotateY(${$randomValues[6]}deg)
                    rotateZ(${$randomValues[7]}deg);
            }

            50% {
                transform: rotateX(${$randomValues[8]}deg)
                    rotateZ(${$randomValues[9]}deg);
            }

            60% {
                transform: rotateY(${$randomValues[10]}deg)
                    rotateZ(${$randomValues[11]}deg);
            }

            70% {
                transform: rotateX(${$randomValues[12]}deg)
                    rotateZ(${$randomValues[13]}deg);
            }

            80% {
                transform: rotateY(${$randomValues[14]}deg)
                    rotateZ(${$randomValues[15]}deg);
            }

            90% {
                transform: rotateX(${$randomValues[16]}deg)
                    rotateZ(${$randomValues[17]}deg);
            }

            100% {
                transform: rotateX(1080deg) rotateZ(-1080deg);
            }
        }
    `};
`;

export const Side = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${DICE_SIZE}px;
    height: ${DICE_SIZE}px;
    border-radius: 2px;
    background-color: ${theme.colors.white};

    &:nth-child(1) {
        transform: translateZ(${DICE_SIZE / 2}px);
    }

    &:nth-child(2) {
        transform: rotateY(-180deg) translateZ(${DICE_SIZE / 2}px);
    }

    &:nth-child(3) {
        transform: rotateY(-90deg) translateZ(${DICE_SIZE / 2}px);
    }

    &:nth-child(4) {
        transform: rotateX(90deg) translateZ(${DICE_SIZE / 2}px);
    }

    &:nth-child(5) {
        transform: rotateX(-90deg) translateZ(${DICE_SIZE / 2}px);
    }

    &:nth-child(6) {
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
                    box-shadow: -${DOT_MARGIN}px 0 0 ${theme.colors.black},
                        ${DOT_MARGIN}px 0 0 ${theme.colors.black};
                `;

            case 3:
                return css`
                    background-color: ${theme.colors.black};
                    box-shadow: -${DOT_MARGIN}px 0 0 ${theme.colors.black},
                        ${DOT_MARGIN}px 0 0 ${theme.colors.black};
                `;

            case 4:
                return css`
                    background-color: transparent;
                    box-shadow: -${DOT_MARGIN}px -${DOT_MARGIN}px 0
                            ${theme.colors.black},
                        ${DOT_MARGIN}px -${DOT_MARGIN}px 0 ${theme.colors.black},
                        -${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black},
                        ${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black};
                `;

            case 5:
                return css`
                    background-color: ${theme.colors.black};
                    box-shadow: -${DOT_MARGIN}px -${DOT_MARGIN}px 0
                            ${theme.colors.black},
                        ${DOT_MARGIN}px -${DOT_MARGIN}px 0 ${theme.colors.black},
                        -${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black},
                        ${DOT_MARGIN}px ${DOT_MARGIN}px 0 ${theme.colors.black};
                `;

            case 6:
                return css`
                    background-color: transparent;
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
