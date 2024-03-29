import Cookies from "universal-cookie";

import configs from "@/configs";
import { signIn } from "@/contexts/auth/reducers";
import { useAuth } from "@/hooks";
import Auth from "@/layouts/Auth";
import { FormType, getUser, signIn as signInAPI } from "@/services/user";

const cookies = new Cookies(null, { path: "/" });

const SignIn = () => {
    const { dispatch } = useAuth();

    const handleSubmit = async (form: FormType) => {
        const {
            data: { token },
        } = await signInAPI(form);
        cookies.set(configs.cookies.token, token);

        const {
            data: { data },
        } = await getUser();

        dispatch(signIn({ user: data }));
    };

    return (
        <Auth
            title="BACXIU SIGN IN"
            linkUrl={configs.routes.signUp}
            linkText="Sign up here"
            submitText="Sign In"
            onSubmit={handleSubmit}
        />
    );
};

export default SignIn;
