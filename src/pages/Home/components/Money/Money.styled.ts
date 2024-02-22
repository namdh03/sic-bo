import styled, { css } from "styled-components";

import theme from "@/themes";

export const MoneyWrapper = styled.section`
    position: absolute;
    top: 0;
    left: 0;

    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;

    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
`;

const MoneyItem = css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    
    gap: 10px;
    padding: 6px 24px;
    border-end-end-radius: 10px;

    span {
        font-size: 1.4rem;
        font-weight: 600;
    }
`;

export const MyWallet = styled.div`
    ${MoneyItem}

    background-color: ${theme.colors.tertiary};

    span {
        font-size: 1.6rem;
        color: ${theme.colors.quaternary};
    }
`;

export const SmallWallet = styled.div`
    ${MoneyItem}

    background-color: ${theme.colors.quaternary};

    span {
        color: ${theme.colors.tertiary};
    }
`;

export const BigWallet = styled.div`
    ${MoneyItem}

    background-color: ${theme.colors.tertiary};

    span {
        color: ${theme.colors.quaternary};
    }
`;
