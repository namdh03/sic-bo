import { BestItem, BetList } from "./BetList.styled";

const betList = ["5K", "10K", "50K", "100K", "200K", "ALL"];

const Bet = () => {
    return (
        <BetList>
            {betList.map((bet, index) => (
                <BestItem key={index}>{bet}</BestItem>
            ))}
        </BetList>
    );
};

export default Bet;
