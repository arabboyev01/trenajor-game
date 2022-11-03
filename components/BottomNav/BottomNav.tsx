import {useState, useEffect} from "react";
import {BottomNavWrapper, CoinPlaces, SingleCoin, CoinText} from "./bottomnav.style";
import Draggable from 'react-draggable';
import { Key } from "react";
import {firstValueItem1, firstValueItem2} from "./nums"

export default function BottomNav({data, bottomImage, value}: any) {

    const [initValue, setInitValue] = useState(0)

    const getValueOfData = function(value: number, item: any){
        if(value == 1){
            setInitValue(item.first)
        }else if(value == 2) {
            setInitValue(item.second)
        }else if(value == 3) {
            setInitValue(item.third)
        }else if(value == 4) {
            setInitValue(item.fourth)
        }else if(value == 5) {
            setInitValue(item.fifth);
        }
    }

    console.log(firstValueItem1)
    console.log(firstValueItem2)
    return (
        <div>
            <BottomNavWrapper style={{backgroundImage: `url(${bottomImage.src})`}}>
             {data.map((item: { id: Key | null | undefined; image: { src: any; }; }) =>
                 <CoinPlaces>
                    <Draggable>
                        <div>
                           <SingleCoin onClick={() => getValueOfData(value, item)} key={item.id} style={{backgroundImage: `url(${item.image.src})`}}>
                               <CoinText>{initValue}</CoinText>
                           </SingleCoin>
                        </div>
                    </Draggable>
                 </CoinPlaces>
              )}
            </BottomNavWrapper>
        </div>
    )
}
