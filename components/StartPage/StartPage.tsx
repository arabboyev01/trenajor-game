import { useState, useContext, useEffect} from "react";
import { Button, ButtonWrapper, InputRange, QuantityItem, RangeNums, RangeNumsRow, StartButton, StartModal, StartPageWrapper} from "./startpage.style";
import Link from 'next/link';
import userContext from "../../context/userContext";
import startPageBg from "../assets/startpage/start-bg.png";

export default function StartPage(){

    const [initValue, setInitValue] = useState(2);
    const [gameInitValue, setGameInitValue] = useState(0);

    const userCtx = useContext(userContext);
    const { changeSportTypeId } = userCtx;
    const {changeValueOfGame} = userCtx;

    const handleSportId = async function (item: number) {
        changeSportTypeId(item);
        setInitValue(item);
    }

    const handleValueGame = async function(item: number){
        changeValueOfGame(item);
        setGameInitValue(item);
    }

    return(
        <StartPageWrapper style={{background: `url(${startPageBg.src})`}}>
            <StartModal>
                <QuantityItem>Кол-во предметов</QuantityItem>
                <RangeNumsRow defineWidth={"366px"}>
                    <RangeNums>2</RangeNums>
                    <RangeNums>3</RangeNums>
                    <RangeNums>4</RangeNums>
                    <RangeNums>5</RangeNums>
                </RangeNumsRow>
                <InputRange type="range" value={initValue} onChange={(e: any) => handleSportId(e.target.value)} step="1" defineWidth={"366px"} min="2" max="5" />
                <QuantityItem>Значения</QuantityItem>
                <RangeNumsRow defineWidth={"531px"}>
                    <RangeNums>A</RangeNums>
                    <RangeNums>9</RangeNums>
                    <RangeNums>19</RangeNums>
                    <RangeNums>50</RangeNums>
                    <RangeNums>99</RangeNums>
                    <RangeNums>999</RangeNums>
                </RangeNumsRow>
                <InputRange type="range" value={gameInitValue} onChange={(e: any) => handleValueGame(e.target.value)} step="1" defineWidth={"531px"} min="0" max="5"/>
                <ButtonWrapper>
                    <Button defaultOpacity={"1"}>По возрастанию</Button>
                    <Button defaultOpacity={"0.7"}>По убыванию</Button>
                </ButtonWrapper>
                <Link href="/main" style={{textDecoration: "none"}}>
                    <StartButton>Играть</StartButton>
                </Link>
            </StartModal>
        </StartPageWrapper>
    )
}
