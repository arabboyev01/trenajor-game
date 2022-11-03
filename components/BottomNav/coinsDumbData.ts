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
import {firstValueItem1, firstValueItem2, firstValueItem3 ,firstValueItem4, firstValueItem5, secondValueItem1, secondValueItem2, secondValueItem3, secondValueItem4, secondValueItem5, thirdValueItem1, thirdValueItem2, thirdValueItem3, thirdValueItem4, thirdValueItem5, fourthValueItem1, fourthValueItem2, fourthValueItem3, fourthValueItem4, fourthValueItem5, fifthValueItem1, fifthValueItem2, fifthValueItem3, fifthValueItem4, fifthValueItem5} from "./nums"

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
                first: firstValueItem1,
                second: secondValueItem1,
                third: thirdValueItem1,
                fourth: fourthValueItem1,
                fifth: fifthValueItem1,
            },
            {
                id: 2,
                image: coinImage,
                first: firstValueItem2,
                second: secondValueItem2,
                third: thirdValueItem2,
                fourth: fourthValueItem2,
                fifth: fifthValueItem2,
            },
            {
                id: 3,
                image: coinImage,
                first: firstValueItem3,
                second: secondValueItem3,
                third: thirdValueItem3,
                fourth: fourthValueItem3,
                fifth: fifthValueItem3,
            },
            {
                id: 4,
                image: coinImage,
                first: firstValueItem4,
                second: secondValueItem4,
                third: thirdValueItem4,
                fourth: fourthValueItem4,
                fifth: fifthValueItem4,
            },
            {
                id: 5,
                image: coinImage,
                first: firstValueItem5,
                second: secondValueItem5,
                third: thirdValueItem5,
                fourth: fourthValueItem5,
            },
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
                first: firstValueItem1,
                second: secondValueItem1,
                third: thirdValueItem1,
                fourth: fourthValueItem1,
                fifth: fifthValueItem1,
            },
            {
                id: 2,
                image: icon2,
                first: firstValueItem2,
                second: secondValueItem2,
                third: thirdValueItem2,
                fourth: fourthValueItem2,
                fifth: fifthValueItem2,
            },
            {
                id: 3,
                image: icon3,
                first: firstValueItem3,
                second: secondValueItem3,
                third: thirdValueItem3,
                fourth: fourthValueItem3,
                fifth: fifthValueItem3,
            },
            {
                id: 4,
                image: icon4,
                first: firstValueItem4,
                second: secondValueItem4,
                third: thirdValueItem4,
                fourth: fourthValueItem4,
                fifth: fifthValueItem4,
            },
            {
                id: 5,
                image: icon2,
                first: firstValueItem5,
                second: secondValueItem5,
                third: thirdValueItem5,
                fourth: fourthValueItem5,
            },
        ]
    },
]
export const changeUIbutton = [
    {
        id: 1,
        name: "Coins",
        category: 1,
        image: mainBg1,
    },
    {
        id: 2,
        name: "Forest",
        category: 2,
        image: mainBg2,
    },
]
