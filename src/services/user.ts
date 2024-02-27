import { get, post } from "./api";

export type FormType = {
    username: string;
    password: string;
};

export const signIn = (account: FormType) => {
    return post("/api/v1/auth/signin", account);
};

export const signUp = (account: FormType) => {
    return post("/api/v1/auth/signup", account);
};

export const getUser = () => {
    return get("/api/v1/user");
};
