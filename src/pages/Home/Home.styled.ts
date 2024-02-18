import styled from "styled-components";

import theme from "@/themes";

export const HomeWrapper = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100dvh;
    background-color: ${theme.colors.primary};
`;

export const Board = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 16px;
`;

export const Face = styled.div`
    position: relative;
    width: 518px;
    margin-top: 10px;

    img {
        display: inline-block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const FaceInner = styled.div`
    position: absolute;
    inset: 0;
    margin: 12px 14px;
    padding: 30px 40px 10px;
    border: 1px solid ${theme.colors.primary};
    border-radius: 999px;
`;

export const SignOut = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    padding: 12px;
    cursor: pointer;
`;

export const SignIn = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    padding: 12px;
    cursor: pointer;
    transform: rotate(180deg);
`;
