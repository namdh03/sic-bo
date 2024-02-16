import icons from "@/assets/icons";
import { useApp } from "@/hooks";

import { Eye, EyesWrapper } from "./Eyes.styled";

const Eyes = () => {
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
                <span>{amountMinOfAll}</span>
            </Eye>

            <Eye $gameStatus={gameStatus}>
                <span>
                    <b>BIG</b>
                    <img src={icons.dollar} alt="dollar" />
                </span>
                <span>{amountMaxOfAll}</span>
            </Eye>
        </EyesWrapper>
    );
};

export default Eyes;
