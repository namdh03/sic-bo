import { useSubscription } from "react-stomp-hooks";

import configs from "@/configs";

const Home = () => {
    useSubscription(configs.socket.start, (message) =>
        console.log("Received message:", message)
    );

    return <h1>Home</h1>;
};

export default Home;
