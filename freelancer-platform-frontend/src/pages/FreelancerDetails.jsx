import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/FreelancerDetails.css';
import { FaStar } from 'react-icons/fa6';
import { GiMoneyStack } from 'react-icons/gi';
import { useEffect, useState } from "react";
import { getFreelancerById } from "../services/freelancerService";
import { getFullImageUrl } from "../utils/utils";

const FreelancerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [freelancer, setFreelancer] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchFreelancer = async () => {
    try {
      const res = await getFreelancerById(id);
      setFreelancer(res.data);
    } catch {
      setFreelancer(null);
    } finally {
      setLoading(false);
    }
  };

  fetchFreelancer();
}, [id]);

  const currentUser = JSON.parse(localStorage.getItem("user"));
    const handleHireClick = () => {
    alert(`You have hired ${freelancer.name}!`);
  }
  if (loading) return <p>Loading...</p>;
  if (!freelancer) {
    return (
      <div className="not-found-freelancer">
        <h2>Freelancer not found</h2>
        <button onClick={() => navigate('/freelancers')} className="back-btn">
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="freelancer-details-page">
      <div className="freelancer-details-card">
        <img
              src={getFullImageUrl(freelancer.image) || "/images/default-avatar.png"}
              alt={freelancer.name}
              className="freelancer-img"
            />
        <h2>{freelancer.name}</h2>
        <p className="details-title">{freelancer.title}</p>

        <div className="details-info">
          
          <span style={{color: "#14a800"}}><GiMoneyStack /> ${freelancer.hourlyRate}/hr</span>
        </div>

        <p className="details-bio">{freelancer.fullBio || freelancer.shortBio}</p>

        <div className="details-skills">
          {freelancer.skills?.split(",").map((skill, index) => (
            <span key={index}>{skill.trim()}</span>
          ))}
        </div>
          {currentUser && currentUser.role === "client" && (
        <button className="details-btn" onClick={handleHireClick}>Hire Freelancer</button>
      )}
        {currentUser && currentUser.role !== "client" && (
        <button style={{margin: "20px 0 0 0"}}className="back-btn" onClick={() => navigate(`/freelancers`)}>Back</button>
      )}
        {!currentUser && (
        <button style={{margin: "20px 0 0 0"}}className="back-btn" onClick={() => navigate(`/freelancers`)}>Back</button>
      )}
      </div>
    </div>
  );
};

export default FreelancerDetails;