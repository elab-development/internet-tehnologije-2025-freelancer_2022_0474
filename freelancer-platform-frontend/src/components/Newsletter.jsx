import React from 'react';
import '../css/Newsletter.css';
import { MdEmail, MdRefresh } from 'react-icons/md';
import api from "../api/api";

const Newsletter = () => {

      const handleSubscribe = async (e) => {
      e.preventDefault();

      const email = e.target.email.value;

      try {
        const res = await api.post("/newsletter/subscribe", { email });
        alert(res.data.message);
        e.target.reset();
      } catch (err) {
        if (err.response && err.response.data.message) {
          alert(err.response.data.message);
        } else {
          alert("Server error");
        }
      }
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
            name='email'
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