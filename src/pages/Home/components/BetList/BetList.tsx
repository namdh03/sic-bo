import { memo } from "react";

import Modal from "@/components/Modal";
import { BetType } from "@/contexts/app/app.enum";
import { setBetAmount } from "@/contexts/app/reducer";
import { useApp } from "@/hooks";
import { formatCurrency } from "@/utils";

import { BestItem, BetList } from "./BetList.styled";

const betList = [1000, 2000, 5000, 10000, 20000, 50000];

const Bet = memo(() => {
    const { bet, dispatch } = useApp();

    const handleSetAmount = (amount: number) => {
        dispatch(setBetAmount(amount));
        if (amount === bet.amount) dispatch(setBetAmount(0));
    };

    return (
        <>
            <Modal
                isOpen={!!bet.amount}
                title={`BET: ${
                    bet.betType === BetType.TAI
                        ? "BIG"
                        : bet.betType === BetType.XIU
                        ? "SMALL"
                        : "UNKNOWN"
                }`}
                description={bet.amount?.toLocaleString("vi-VN")}
                confirmText="ACCEPT"
            />

            <BetList $betType={bet.betType}>
                {betList.map((value) => (
                    <BestItem
                        key={value}
                        $currentBet={bet.amount}
                        $valueBet={value}
                        onClick={() => handleSetAmount(value)}
                    >
                        {formatCurrency(value)}
                    </BestItem>
                ))}

                <BestItem $currentBet={bet.amount} $valueBet="ALL">
                    ALL
                </BestItem>
            </BetList>
        </>
    );
});

export default Bet;
