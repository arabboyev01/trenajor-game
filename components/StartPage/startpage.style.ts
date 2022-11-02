import styled from '@emotion/styled';
interface RangeBtn {
    defineWidth?: string,
}

interface makeOpacity {
    defaultOpacity?: string,
}
export const StartPageWrapper = styled.section`
    width: 100%;
    height: 100vh;
    backgroundSize: cover;
    backgroundPosition: center center;
    `
export const StartModal = styled.div`
   position: absolute;
   width: 699px;
   height: 760px;
   left: 28%;
   top: 10%;
   background: #FFFFFF;
   border-radius: 40px;
   border: 20px solid #7F75F0;
   display: flex;
   flex-direction: column;
   align-items: center;
  
`
export const QuantityItem = styled.h1`
font-family: 'Helvetica';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 37px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding-top: 57px;
`
export const InputRange = styled.input<RangeBtn>`
width: ${(props) => props.defineWidth};
height: 31px;
-webkit-appearance: none;
margin: 10px 0;
margin-top: 4px;
background-color: #FFD748;
border-radius: 10px;
&:focus {
  outline: none;
}
&::-webkit-slider-runnable-track {
  width: 100%;
  height: 21px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #FFD748;
  background: #FFD748;
  border-radius: 15px;
  border: 1px solid #FFD748;
}
&::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #104987;
  border: 1px solid #104987;
  height: 23px;
  width: 23px;
  border-radius: 23px;
  background: #104987;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -2px;
}
&:focus::-webkit-slider-runnable-track {
  background: #FFD748;
}
&::-moz-range-track {
  width: 100%;
  height: 21px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #FFD748;
  background: #FFD748;
  border-radius: 15px;
  border: 1px solid #FFD748;
}
&::-moz-range-thumb {
  box-shadow: 1px 1px 1px #104987;
  border: 1px solid #104987;
  height: 23px;
  width: 23px;
  border-radius: 23px;
  background: #104987;
  cursor: pointer;
}
&::-ms-track {
  width: 100%;
  height: 21px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
&::-ms-fill-lower {
  background: #FFD748;
  border: 1px solid #FFD748;
  border-radius: 40px;
  box-shadow: 1px 1px 1px #FFD748;
}
&::-ms-fill-upper {
  background: #FFD748;
  border: 1px solid #FFD748;
  border-radius: 30px;
  box-shadow: 1px 1px 1px #FFD748;
}
&::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 1px #104987;
  border: 1px solid #104987;
  height: 23px;
  width: 23px;
  border-radius: 23px;
  background: #104987;
  
  &:focus::-ms-fill-lower {
  background: #FFD748;
}
&:focus::-ms-fill-upper {
  background: #FFD748;
}
`

export const RangeNumsRow = styled.div<RangeBtn>`
   width: ${(props) => props.defineWidth};
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between !important;
   margin-top: 46px;
`

export const RangeNums = styled.p`
   font-family: 'Calibri';
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 29px;
   text-align: center;
   color: #4F4B61;
   padding: 0 10px;
`

export const ButtonWrapper = styled.div`
 max-width: 531px;
 margin: 75px auto 0 auto;
 display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`
export const Button = styled.button<makeOpacity>`
 height: 44.44px;
background: #FFD748;
border-radius: 20px;
font-family: 'Calibri';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
display: flex;
align-items: center;
color: #423F45;
padding: 0 10px;
margin-right: 22px;
opacity: ${props => props.defaultOpacity};
cursor: pointer;
`
export const StartButton = styled.button`
font-family: 'Helvetica';
background: #38DF7A;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
border-radius: 20px;
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 37px;
display: flex;
align-items: center;
color: #FFFFFF;
border: none;
margin-top: 60px;
padding: 10px 35px;
cursor: pointer;
`
