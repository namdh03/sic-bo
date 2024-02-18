import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface AxiosError<T = unknown> extends Error {
    config: AxiosRequestConfig;
    code?: string;
    request?: unknown;
    response?: AxiosResponse<T>;
    isAxiosError: boolean;
    toJSON: () => object;
}

export interface AppError {
    data: string;
    message: string;
    status: string;
}
