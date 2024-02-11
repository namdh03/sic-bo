import styled from "styled-components";

import theme from "@/themes";

export const BetList = styled.ul`
    position: absolute;
    left: 50%;
    bottom: -31px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
`;

export const BestItem = styled.li`
    padding: 8px 14px;
    border-radius: 10px;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;

    &:nth-child(odd) {
        color: ${theme.colors.tertiary};
        background-color: ${theme.colors.quaternary};
    }

    &:nth-child(even) {
        color: ${theme.colors.quaternary};
        background-color: ${theme.colors.tertiary};
    }
`;
