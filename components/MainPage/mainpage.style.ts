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
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
};
export const wrapper = {
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "800px",
    bgcolor: 'background.paper',
    border: '2px solid transparent',
    boxShadow: 24,
    p: 4,
    background: "rgba(58, 31, 54, 1)",
    borderRadius: "20px",
}

export const UiTitle = styled.h2`
 background-color: #fff !important,
 font-size: 28px;
 padding: 20px;
`

export const ButtonSetting = styled.button<IconColor>`
   border: none;
   background: transparent;
   position: absolute;
   top: 3%;
   right: 5%;
   color: ${(props) => props.color};
   z-index: 100;
   font-size: 30px;
   cursor: pointer;
   transition: 1s all easy;
   &:hover{
    scale: 1.2;
   }
`
export const UiButton = styled.div`
  width: 100px;
  height: 100px;
  backgroundSize: contain;
  backgroundPosition: center center;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const UiName = styled.p`
   color: white;
   font-size: 20px;
   font-weight: 500;
   padding-top: 35px;
`
