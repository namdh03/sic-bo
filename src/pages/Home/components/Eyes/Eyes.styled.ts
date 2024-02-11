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

export const DuckEye = css`
    position: relative;
    display: inline-block;
    min-width: 110px;
    padding: 24px;
    border-radius: 30px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
    font-size: 2rem;
    font-weight: 600;
    text-align: center;

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

export const SmallEye = styled.div`
    ${DuckEye}
`;

export const BigEye = styled.div`
    ${DuckEye}
`;
