import icons from "@/assets/icons";

import { BigWallet, MoneyWrapper, MyWallet, SmallWallet } from "./Money.styled";

const Money = () => {
    return (
        <MoneyWrapper>
            <MyWallet>
                <span>200.000.000</span>
                <img src={icons.dollar} alt="dollar" />
            </MyWallet>

            <SmallWallet>
                <span>Small: </span>
                <span>5K</span>
            </SmallWallet>

            <BigWallet>
                <span>Big: </span>
                <span>10K</span>
            </BigWallet>
        </MoneyWrapper>
    );
};

export default Money;
