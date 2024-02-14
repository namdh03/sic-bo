import icons from "@/assets/icons";
import { useApp } from "@/hooks";

import { Eye, EyesWrapper } from "./Eyes.styled";

const Eyes = () => {
    const {
        flag,
        receivedMessage: { amountMaxOfAll, amountMinOfAll },
    } = useApp();

    return (
        <EyesWrapper>
            <Eye $flag={flag}>
                <span>
                    <b>SMALL</b>
                    <img src={icons.dollar} alt="dollar" />
                </span>
                <span>{amountMinOfAll}</span>
            </Eye>

            <Eye $flag={flag}>
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
