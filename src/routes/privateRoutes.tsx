import configs from "@/configs";
import AuthGuard from "@/guards/AuthGuard";
import Home from "@/pages/Home";

const privateRoutes = [
    {
        path: configs.routes.home,
        element: (
            <AuthGuard>
                <Home />
            </AuthGuard>
        ),
    },
];

export default privateRoutes;
