import styled from '@emotion/styled';


interface IconColor {
    color?: string,
}

export const MainPageWrapper = styled.section`
   width: 100%;
   height: 100vh;
   background-size: cover;
   background-position: center center;
   position: relative;
`
export const ButtomNavWrapper = styled.div`
   max-width: 890px;
   max-height: 250px;
   position: absolute;
   bottom: 30px;
   left: 22%;
`

export const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid transparent',
    boxShadow: 24,
    p: 4,
    background: "rgba(58, 31, 54, 1)",
};

export const ButtonSetting = styled.button<IconColor>`
   border: none;
   background: transparent;
   position: absolute;
   top: 3%;
   right: 5%;
   color: ${(props) => props.color};
   z-index: 100;
   font-size: 30px;
`
