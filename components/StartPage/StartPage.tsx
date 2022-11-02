import { useState, useContext} from "react";
import { Button, ButtonWrapper, InputRange, QuantityItem, RangeNums, RangeNumsRow, StartButton, StartModal, StartPageWrapper} from "./startpage.style";
import Link from 'next/link';
import userContext from "../../context/userContext";
import startPageBg from "../assets/startpage/start-bg.png";
export default function StartPage(){

    const userCtx = useContext(userContext);
    const { changeSportTypeId } = userCtx;

    const handleSportId = async function (item: number) {
        changeSportTypeId(item);
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
                <InputRange type="range" onChange={(e: any) => handleSportId(e.target.value)} step="1" defineWidth={"366px"} min="0" max="5"/>
                <QuantityItem>Значения</QuantityItem>
                <RangeNumsRow defineWidth={"531px"}>
                    <RangeNums>A</RangeNums>
                    <RangeNums>9</RangeNums>
                    <RangeNums>19</RangeNums>
                    <RangeNums>50</RangeNums>
                    <RangeNums>99</RangeNums>
                    <RangeNums>999</RangeNums>
                </RangeNumsRow>
                <InputRange type={"range"} step="10" defineWidth={"531px"} min="0" max="100"  />
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
