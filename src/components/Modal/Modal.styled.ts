import styled, { css } from "styled-components";

import theme from "@/themes";

import { ModalStyleProps } from "./Modal.type";

export const ModalWrapper = styled.div<ModalStyleProps>`
    position: fixed;
    top: 50%;
    left: 50%;

    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    z-index: 9999;
    padding: 18px 30px;
    border-radius: 20px;
    background-color: ${theme.colors.quaternary};
    opacity: 0;
    visibility: hidden;

    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    gap: 20px;
    margin-top: 24px;

    button {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;

        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        -webkit-box-pack: center;
        -ms-flex-pack: center;
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

    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-animation: rotation 1s linear infinite;
    animation: rotation 1s linear infinite;

    @-webkit-keyframes rotation {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes rotation {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;
