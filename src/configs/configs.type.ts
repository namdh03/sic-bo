export type RouteKey = "home" | "signIn" | "signUp" | "error";

export type RouteValue = "/" | "sign-in" | "sign-up" | "*";

export type RouteConfigType = { [K in RouteKey]: RouteValue };

export type PublicRuntimeType = {
    API_URL: string;
    SOCKET_URL: string;
};

export type CookiesType = {
    token: string;
};

export type SocketPathKey = "start";

export type SocketPathValue = "/topic/game";

export type SocketPathConfigType = { [K in SocketPathKey]: SocketPathValue };

// Config types
export type ConfigType = {
    routes: RouteConfigType;
    publicRuntime: PublicRuntimeType;
    cookies: CookiesType;
    socket: SocketPathConfigType;
};
