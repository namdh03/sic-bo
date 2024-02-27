import configs from "@/configs";
import GuestGuard from "@/guards/GuestGuard";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";

const publicRoutes = [
    {
        path: configs.routes.signIn,
        element: (
            <GuestGuard>
                <SignIn />
            </GuestGuard>
        ),
    },
    {
        path: configs.routes.signUp,
        element: (
            <GuestGuard>
                <SignUp />
            </GuestGuard>
        ),
    },
];

export default publicRoutes;
