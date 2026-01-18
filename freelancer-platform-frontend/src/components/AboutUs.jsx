import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import '../css/AboutUs.css'
import { useNavigate } from 'react-router-dom';
const AboutUs = () => {

  const navigate = useNavigate();
  const handleLearnMore = (e) => {
    e.preventDefault();
    navigate('/contact');
  }

  return (
    <section className='aboutus-section'>
      <div className="picture-aboutus">
        <img src="../../images/freelancer-1.jpg" alt="Freelancer" />
      </div>
      <div className="text-aboutus">
        <h2>About us</h2>
        <h1><span>Our story</span> that lasts <span>15</span> years</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <ul className='list-aboutus'>
          <li><FaCheckCircle className="check-icon" /> We founded the company in 2008</li>
          <li><FaCheckCircle className="check-icon" /> We have a team of experts with many years of experience</li>
          <li><FaCheckCircle className="check-icon" /> Our clients are satisfied with our services</li>
        </ul>
        <button onClick={handleLearnMore}>Learn more</button>
      </div>
      
    </section>
  )
}

export default AboutUs