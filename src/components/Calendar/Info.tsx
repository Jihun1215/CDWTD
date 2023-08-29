import React from 'react';
import { styled } from 'styled-components'
import useWeather from '../../hooks/useWeather';
import profileDefaul  from "../../asset/profileDefaultImage.png"


  
const Info:React.FC = () => {
    const { weather } = useWeather();
    const weatherIconUrl = `http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`;
 
   if (!weather) {
     return <div>여가 로딩바 넣기러기...</div>;
   }

  return (
    <InfoContiner>
        <InfoLeftArea>
            <div>
              <div className='profile'>
                <img src={profileDefaul}/>
              </div>
              <div className='text'>
                <h4>지훈</h4>
                <p>하이하이</p>
              </div>

            </div>  
        </InfoLeftArea>
        <InfoRight>
          <img src={weatherIconUrl} alt="Weather Icon" />
          <p>{weather?.main.temp}°C</p>
        </InfoRight>
      
    </InfoContiner>
  )
}

export default Info

const InfoContiner = styled.div`
    width: 100%;
    height: 3.5rem;
    ${props => props.theme.FlexRow};
    ${props => props.theme.FlexCenter};
    gap: 0px 20%;
`;

const InfoLeftArea = styled.div`
    width: 40%;
    height: 100%;
    ${props => props.theme.FlexCol};
    justify-content: center;
    padding-left: 1rem;
    > div {
        width: 100%;
        height: 100%;
        ${props => props.theme.FlexRow};
        text-align: center;
        /* border: 1px solid blue; */
        gap: 0 10px;
        > .profile {
          width: 50px;
          height: 50px;
          border-radius: 50px;
          border: 1px solid rgb(237, 237, 237); 
          > img {
            ${props => props.theme.WH100};
          }
        }
        > .text{
          ${props => props.theme.FlexCol};
          justify-content: center;
          > h4 {
            font-size: 20px;
            font-family: 600;
           }
          > p {
            font-size: 14px;
            font-family: 400;
          }
        }
      
    }
`;

const InfoRight = styled.div`
    width: 40%;
    height: 100%;
    ${props => props.theme.FlexRow};
    justify-content: right;
    align-items: center;
    padding-right: 1rem;
    gap: 0px 5px;
    > img {
        /* background: black; */
    }

`