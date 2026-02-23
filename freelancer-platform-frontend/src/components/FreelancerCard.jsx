import React from "react";
import "../css/FreelancerCard.css";
import { GiMoneyStack } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { getFullImageUrl } from "../utils/utils";

const FreelancerCard = ({ freelancer }) => {
  const navigate = useNavigate(); 
  return (
    <div className="freelancer-card" onClick={() => navigate(`/freelancers/${freelancer.id}`)}
      style={{ cursor: "pointer" }}>
            <img
              src={getFullImageUrl(freelancer.image) || "/images/default-avatar.png"}
              alt={freelancer.name}
              className="freelancer-img"
            />

      <h3>{freelancer.name}</h3>
      <p className="freelancer-title">{freelancer.title}</p>

      <p className="freelancer-bio">{freelancer.shortBio}</p>

      <div className="freelancer-skills">
        {freelancer.skills?.split(",").map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>

      <div className="freelancer-info">
        <span style={{color: "#14a800"}}><GiMoneyStack /> ${freelancer.hourlyRate}/hr</span>
      </div>

      <button className="freelancer-btn">More Details</button>
    </div>
  );
};

export default FreelancerCard;
