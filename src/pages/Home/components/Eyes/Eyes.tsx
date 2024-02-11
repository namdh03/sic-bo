import icons from "@/assets/icons";
import { useApp } from "@/hooks";

import { Eye, EyesWrapper } from "./Eyes.styled";

const Eyes = () => {
    const { flag } = useApp();

    return (
        <EyesWrapper>
            <Eye $flag={flag}>
                <span>
                    <b>SMALL</b>
                    <img src={icons.dollar} alt="dollar" />
                </span>
                <span>7.000.000</span>
            </Eye>

            <Eye $flag={flag}>
                <span>
                    <b>BIG</b>
                    <img src={icons.dollar} alt="dollar" />
                </span>
                <span>7.000.000</span>
            </Eye>
        </EyesWrapper>
    );
};

export default Eyes;
