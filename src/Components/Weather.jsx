import React from 'react'
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
  return (
    <div className='weather'>
      <div className="search">
        <input type="text" placeholder='search'/>
        <img src={searchIcon} alt="" />
      </div>
      <img src="" alt="" />
    </div>
  )
}

export default Weather
