import {
    Button, ButtonWrapper,
    InputRange,
    QuantityItem,
    RangeNums,
    RangeNumsRow, StartButton,
    StartModal,
    StartPageWrapper
} from "./startpage.style";
import Link from 'next/link';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

import startPageBg from "../assets/startpage/start-bg.png";
import {useEffect, useState} from "react";
export default function StartPage(){

    const [InitValue, setInitValue] = useState("")
    const [SecValue, setSecValue] = useState("");
    const [linked, setLinked] = useState("/");
    const [alert, setAlert] = useState(undefined);

    const alertMessage: any = <Stack style={{width: "300px", position: "absolute", right: "10px", top: "30px"}}><Alert severity="info"><AlertTitle>Empty Value</AlertTitle>Please — <strong>Choose a value</strong></Alert></Stack>
    useEffect(() => {
    }, [InitValue, SecValue, alert, linked])

    const getValue = function(){
        if(InitValue && SecValue){
            setLinked("/main");
            setAlert(undefined);
        }else{
            setLinked("/");
            setAlert(alertMessage);
        }
    }
    return(
        <StartPageWrapper style={{background: `url(${startPageBg.src})`}}>
            {alert}
            <StartModal>
                <QuantityItem>Кол-во предметов</QuantityItem>
                <RangeNumsRow>
                    <RangeNums>2</RangeNums>
                    <RangeNums>3</RangeNums>
                    <RangeNums>4</RangeNums>
                    <RangeNums>5</RangeNums>
                </RangeNumsRow>
                <InputRange type={"range"} onChange={(e) => setInitValue(e.target.value)} defineWidth={"366px"} min="0" max="5" value="0" step="1"/>
                <QuantityItem>Значения</QuantityItem>
                <RangeNumsRow>
                    <RangeNums>A</RangeNums>
                    <RangeNums>9</RangeNums>
                    <RangeNums>19</RangeNums>
                    <RangeNums>50</RangeNums>
                    <RangeNums>99</RangeNums>
                    <RangeNums>999</RangeNums>
                </RangeNumsRow>
                <InputRange type={"range"} defineWidth={"531px"} min="0" max="100" value="0" step="10" onChange={e => setSecValue(e.target.value)}/>
                <ButtonWrapper>
                    <Button defaultOpacity={"1"}>По возрастанию</Button>
                    <Button defaultOpacity={"0.7"}>По убыванию</Button>
                </ButtonWrapper>
                <Link href={linked}>
                    <StartButton onClick={getValue}>Играть</StartButton>
                </Link>
            </StartModal>
        </StartPageWrapper>
    )
}
