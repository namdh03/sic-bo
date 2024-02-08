import { ConfigType } from "./configs.type";
import cookies from "./cookies";
import publicRuntime from "./publicRuntime";
import routes from "./routes";
import socket from "./socket";

const configs: ConfigType = {
    routes,
    publicRuntime,
    cookies,
    socket,
};

export default configs;
