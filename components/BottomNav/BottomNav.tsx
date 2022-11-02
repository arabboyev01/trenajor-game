import * as React from "react";
import {BottomNavWrapper, CoinPlaces, SingleCoin} from "./bottomnav.style";
import Draggable from 'react-draggable';
import { Key } from "react";

export default function BottomNav({data, bottomImage}: any) {

    return (
        <div>
            <BottomNavWrapper style={{backgroundImage: `url(${bottomImage.src})`}}>
             {data.map((item: { id: Key | null | undefined; image: { src: any; }; }) =>
                 <CoinPlaces>
                    <Draggable>
                        <div>
                    <SingleCoin key={item.id} style={{backgroundImage: `url(${item.image.src})`}}></SingleCoin>
                        </div>
                    </Draggable>
                 </CoinPlaces>
              )}
            </BottomNavWrapper>
        </div>
    )
}
