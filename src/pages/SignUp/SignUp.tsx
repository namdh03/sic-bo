import Cookies from "universal-cookie";

import configs from "@/configs";
import { signIn } from "@/contexts/auth/reducers";
import { useAuth } from "@/hooks";
import Auth from "@/layouts/Auth";
import { FormType, getUser, signUp as signUpAPI } from "@/services/user";

const cookies = new Cookies(null, { path: "/" });

const SignUp = () => {
    const { dispatch } = useAuth();

    const handleSubmit = async (form: FormType) => {
        const {
            data: { token },
        } = await signUpAPI(form);
        cookies.set(configs.cookies.token, token);

        const {
            data: { data },
        } = await getUser();

        dispatch(signIn({ user: data }));
    };

    return (
        <Auth
            title="BACXIU SIGN UP"
            linkUrl={configs.routes.signIn}
            linkText="Sign in here"
            submitText="Sign Up"
            onSubmit={handleSubmit}
            reverse
        />
    );
};

export default SignUp;
