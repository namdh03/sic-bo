import styled, { css } from "styled-components";

import theme from "@/themes";

export const QuackWrapper = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    margin-top: 6px;
`;

export const Lip = styled.div<{ $flag: boolean }>`
    display: flex;
    width: 200px;
    height: 100%;
    padding: 26px 14px 14px;
    background-color: ${theme.colors.primary};
    border-radius: 50%;
    animation: ${({ $flag }) => `quack-${$flag}`} ease-in-out 3s forwards 4.25s;

    & > div::before {
        content: "";
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.tertiary};
        animation: ${({ $flag }) => `show-${$flag}`} ease-in-out 3.5s forwards
            4s;

        ${({ $flag }) => css`
            @keyframes ${"show-" + $flag} {
                0% {
                    opacity: 0;
                    visibility: hidden;
                    z-index: 0;
                }

                25%,
                50%,
                75% {
                    opacity: 1;
                    visibility: visible;
                    z-index: 1;
                }

                100% {
                    opacity: 0;
                    visibility: hidden;
                    z-index: 0;
                }
            }
        `}
    }

    ${({ $flag }) => css`
        @keyframes ${"quack-" + $flag} {
            0% {
                height: 100%;
            }

            25%,
            50%,
            75% {
                height: 50%;
            }

            100% {
                height: 100%;
            }
        }
    `}
`;

export const Mouth = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    width: 170px;
    height: 100%;
    background-color: ${theme.colors.tertiary};
    border-radius: 50%;
    overflow: hidden;
    transition: all linear 1s;
`;

const DuckCheek = css`
    padding: 16px;
    background-color: ${theme.colors.primary};
    border-radius: 999px;
    color: ${theme.colors.white};
    font-size: 1.4rem;
    font-weight: 600;
`;

export const LeftCheek = styled.div`
    ${DuckCheek}
`;

export const RightCheek = styled.div`
    ${DuckCheek}
`;
