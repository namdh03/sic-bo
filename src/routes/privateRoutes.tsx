import configs from "@/configs";
import Home from "@/pages/Home";

const privateRoutes = [
    {
        path: configs.routes.home,
        element: <Home />,
    },
];

export default privateRoutes;
