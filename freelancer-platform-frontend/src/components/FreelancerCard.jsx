import React from "react";
import "../css/FreelancerCard.css";
import { FaStar } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { useNavigate } from "react-router-dom";



const FreelancerCard = ({ freelancer }) => {
  const navigate = useNavigate(); 
  return (
    <div className="freelancer-card" onClick={() => navigate(`/freelancers/${freelancer.id}`)}
      style={{ cursor: "pointer" }}>
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
        <span><FaStar />{freelancer.rating}</span>
        <span style={{color: "#14a800"}}><GiMoneyStack /> {freelancer.hourlyRate}</span>
      </div>

      <button className="freelancer-btn">Hire</button>
    </div>
  );
};

export default FreelancerCard;
