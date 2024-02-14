import images from "@/assets/images";

import BetList from "./components/BetList";
import Eyes from "./components/Eyes";
import Hat from "./components/Hat";
import Money from "./components/Money";
import Quack from "./components/Quack";
import { Board, Face, FaceInner, HomeWrapper } from "./Home.styled";

const Home = () => {
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
        </HomeWrapper>
    );
};

export default Home;
