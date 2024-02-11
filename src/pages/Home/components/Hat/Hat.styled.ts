import styled from "styled-components";

import theme from "@/themes";

export const HatWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-width: 36%;
    height: 54px;
    background-color: ${theme.colors.black};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;

    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        display: inline-block;
        width: calc(100% + 180px);
        padding: 5px 0;
        background-color: ${theme.colors.black};
        border-radius: 20px;
    }
`;

export const Time = styled.span`
    padding: 8px 24px;
    font-size: 2.4rem;
    font-weight: 600;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.quaternary};
    border-radius: 20px;
`;
