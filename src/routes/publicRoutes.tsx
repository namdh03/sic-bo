import configs from "@/configs";
import SignIn from "@/pages/SignIn";

const publicRoutes = [
    {
        path: configs.routes.signIn,
        element: <SignIn />,
    },
];

export default publicRoutes;
