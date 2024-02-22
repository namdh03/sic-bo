import styled, { css } from "styled-components";

import { GameStatus } from "@/contexts/app/app.enum";
import { GameStyledProps } from "@/contexts/app/app.interface";
import theme from "@/themes";

import { DuckCheekStyleProps } from "./Quack.type";

export const QuackWrapper = styled.footer`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    height: 120px;
    margin-top: 6px;
`;

export const Lip = styled.div<GameStyledProps>`
    display: flex;
    width: 200px;
    height: 100%;
    padding: 26px 14px 14px;
    background-color: ${theme.colors.primary};
    border-radius: 50%;

    & > div::before {
        content: "";
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.tertiary};
    }

    ${({ $gameStatus }) => {
        switch ($gameStatus) {
            case GameStatus.BET_LOCKED:
                return css`
                    -webkit-animation: lip-close ease 1s forwards;
                    animation: lip-close ease 1s forwards;

                    & > div::before {
                        z-index: 0;
                        opacity: 0;
                        visibility: hidden;

                        -webkit-animation: palate-show ease 1s forwards;
                        animation: palate-show ease 1s forwards;
                    }

                    @-webkit-keyframes lip-close {
                        100% {
                            height: 50%;
                        }
                    }
                    @keyframes lip-close {
                        100% {
                            height: 50%;
                        }
                    }

                    @-webkit-keyframes palate-show {
                        100% {
                            z-index: 1;
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                    @keyframes palate-show {
                        100% {
                            z-index: 1;
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                `;

            case GameStatus.CLOSED:
                return css`
                    height: 50%;

                    -webkit-animation: lip-show ease 1s forwards 1s;
                    animation: lip-show ease 1s forwards 1s;

                    & > div::before {
                        z-index: 1;
                        opacity: 1;
                        visibility: visible;

                        -webkit-animation: palate-close ease 1s forwards 1s;
                        animation: palate-close ease 1s forwards 1s;
                    }

                    @-webkit-keyframes lip-show {
                        100% {
                            height: 100%;
                        }
                    }
                    @keyframes lip-show {
                        100% {
                            height: 100%;
                        }
                    }

                    @-webkit-keyframes palate-close {
                        100% {
                            z-index: 0;
                            opacity: 0;
                            visibility: hidden;
                        }
                    }
                    @keyframes palate-close {
                        100% {
                            z-index: 0;
                            opacity: 0;
                            visibility: hidden;
                        }
                    }
                `;
        }
    }}
`;

export const Mouth = styled.div`
    position: relative;
    z-index: 1;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    
    gap: 14px;
    width: 170px;
    height: 100%;
    background-color: ${theme.colors.tertiary};
    border-radius: 50%;
    overflow: hidden;
`;

const DuckCheek = css<DuckCheekStyleProps>`
    padding: 16px;
    background-color: ${theme.colors.primary};
    border-radius: 999px;
    border: 2px solid transparent;
    color: ${theme.colors.white};
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;

    ${({ $type, $betType }) => {
        if ($type === $betType)
            return css`
                border-color: ${theme.colors.white};
            `;
    }}
`;

export const LeftCheek = styled.div<DuckCheekStyleProps>`
    ${DuckCheek}
`;

export const RightCheek = styled.div<DuckCheekStyleProps>`
    ${DuckCheek}
`;
