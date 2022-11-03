import styled from '@emotion/styled';
export const BottomNavWrapper = styled.section`
       width: 900px;
       height: 222px;
       background-position: center center;
       background-size: cover;
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: space-between;
       padding: 0 20px;
`
export const SingleCoin = styled.div`
       background-size: contain;
       background-position: center;
       width: 145px;
       height: 145px;
       border-radius: 50%;
`
export const CoinPlaces = styled.div`
       width: 145px;
       height: 145px;
       border-radius: 50%;
       background: rgba(0, 0, 0, 0.06);
       box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
       position: relative;
`

export const CoinText = styled.p`
        font-family: 'Calibri';
        font-style: normal;
        font-weight: 400;
        font-size: 56px;
        line-height: 68px;
        display: flex;
        align-items: center;
        letter-spacing: 2px;
        color: #FFFFFF;
        position: absolute;
        top: 25%;
        left: 40%;
        text-shadow: 5px solid rgba(36, 37, 70, 1);
`


