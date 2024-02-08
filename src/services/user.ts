import { post } from "./api";

type SignInFormType = {
    username: string;
    password: string;
};

export const signIn = (account: SignInFormType) => {
    return post("/api/v1/auth/login", account);
};
