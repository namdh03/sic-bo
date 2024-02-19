import styled, { css } from "styled-components";

import { GameStatus } from "@/contexts/app/app.enum";
import { GameStyledProps } from "@/contexts/app/app.interface";
import theme from "@/themes";

export const EyesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 16px;

    span:first-child {
        color: ${theme.colors.white};
    }
`;

export const DuckEye = css<GameStyledProps>`
    position: relative;
    min-width: 110px;
    padding: 24px;
    border-radius: 30px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    font-size: 2rem;
    font-weight: 600;
    text-align: center;

    span:first-child {
        display: inline-block;
        transform-style: preserve-3d;

        img {
            position: absolute;
            top: calc(50% - 3px);
            left: 50%;
            transform: rotateY(-90deg) translate(-50%, -50%);
            width: 40px;
            height: 40px;
        }

        ${({ $gameStatus }) => {
            switch ($gameStatus) {
                case GameStatus.BET_LOCKED:
                    return css`
                        animation: blink ease 1s forwards;

                        @keyframes blink {
                            100% {
                                transform: rotateY(90deg);
                            }
                        }

                        b {
                            animation: hidden ease 1s forwards;

                            @keyframes hidden {
                                100% {
                                    opacity: 0;
                                }
                            }
                        }

                        img {
                            animation: slide-away ease 1s forwards 1s,
                                spin ease 1s infinite 2s;

                            @keyframes spin {
                                0% {
                                    transform: rotateY(-90deg)
                                        translate(0, -50%);
                                }

                                25% {
                                    transform: rotateY(0deg) translate(0, -50%);
                                }

                                50% {
                                    transform: rotateY(90deg) translate(0, -50%);
                                }

                                75% {
                                    transform: rotateY(180deg)
                                        translate(0, -50%);
                                }

                                100% {
                                    transform: rotateY(270deg)
                                        translate(0, -50%);
                                }
                            }

                            @keyframes slide-away {
                                100% {
                                    transform: rotateY(-90deg)
                                        translate(0, -50%);
                                }
                            }
                        }
                    `;

                case GameStatus.CLOSED:
                    return css`
                        transform: rotateY(90deg);
                        animation: blink-back ease 1s forwards 1s;

                        @keyframes blink-back {
                            100% {
                                transform: rotateY(0deg);
                            }
                        }

                        b {
                            opacity: 0;
                            animation: show ease 1s forwards 1s;

                            @keyframes show {
                                100% {
                                    opacity: 1;
                                }
                            }
                        }

                        img {
                            transform: rotateY(-90deg) translate(0, -50%);
                            animation: slide-back ease 1s forwards;

                            @keyframes slide-back {
                                100% {
                                    transform: rotateY(-90deg)
                                        translate(-50%, -50%);
                                }
                            }
                        }
                    `;
            }
        }}
    }

    span:last-child {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 4px 20px;
        font-size: 1.4rem;
        border-radius: 10px;
        color: ${theme.colors.tertiary};
        background-color: ${theme.colors.quaternary};
    }
`;

export const Eye = styled.div<GameStyledProps>`
    ${DuckEye}
`;
