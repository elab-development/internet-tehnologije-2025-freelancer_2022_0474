import React from 'react';
import '../css/Newsletter.css';
import { MdEmail, MdRefresh } from 'react-icons/md';

const Newsletter = () => {

  const handleSubscribe = (e) => {
        e.preventDefault();
        alert("Thank you for subscribing to our newsletter!");
        e.target.reset();
      };


  return (

      

    <section className="newsletter-container">
      <p className="podnaslov">OUR NEWSLETTER</p>
      <h2 className="newsletter-title">
        Subscribe to Our Newsletter for the <span>Latest Updates and Offers</span>
      </h2>

      <form className="newsletter-form" onSubmit={handleSubscribe}>
        <div className="input-wrapper">
          <span className="email-icon"><MdEmail /></span>
          <input
            type="email"
            placeholder="Enter Email Address"
            required
          />
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;