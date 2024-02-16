import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import configs from "@/configs";
import { signIn } from "@/contexts/auth/reducers";
import { useAuth } from "@/hooks";
import { getUser, signIn as signInAPI } from "@/services/user";

const cookies = new Cookies(null, { path: "/" });

const SignIn = () => {
    const navigate = useNavigate();
    const { dispatch } = useAuth();
    const [form, setForm] = useState({ username: "", password: "" });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();

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
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
            }}
        >
            <input
                type="username"
                placeholder="Username"
                onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;
