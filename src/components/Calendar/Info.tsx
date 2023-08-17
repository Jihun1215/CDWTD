import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components'
import axios from 'axios'

interface WeatherData {
    main: {
      temp: number;
    };
    weather: {
      icon: string;
    }[];
  }
  

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
    return <div>Loading...</div>;
  }

  const weatherIconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
  console.log(weather)
  return (
    <InfoContiner>
        <InfoLeftArea>
            <div>
              <h4>지훈</h4>
              <p>9월안에 취준</p>
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
    border: 1px solid red;
    ${props => props.theme.FlexRow};
    ${props => props.theme.FlexCenter};
    gap: 0px 20%;
`;

const InfoLeftArea = styled.div`
    width: 40%;
    height: 100%;
    ${props => props.theme.FlexCol};
    /* align-items: center; */
    justify-content: center;
    /* border: 1px solid red; */
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
    border: 1px solid red;
    padding-right: 1rem;
    gap: 0px 5px;
    > img {
        /* background: transparent; */
        background: black;
    }

`