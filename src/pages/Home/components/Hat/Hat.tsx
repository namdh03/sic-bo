import { memo } from "react";

import { useApp } from "@/hooks";
import { formatTime } from "@/utils";

import { HatWrapper, Time } from "./Hat.styled";

const Hat = memo(() => {
    const {
        receivedMessage: { second },
    } = useApp();

    return (
        <HatWrapper>
            <Time>{formatTime(second)}</Time>
        </HatWrapper>
    );
});

export default Hat;
