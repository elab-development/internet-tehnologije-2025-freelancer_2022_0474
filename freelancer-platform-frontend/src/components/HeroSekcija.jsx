import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/HeroSekcija.css';

const HeroSekcija = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState();

  const handleSearch = () => {
    if (selected === "freelancer") {
      navigate('/freelancers');
    } else if (selected === "job") {
      navigate('/work');
    }
  };

  return (
    <div className='hero-container'>
      <h1>Welcome to Our Job Portal</h1>
      <p>Your gateway to exciting job opportunities</p>

      <div className='hero-search'>
        <div className="hero-buttons">
          <button
            className={selected === "freelancer" ? 'active' : ''}
            onClick={() => setSelected("freelancer")}
          >
            Browse Freelancers
          </button>

          <button
            className={selected === "job" ? 'active' : ''}
            onClick={() => setSelected("job")}
          >
            Browse Jobs
          </button>
        </div>

        <div className="hero-input">
          <input className='search-input' type="text" placeholder="Search..."/>
          <button className='search-btn' onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSekcija;
