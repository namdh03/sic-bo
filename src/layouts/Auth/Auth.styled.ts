import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import theme from "@/themes";

export const AuthWrapper = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    height: 100dvh;
    background-color: ${theme.colors.primary};
`;

export const AuthInner = styled.div<{ $reverse: boolean }>`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    ${({ $reverse }) =>
        $reverse &&
        css`
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse;
        `}

    gap: 70px;
    height: 340px;
`;

export const AuthImageWrapper = styled.figure`
    min-width: 290px;
    height: 100%;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const AuthFormWrapper = styled.div`
    min-width: 290px;

    h1 {
        color: ${theme.colors.secondary};
        font-size: 2.4rem;
        font-weight: 600;
    }
`;

export const AuthForm = styled.form`
    display: "flex";

    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: "column";
    flex-direction: "column";

    -webkit-box-align: "flex-start";
    -ms-flex-align: "flex-start";
    align-items: "flex-start";

    margin-top: 32px;
`;

export const AuthFormGroup = styled.div`
    width: 100%;

    & + & {
        margin-top: 18px;
    }

    label {
        display: block;
        color: ${theme.colors.quaternary};
        font-size: 1.6rem;
        font-weight: 400;
        cursor: pointer;
    }

    input {
        width: 100%;
        margin-top: 10px;
        padding: 16px 14px;
        border-radius: 8px;
        border: 2px solid ${theme.colors.tertiary};
        color: ${theme.colors.quaternary};
        font-size: 1.6rem;
        font-weight: 400;
        letter-spacing: 0.8px;

        &::placeholder {
            color: ${theme.colors.fifth};
        }
    }
`;

export const AuthButton = styled.button`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    width: 100%;
    height: 48px;
    margin-top: 28px;
    line-height: 28px;
    border-radius: 6px;
    background: ${theme.colors.secondary};
    color: ${theme.colors.tertiary};
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
`;

export const AuthLink = styled(Link)`
    display: block;
    margin-top: 8px;
    text-align: right;
    color: ${theme.colors.tertiary};
    font-size: 1.6rem;
    font-weight: 600;
`;

export const AuthButtonLoading = styled.div`
    display: inline-block;
    width: 28px;
    height: 28px;
    border: 3px solid ${theme.colors.white};
    border-bottom-color: transparent;
    border-radius: 50%;

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
