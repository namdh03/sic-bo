import { get, post } from "./api";

type SignInFormType = {
    username: string;
    password: string;
};

export const signIn = (account: SignInFormType) => {
    return post("/api/v1/auth/signin", account);
};

export const getUser = () => {
    return get("/api/v1/user");
};
