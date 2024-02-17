import styled, { css } from "styled-components";

import theme from "@/themes";

import { BetAmountStyleProps, BetListStyleProps } from "./BetList.type";

export const BetList = styled.ul<BetListStyleProps>`
    position: absolute;
    left: 50%;
    bottom: -31px;
    transform: translate(-50%, 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;

    ${({ $betType }) =>
        $betType &&
        css`
            transform: translate(-50%, 0);
            opacity: 1;
            visibility: visible;
        `}
`;

export const BestItem = styled.li<BetAmountStyleProps>`
    padding: 8px 14px;
    border-radius: 10px;
    border: 2px solid transparent;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
    cursor: pointer;

    ${({ $currentBet, $valueBet }) =>
        $currentBet === $valueBet &&
        css`
            border-color: ${theme.colors.white};
        `}

    &:nth-child(odd) {
        color: ${theme.colors.tertiary};
        background-color: ${theme.colors.quaternary};
    }

    &:nth-child(even) {
        color: ${theme.colors.quaternary};
        background-color: ${theme.colors.tertiary};
    }
`;
