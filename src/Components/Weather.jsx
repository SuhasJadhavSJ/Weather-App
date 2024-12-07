import React from 'react'
import './Weather.css'
import searchIcon from '../assets/search.png'

const Weather = () => {
  return (
    <div className='weather'>
      <div className="search">
        <input type="text" placeholder='search'/>
        <img src={searchIcon} alt="" />
      </div>
    </div>
  )
}

export default Weather
