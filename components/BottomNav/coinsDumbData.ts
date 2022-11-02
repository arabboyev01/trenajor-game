import coinImage from "../assets/mainPage/coin.png";
import mainBg1 from "../assets/mainPage/main-bg1.png"
import mainBg2 from "../assets/mainPage/main-bg2.png"
import bottom1 from "../assets/mainPage/bottom1.png"
import bottom2 from "../assets/mainPage/bottom2.png"
import icon1 from "../assets/mainPage/Group.png"
import icon2 from "../assets/mainPage/Group1.png"
import icon3 from "../assets/mainPage/Group3.png"
import icon4 from "../assets/mainPage/Group4.png"
import {InterfaceUI} from "../../types/Types";

export const makeUI: InterfaceUI[] = [
    {
        id: 1,
        mainBg: mainBg1,
        bottomImg: bottom1,
        category: 1,
        colors: "#3A1F36",
        assets: [
            {
                id: 1,
                image: coinImage,
            },
            {
                id: 2,
                image: coinImage,
            },
            {
                id: 3,
                image: coinImage,
            },
            {
                id: 4,
                image: coinImage,
            },
            {
                id: 5,
                image: coinImage,
            },
            {
                id: 6,
                image: coinImage,
            }
        ]
    },
    {
        id: 2,
        mainBg: mainBg2,
        bottomImg: bottom2,
        category: 2,
        colors: "#fff",
        assets: [
            {
                id: 1,
                image: icon1,
            },
            {
                id: 2,
                image: icon2,
            },
            {
                id: 3,
                image: icon3,
            },
            {
                id: 4,
                image: icon4,
            },
            {
                id: 5,
                image: icon1,
            },
            {
                id: 6,
                image: icon2,
            }
        ]
    },
]
export const changeUIbutton = [
    {
        id: 1,
        name: "Coins",
        category: 1,
    },
    {
        id: 2,
        name: "Forest",
        category: 2,
    },
]
