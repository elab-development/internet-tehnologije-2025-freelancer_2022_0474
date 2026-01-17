import React from 'react';
import { FaInstagram, FaFacebook, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import '../css/SocialSection.css';

const SocialSection = () => {
  return (
    <section className="socials-section">
      <h2>Contact us via social media</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ipsam a fuga</p>

      <div className="socials">

        <div className="social-data">
          <FaInstagram />
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        <div className="social-data">
          <FaFacebook />
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>

        <div className="social-data">
          <FaPhoneAlt />
          <a href="tel:+38166393013">Call us</a>
        </div>

        <div className="social-data">
            <FaTwitter />
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
