import { useNavigate } from "react-router-dom";

import icons from "@/assets/icons";
import images from "@/assets/images";
import configs from "@/configs";
import { signOut } from "@/contexts/auth/reducers";
import { useAuth } from "@/hooks";

import BetList from "./components/BetList";
import Eyes from "./components/Eyes";
import Hat from "./components/Hat";
import Money from "./components/Money";
import Quack from "./components/Quack";
import {
    Board,
    Face,
    FaceInner,
    HomeWrapper,
    SignIn,
    SignOut,
} from "./Home.styled";

const Home = () => {
    const navigate = useNavigate();
    const { user, dispatch } = useAuth();

    const handleSignOut = () => dispatch(signOut());
    const handleSignIn = () => navigate(configs.routes.signIn);

    return (
        <HomeWrapper>
            <Money />
            <Board>
                <Hat />
                <Face>
                    <img src={images.table} alt="table" />
                    <FaceInner>
                        <Eyes />
                        <Quack />
                        <BetList />
                    </FaceInner>
                </Face>
            </Board>

            {user ? (
                <SignOut
                    src={icons.signOut}
                    alt="logout-icon"
                    onClick={handleSignOut}
                />
            ) : (
                <SignIn
                    src={icons.signOut}
                    alt="logout-icon"
                    onClick={handleSignIn}
                />
            )}
        </HomeWrapper>
    );
};

export default Home;
