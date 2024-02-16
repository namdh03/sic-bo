import configs from "@/configs";
import GuestGuard from "@/guards/GuestGuard";
import SignIn from "@/pages/SignIn";

const publicRoutes = [
    {
        path: configs.routes.signIn,
        element: (
            <GuestGuard>
                <SignIn />
            </GuestGuard>
        ),
    },
];

export default publicRoutes;
