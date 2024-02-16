import icons from "@/assets/icons";
import { useAuth } from "@/hooks";

import { BigWallet, MoneyWrapper, MyWallet, SmallWallet } from "./Money.styled";

const Money = () => {
    const { user } = useAuth();

    return (
        <MoneyWrapper>
            <MyWallet>
                <span>{user?.wallet}</span>
                <img src={icons.dollar} alt="dollar" />
            </MyWallet>

            <SmallWallet>
                <span>Small: </span>
                <span>{user?.min}</span>
            </SmallWallet>

            <BigWallet>
                <span>Big: </span>
                <span>{user?.max}</span>
            </BigWallet>
        </MoneyWrapper>
    );
};

export default Money;
