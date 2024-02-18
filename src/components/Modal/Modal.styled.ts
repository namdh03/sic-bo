import styled, { css } from "styled-components";

import theme from "@/themes";

import { ModalStyleProps } from "./Modal.type";

export const ModalWrapper = styled.div<ModalStyleProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    padding: 18px 30px;
    border-radius: 20px;
    background-color: ${theme.colors.quaternary};
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;

    ${({ $isOpen }) =>
        $isOpen &&
        css`
            opacity: 1;
            visibility: visible;
        `}

    h2 {
        color: ${theme.colors.tertiary};
        font-size: 1.6rem;
        font-weight: 600;
    }

    p {
        margin-top: 10px;
        color: ${theme.colors.primary};
        font-size: 2rem;
        font-weight: 600;
    }
`;

export const ModalActions = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 24px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 110px;
        padding: 0 6px;
        height: 30px;
        line-height: 30px;
        border-radius: 10px;
        border: 2px solid transparent;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        font-size: 1.4rem;
        font-weight: 600;
        cursor: pointer;

        &:active {
            border-color: ${theme.colors.white};
        }
    }
`;

export const ModalLoading = styled.div`
    width: 20px;
    height: 20px;
    border: 3px solid ${theme.colors.white};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;
