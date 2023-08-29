import React , { useEffect, useState } from 'react'
import axios from 'axios'
import { WeatherData } from '../model/type';

const useWeather = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const apiKey: string | undefined = process.env.REACT_APP_API_KEY;

    useEffect(()=>{
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
    },[])
    if(weather !==  null){
        const weatherIconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
    }
    return {weather}

  
}

export default useWeather