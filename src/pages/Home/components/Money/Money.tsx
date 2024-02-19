import { memo } from "react";

import icons from "@/assets/icons";
import { useAuth } from "@/hooks";
import { formatCurrency } from "@/utils";

import { BigWallet, MoneyWrapper, MyWallet, SmallWallet } from "./Money.styled";

const Money = memo(() => {
    const { user } = useAuth();

    return (
        user && (
            <MoneyWrapper>
                <MyWallet>
                    <span>{user.wallet.toLocaleString("vi-VN")}</span>
                    <img src={icons.dollar} alt="dollar" />
                </MyWallet>

                <SmallWallet>
                    <span>Small: </span>
                    <span>{formatCurrency(user.min)}</span>
                </SmallWallet>

                <BigWallet>
                    <span>Big: </span>
                    <span>{formatCurrency(user.max)}</span>
                </BigWallet>
            </MoneyWrapper>
        )
    );
});

export default Money;
