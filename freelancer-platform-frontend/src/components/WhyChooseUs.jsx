
import React from 'react';
import '../css/WhyChooseUs.css';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';
import { Link } from "react-router-dom";


export default function WhyChooseUsSection() {
  return (
    <section className="why-section">
      <div className="why-header">
        <p className="podnaslov">WHY CHOOSE US</p>
        <h2 className="title">
          Advantages of our services: <br />
          <span>Your path to finding a job</span>
        </h2>
      </div>

      <div className="why-content">
        <div className="why-left">
                <div 
                  className="video-thumbnail"
                  onClick={() => window.open('https://www.youtube.com/watch?v=VIDEO_ID', '_blank')}
                >
                  <img src="/images/download.jpg" alt="Why choose us" />

                  <div className="ring ring1"></div>
                  <div className="ring ring2"></div>

                  <div className="play-button">
                    <FaPlay className="play-icon" />
                  </div>
                </div>
              </div>


        <div className="why-right">
          <p className="why-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>

          <div className="stats">
            <div>
              <h3>1000+</h3>
              <p>Experienced Freelancers</p>
            </div>
            <div>
              <h3>99%</h3>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <h3>20K+</h3>
              <p>Jobs Posted</p>
            </div>
          </div>

          <ul className="why-list">
            <li><FaCheckCircle /> Easy applying for a job</li>
            <li><FaCheckCircle /> Experienced and attentive freelancers</li>
            <li><FaCheckCircle /> Advanced freelancing tools</li>
          </ul>
            <Link to="/work" className="why-btn">
              Apply Now
            </Link>

        </div>
      </div>
    </section>
  );
}
