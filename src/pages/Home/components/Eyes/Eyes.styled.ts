import styled, { css } from "styled-components";

import theme from "@/themes";

export const EyesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 16px;

    span:first-child {
        color: ${theme.colors.white};
    }
`;

export const DuckEye = css<{ $flag: boolean }>`
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
        animation: ${({ $flag }) => `blink-${$flag}`} ease 1s forwards,
            ${({ $flag }) => `blink-back-${$flag}`} ease-in 1s forwards 6s;

        b {
            animation: ${({ $flag }) => `hidden-${$flag}`} ease 1s forwards,
                ${({ $flag }) => `hidden-back-${$flag}`} ease 1s forwards 6.5s;

            ${({ $flag }) => css`
                @keyframes ${"hidden-" + $flag} {
                    100% {
                        opacity: 0;
                    }
                }

                @keyframes ${"hidden-back-" + $flag} {
                    100% {
                        opacity: 1;
                    }
                }
            `}
        }

        img {
            position: absolute;
            top: calc(50% - 3px);
            left: 50%;
            transform: rotateY(-90deg) translate(-50%, -50%);
            width: 40px;
            height: 40px;
            animation: ${({ $flag }) => `slip-${$flag}`} ease 1s forwards 1s,
                ${({ $flag }) => `spin-${$flag}`} ease 1s forwards 2s 3,
                ${({ $flag }) => `slip-back-${$flag}`} ease 1s forwards 5s;

            ${({ $flag }) => css`
                @keyframes ${"slip-" + $flag} {
                    100% {
                        transform: rotateY(-90deg) translate(0, -50%);
                    }
                }

                @keyframes ${"slip-back-" + $flag} {
                    100% {
                        transform: rotateY(270deg) translate(-50%, -50%);
                    }
                }

                @keyframes ${"spin-" + $flag} {
                    0% {
                        transform: rotateY(-90deg) translate(0, -50%);
                    }

                    25% {
                        transform: rotateY(0deg) translate(0, -50%);
                    }

                    50% {
                        transform: rotateY(90deg) translate(0, -50%);
                    }

                    75% {
                        transform: rotateY(180deg) translate(0, -50%);
                    }

                    100% {
                        transform: rotateY(270deg) translate(0, -50%);
                    }
                }
            `}
        }

        ${({ $flag }) => css`
            @keyframes ${"blink-" + $flag} {
                100% {
                    transform: rotateY(90deg);
                }
            }

            @keyframes ${"blink-back-" + $flag} {
                100% {
                    transform: rotateY(0deg);
                }
            }
        `}
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

export const Eye = styled.div<{ $flag: boolean }>`
    ${DuckEye}
`;
