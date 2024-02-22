import configs from "@/configs";
import { AppProvider } from "@/contexts/app/AppContext";
import Home from "@/pages/Home";

const privateRoutes = [
    {
        path: configs.routes.home,
        element: (
            <AppProvider>
                <Home />
            </AppProvider>
        ),
    },
];

export default privateRoutes;
