import { get } from "./api";

export const start = () => {
    return get("/api/v1/game/starting/status");
};
