import styled from "styled-components";

import theme from "@/themes";

export const HomeWrapper = styled.section`
    position: relative;
    
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    height: 100dvh;
    background-color: ${theme.colors.primary};
`;

export const Board = styled.section`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
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

        -o-object-fit: contain;
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

    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
`;
