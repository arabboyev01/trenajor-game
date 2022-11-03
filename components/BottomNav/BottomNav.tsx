import {useState, useEffect} from "react";
import {BottomNavWrapper, CoinPlaces, SingleCoin, CoinText} from "./bottomnav.style";
import Draggable from 'react-draggable';
import { Key } from "react";
import {firstValue, secondValue, thirdValue, fourthValue} from "./nums";

export default function BottomNav({data, bottomImage, value}: any) {

    const [initNums, setInitNums] = useState(0);
    useEffect(() => {
        if(value == 1){
            setInitNums(firstValue);
        }
    }, []);

    return (
        <div>
            <BottomNavWrapper style={{backgroundImage: `url(${bottomImage.src})`}}>
             {data.map((item: {
                 number: number;
                 id: Key | null | undefined; image: { src: any; }; }) =>
                 <CoinPlaces>
                    <Draggable>
                        <div>
                           <SingleCoin key={item.id} style={{backgroundImage: `url(${item.image.src})`}}>
                               <CoinText>{item.number}</CoinText>
                           </SingleCoin>
                        </div>
                    </Draggable>
                 </CoinPlaces>
              )}
            </BottomNavWrapper>
        </div>
    )
}
