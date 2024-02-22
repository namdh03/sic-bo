import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import images from "@/assets/images";
import configs from "@/configs";
import { signIn } from "@/contexts/auth/reducers";
import { useAuth } from "@/hooks";
import { getUser, signIn as signInAPI } from "@/services/user";
import { AppError, AxiosError } from "@/utils/interface";

import {
    SignInButton,
    SignInButtonLoading,
    SignInForm,
    SignInFormGroup,
    SignInFormWrapper,
    SignInImageWrapper,
    SignInInner,
    SignInLink,
    SignInWrapper,
} from "./SignIn.styled";

const cookies = new Cookies(null, { path: "/" });

const SignIn = () => {
    const navigate = useNavigate();
    const { dispatch } = useAuth();
    const [form, setForm] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);

    const handleSetForm = (key: string, value: string) =>
        setForm((prev) => ({ ...prev, [key]: value }));

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();

            setLoading(true);

            const {
                data: { token },
            } = await signInAPI(form);
            cookies.set(configs.cookies.token, token);

            const {
                data: { data },
            } = await getUser();
            dispatch(signIn({ user: data }));

            navigate(configs.routes.home);
        } catch (error) {
            const e = error as AxiosError<AppError>;
            toast.error(e.response?.data.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <SignInWrapper>
            <SignInInner>
                <SignInImageWrapper>
                    <img src={images.signIn} alt="" />
                </SignInImageWrapper>

                <SignInFormWrapper>
                    <h1>BACXIU SIGN IN</h1>

                    <SignInForm onSubmit={handleSubmit}>
                        <SignInFormGroup>
                            <label htmlFor="username">Username</label>

                            <input
                                id="username"
                                type="username"
                                placeholder="Enter your username"
                                onChange={(e) =>
                                    handleSetForm("username", e.target.value)
                                }
                            />
                        </SignInFormGroup>
                        <SignInFormGroup>
                            <label htmlFor="password">Password</label>

                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) =>
                                    handleSetForm("password", e.target.value)
                                }
                            />
                        </SignInFormGroup>

                        <SignInLink to={configs.routes.home}>
                            Sign up here
                        </SignInLink>

                        <SignInButton type="submit">
                            {loading ? <SignInButtonLoading /> : "Sign In"}
                        </SignInButton>
                    </SignInForm>
                </SignInFormWrapper>
            </SignInInner>
        </SignInWrapper>
    );
};

export default SignIn;
