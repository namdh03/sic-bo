import icons from "@/assets/icons";
import images from "@/assets/images";
import { signOut } from "@/contexts/auth/reducers";
import { useAuth } from "@/hooks";

import BetList from "./components/BetList";
import Eyes from "./components/Eyes";
import Hat from "./components/Hat";
import Money from "./components/Money";
import Quack from "./components/Quack";
import { Board, Face, FaceInner, HomeWrapper, SignOut } from "./Home.styled";

const Home = () => {
    const { user, dispatch } = useAuth();
    const handleSignOut = () => dispatch(signOut());

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

            {user && (
                <SignOut
                    src={icons.logout}
                    alt="logout-icon"
                    onClick={handleSignOut}
                />
            )}
        </HomeWrapper>
    );
};

export default Home;
