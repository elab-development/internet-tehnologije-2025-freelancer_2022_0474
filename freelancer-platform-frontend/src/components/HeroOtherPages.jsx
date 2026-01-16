import React from 'react'
import '../css/HeroOtherPages.css'

const HeroOtherPages = ({title,desc}) => {
  return (
    <div className='hero-div'>
        <h1>{title}</h1>
        <p>{desc}</p>
        <br />
    </div>
  )
}

export default HeroOtherPages