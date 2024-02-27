import { useState } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import images from "@/assets/images";
import configs from "@/configs";
import { AppError } from "@/utils/interface";

import {
    AuthButton,
    AuthButtonLoading,
    AuthForm,
    AuthFormGroup,
    AuthFormWrapper,
    AuthImageWrapper,
    AuthInner,
    AuthLink,
    AuthWrapper,
} from "./Auth.styled";
import { AuthProps } from "./Auth.type";

const Auth = ({
    title,
    linkUrl,
    linkText,
    submitText,
    onSubmit,
    reverse = false,
}: AuthProps) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);

    const handleSetForm = (key: string, value: string) =>
        setForm((prev) => ({ ...prev, [key]: value }));

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();

            if (!form.username || !form.password)
                return toast.error("Please fill in all fields");

            setLoading(true);

            await onSubmit(form);

            navigate(configs.routes.home);
        } catch (error) {
            const e = error as AxiosError<AppError>;
            toast.error(e.response?.data.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthWrapper>
            <AuthInner $reverse={reverse}>
                <AuthImageWrapper>
                    <img src={images.auth} alt={title} />
                </AuthImageWrapper>

                <AuthFormWrapper>
                    <h1>{title}</h1>

                    <AuthForm onSubmit={handleSubmit}>
                        <AuthFormGroup>
                            <label htmlFor="username">Username</label>

                            <input
                                id="username"
                                type="username"
                                placeholder="Enter your username"
                                onChange={(e) =>
                                    handleSetForm("username", e.target.value)
                                }
                            />
                        </AuthFormGroup>

                        <AuthFormGroup>
                            <label htmlFor="password">Password</label>

                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) =>
                                    handleSetForm("password", e.target.value)
                                }
                            />
                        </AuthFormGroup>

                        <AuthLink to={"/" + linkUrl} unstable_viewTransition>
                            {linkText}
                        </AuthLink>

                        <AuthButton type="submit">
                            {loading ? <AuthButtonLoading /> : submitText}
                        </AuthButton>
                    </AuthForm>
                </AuthFormWrapper>
            </AuthInner>
        </AuthWrapper>
    );
};

export default Auth;
