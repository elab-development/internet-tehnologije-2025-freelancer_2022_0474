import React from 'react'
import '../css/HeroSekcija.css'

const HeroSekcija = () => {
  return (
    <div className='hero-container'>
        <h1>Welcome to Our Job Portal</h1>
        <p>Your gateway to exciting job opportunities</p>
        <div className='hero-search'>
            <div className="hero-buttons">
            <button className='search-freelancers'>Browse Freelancers</button>
            <button className='search-jobs'>Browse Jobs</button>
            </div>
            <div className="hero-input">
            <input className='search-input' type="text" placeholder="Search..." />
            </div>
        </div>
    </div>
  )
}

export default HeroSekcija