import { PublicRuntimeType } from "./configs.type";

const publicRuntime: PublicRuntimeType = {
    API_URL: import.meta.env.VITE_API_URL,
    SOCKET_URL: import.meta.env.VITE_SOCKET_URL,
};

export default publicRuntime;
