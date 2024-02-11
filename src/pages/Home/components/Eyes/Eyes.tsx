import { BigEye, EyesWrapper, SmallEye } from "./Eyes.styled";

const Eyes = () => {
    return (
        <EyesWrapper>
            <SmallEye>
                <span>SMALL</span>
                <span>7.000.000</span>
            </SmallEye>

            <BigEye>
                <span>BIG</span>
                <span>7.000.000</span>
            </BigEye>
        </EyesWrapper>
    );
};

export default Eyes;
