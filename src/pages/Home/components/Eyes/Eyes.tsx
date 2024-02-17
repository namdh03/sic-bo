import { memo } from "react";

import icons from "@/assets/icons";
import { useApp } from "@/hooks";
import { formatCurrency } from "@/utils";

import { Eye, EyesWrapper } from "./Eyes.styled";

const Eyes = memo(() => {
    const {
        receivedMessage: { amountMaxOfAll, amountMinOfAll, gameStatus },
    } = useApp();

    return (
        <EyesWrapper>
            <Eye $gameStatus={gameStatus}>
                <span>
                    <b>SMALL</b>
                    <img src={icons.dollar} alt="dollar" />
                </span>
                <span>{formatCurrency(amountMinOfAll)}</span>
            </Eye>

            <Eye $gameStatus={gameStatus}>
                <span>
                    <b>BIG</b>
                    <img src={icons.dollar} alt="dollar" />
                </span>
                <span>{formatCurrency(amountMaxOfAll)}</span>
            </Eye>
        </EyesWrapper>
    );
});

export default Eyes;
