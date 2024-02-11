import styled, { css } from "styled-components";

import theme from "@/themes";

const DICE_SIZE = 28;
const DOT_SIZE = 5;
const DOT_MARGIN = 8;

export const DiceWrapper = styled.article<{ $value: number; $flag: boolean }>`
    width: ${DICE_SIZE}px;
    height: ${DICE_SIZE}px;
    transform-style: preserve-3d;
    animation: ${({ $value, $flag }) => `roll-${$value}-${$flag}`} linear 2s
        forwards 2;

    ${({ $value, $flag }) => {
        switch ($value) {
            case 1:
                return css`
                    @keyframes ${"roll-" + $value + "-" + $flag} {
                        0% {
                            transform: rotateX(0) rotateZ(0);
                        }

                        100% {
                            transform: rotateX(720deg) rotateZ(-720deg);
                        }
                    }
                `;

            case 2:
                return css`
                    @keyframes ${"roll-" + $value + "-" + $flag} {
                        0% {
                            transform: rotateX(0) rotateZ(0);
                        }

                        50% {
                            transform: rotateX(450deg) rotateZ(-720deg);
                        }

                        100% {
                            transform: rotateX(720deg) rotateZ(-720deg);
                        }
                    }
                `;

            case 3:
                return css`
                    @keyframes ${"roll-" + $value + "-" + $flag} {
                        0% {
                            transform: rotateY(0) rotateZ(0);
                        }

                        50% {
                            transform: rotateY(-450deg) rotateZ(-1440deg);
                        }

                        100% {
                            transform: rotateX(720deg) rotateZ(-720deg);
                        }
                    }
                `;

            case 4:
                return css`
                    @keyframes ${"roll-" + $value + "-" + $flag} {
                        0% {
                            transform: rotateY(0) rotateZ(0);
                        }

                        50% {
                            transform: rotateY(810deg) rotateZ(720deg);
                        }

                        100% {
                            transform: rotateX(720deg) rotateZ(-720deg);
                        }
                    }
                `;

            case 5:
                return css`
                    @keyframes ${"roll-" + $value + "-" + $flag} {
                        0% {
                            transform: rotateX(0) rotateZ(0);
                        }

                        50% {
                            transform: rotateX(-810deg) rotateZ(-1080deg);
                        }

                        100% {
                            transform: rotateX(720deg) rotateZ(-720deg);
                        }
                    }
                `;

            case 6:
                return css`
                    @keyframes ${"roll-" + $value + "-" + $flag} {
                        0% {
                            transform: rotateX(0) rotateZ(0);
                        }

                        50% {
                            transform: rotateX(-900deg) rotateZ(1080deg);
                        }

                        100% {
                            transform: rotateX(720deg) rotateZ(-720deg);
                        }
                    }
                `;
        }
    }}
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
