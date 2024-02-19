import { memo, useState } from "react";
import toast from "react-hot-toast";

import Modal from "@/components/Modal";
import { BetType } from "@/contexts/app/app.enum";
import { setBetAmount } from "@/contexts/app/reducer";
import { signIn } from "@/contexts/auth/reducers";
import { useApp, useAuth } from "@/hooks";
import { betAll, betSingle } from "@/services/game";
import { formatCurrency } from "@/utils";
import { AppError, AxiosError } from "@/utils/interface";

import { BestItem, BetList } from "./BetList.styled";

const betList = [1000, 2000, 5000, 10000, 20000, 50000];

const Bet = memo(() => {
    const { user, dispatch: authDispatch } = useAuth();
    const { bet, dispatch } = useApp();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSetAmount = (amount: number | string) => {
        dispatch(setBetAmount(amount));
        if (amount === bet.amount) dispatch(setBetAmount(0));
    };

    const handleDispatchAmount = (
        balance: number,
        betType: BetType,
        betAmount: number
    ) => {
        if (!user) return;

        authDispatch(
            signIn({
                user: {
                    ...user,
                    wallet: balance,
                    min:
                        betType === BetType.XIU
                            ? user.min + betAmount
                            : user.min,
                    max:
                        betType === BetType.TAI
                            ? user.max + betAmount
                            : user.max,
                },
            })
        );
    };

    const handleBetSingle = async () => {
        try {
            if (!user || !bet.amount || !bet.betType || loading) return;
            setLoading(true);

            const {
                data: { data },
            } = await betSingle({
                betAmount: Number(bet.amount),
                betType: bet.betType,
            });

            handleDispatchAmount(data.balance, bet.betType, data.betAmount);

            toast.success("Bet success");
        } catch (error) {
            const e = error as AxiosError<AppError>;
            toast.error(e.response?.data.message || "Something went wrong");
        } finally {
            setLoading(false);
            dispatch(setBetAmount(0));
        }
    };

    const handleBetAll = async () => {
        try {
            if (!user || !bet.amount || !bet.betType || loading) return;
            setLoading(true);

            const {
                data: { data },
            } = await betAll(bet.betType);

            handleDispatchAmount(data.balance, bet.betType, data.betAmount);

            toast.success("Bet success");
        } catch (error) {
            const e = error as AxiosError<AppError>;
            toast.error(e.response?.data.message || "Something went wrong");
        } finally {
            setLoading(false);
            dispatch(setBetAmount(0));
        }
    };

    return (
        <>
            <Modal
                isOpen={!!bet.amount}
                loading={loading}
                title={`BET: ${
                    bet.betType === BetType.TAI
                        ? "BIG"
                        : bet.betType === BetType.XIU
                        ? "SMALL"
                        : "UNKNOWN"
                }`}
                description={bet.amount?.toLocaleString("vi-VN")}
                confirmText="ACCEPT"
                onConfirm={
                    bet.amount === "ALL" ? handleBetAll : handleBetSingle
                }
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

                <BestItem
                    $currentBet={bet.amount}
                    $valueBet="ALL"
                    onClick={() => handleSetAmount("ALL")}
                >
                    ALL
                </BestItem>
            </BetList>
        </>
    );
});

export default Bet;
