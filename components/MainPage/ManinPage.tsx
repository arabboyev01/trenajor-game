import {ButtomNavWrapper, MainPageWrapper} from "./mainpage.style";
import BottomNav from "../BottomNav/BottomNav";
import MainImg from "../assets/mainPage/main-bg1.png";

export default function MainPage(){
    return(
        <MainPageWrapper style={{backgroundImage: `url(${MainImg.src})`}}>
            <ButtomNavWrapper>
                <BottomNav />
            </ButtomNavWrapper>
        </MainPageWrapper>
    )
}
