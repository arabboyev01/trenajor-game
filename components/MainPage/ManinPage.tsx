import {ButtomNavWrapper, MainPageWrapper, ButtonSetting} from "./mainpage.style";
import BottomNav from "../BottomNav/BottomNav";
import {makeUI, changeUIbutton} from "../BottomNav/coinsDumbData"
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { style } from "./mainpage.style";
import Typography from "@mui/material/Typography";
import * as React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState} from "react";

export default function MainPage(){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [initialUI, setInitialUI] = useState(makeUI[0]);

    const changeUI = function(btnId: number){
        const filtered = makeUI.filter(item => {
            return item.category === btnId;
        });
        // @ts-ignore
        setInitialUI(...filtered);
    }

    return(
        <div>
            <ButtonSetting onClick={handleOpen} color={initialUI.colors}> <SettingsIcon style={{fontSize: "40px"}} /> </ButtonSetting>
            <MainPageWrapper style={{backgroundImage: `url(${initialUI.mainBg.src})`}}>
                <ButtomNavWrapper>
                    <BottomNav data={initialUI.assets} bottomImage={initialUI.bottomImg}/>
                </ButtomNavWrapper>
            </MainPageWrapper>

            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} >
                        {changeUIbutton.map(item =>
                            <button onClick={() => changeUI(item.category)} key={item.id}>{item.name}</button>
                        )}
                    </Box>
                </Modal>
            </div>
        </div>
    )
}
