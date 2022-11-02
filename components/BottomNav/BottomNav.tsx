import {BottomNavWrapper, CoinPlaces, SingleCoin} from "./bottomnav.style";
import BottomImage from "../assets/mainPage/bottom1.png";
import Draggable from 'react-draggable';
import { coinsDumbData } from "./coinsDumbData";

export default function BottomNav(){
    return(
        <BottomNavWrapper style={{backgroundImage: `url(${BottomImage.src})`}}>

                {coinsDumbData.map(item =>
                    <CoinPlaces>
                    <Draggable>
                        <div>
                    <SingleCoin key={item.id} style={{backgroundImage: `url(${item.image.src})`}}></SingleCoin>
                        </div>
                    </Draggable>
                    </CoinPlaces>
                )}
        </BottomNavWrapper>
    )
}
