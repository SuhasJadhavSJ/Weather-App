import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import searchIcon from '../assets/search.png'
import cloud from '../assets/cloud.png'
import clear from '../assets/clear.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'

const Weather = () => {

    const inputRef = useRef()

    const [weatherData, setWeatherData] = useState(false);

    const allIcons = {
        "01d" : clear,
        "01n" : clear,
        "02d" : cloud,
        "02n" : cloud,
        "03d" : cloud,
        "03n" : cloud,
        "04d" : drizzle,
        "04n" : drizzle,
        "09d" : rain,
        "09n" : rain,
        "10d" : rain,
        "10n" : rain,
        "13d" : snow,
        "13n" : snow,
    }

    // search weather through location
    const searchfun = async(city) =>{
        
        if(city===""){
            alert("Enter City Name");
            return;
        }
        
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API}`;
            
            const response = await fetch(url);
            const data = await response.json();

            if(!response.ok){
                alert(data.message);
                return;
            }

            console.log(data);

            const icon = allIcons[data.weather[0].icon] || clear;

            setWeatherData({
                humidity : data.main.humidity,
                wind : data.wind.speed,
                temperature : Math.floor(data.main.temp),
                location : data.name,
                icon : icon
            })
        }
        catch(error){
            setWeatherData(false)
            console.error("Fetch Not Completer")
        }
    }

    // call the function when the component is loaded
    useEffect(()=>{
        searchfun('New York');
    },[])

    return (
    <div className='weather'>
      <div className="search">
        <input ref={inputRef} type="text" placeholder='search'/>
        <img src={searchIcon} alt="" onClick={()=>searchfun(inputRef.current.value)} />
      </div>
      {weatherData?<>
        <img src={weatherData.icon} alt="" className='weather-icon'/>
      <p className='temperature'>{weatherData.temperature}°C</p>
      <p className='location'>{weatherData.location}</p>
      <div className="weather-data">
        <div className="col">
            <img src={humidity} alt="" />
            <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
            </div>
        </div>
        <div className="col">
            <img src={wind} alt="" />
            <div>
                <p>{weatherData.wind}Km/hr</p>
                <span>Wind Speed</span>
            </div>
        </div>
      </div>
      </>:<>

      </>}

    </div>
  )
}

export default Weather
