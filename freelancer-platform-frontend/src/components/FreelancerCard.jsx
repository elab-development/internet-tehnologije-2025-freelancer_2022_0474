import React from "react";
import "../css/FreelancerCard.css";

const FreelancerCard = ({ freelancer }) => {
  return (
    <div className="freelancer-card">
      <img src={freelancer.image} alt={freelancer.name} className="freelancer-img"/>

      <h3>{freelancer.name}</h3>
      <p className="freelancer-title">{freelancer.title}</p>

      <p className="freelancer-bio">{freelancer.shortBio}</p>

      <div className="freelancer-skills">
        {freelancer.skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>

      <div className="freelancer-info">
        <span>⭐ {freelancer.rating}</span>
        <span>💰 {freelancer.hourlyRate}</span>
      </div>

      <button className="freelancer-btn">Hire</button>
    </div>
  );
};

export default FreelancerCard;
