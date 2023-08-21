import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components'
import axios from 'axios'
import { WeatherData } from '../../model/type';

  
const Info:React.FC = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const apiKey: string | undefined = process.env.REACT_APP_API_KEY;


    useEffect(() => {
      if(apiKey){
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=CheongJu&appid=${apiKey}&units=metric`;

        axios.get(apiUrl)
        .then(response => {
          setWeather(response.data);
        })
        .catch(error => {
         console.error('Error fetching weather data:', error);
        });
     }
   
    }, []);

  if (!weather) {
    return <div>여가 로딩바 넣기러기...</div>;
  }

  const weatherIconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
  console.log(weather)
  return (
    <InfoContiner>
        <InfoLeftArea>
            <div>
              <h4>지훈</h4>
              <p>하이하이</p>
            </div>  
        </InfoLeftArea>
        <InfoRight>
          <img src={weatherIconUrl} alt="Weather Icon" />
          <p>{weather.main.temp}°C</p>
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
        width: 50%;
        text-align: center;
        > h4 {
            font-size: 20px;
            font-family: 600;
        }
        > p {
            font-size: 14px;
            font-family: 400;
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