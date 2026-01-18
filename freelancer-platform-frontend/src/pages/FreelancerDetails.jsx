import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import freelancers from '../data/freelancers';
import '../css/FreelancerDetails.css';
import { FaStar } from 'react-icons/fa6';
import { GiMoneyStack } from 'react-icons/gi';

const FreelancerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const freelancer = freelancers.find(f => f.id === Number(id));

  
  const currentUser = JSON.parse(localStorage.getItem("user"));
    const handleHireClick = () => {
    if (!currentUser) {
      alert("Please log in to hire a freelancer.");
      navigate("/login");
      return;
    }
    alert(`You have hired ${freelancer.name}!`);
  }

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
        <img src={freelancer.image} alt={freelancer.name} />
        <h2>{freelancer.name}</h2>
        <p className="details-title">{freelancer.title}</p>

        <div className="details-info">
          <span><FaStar /> {freelancer.rating}</span>
          <span style={{color: "#14a800"}}><GiMoneyStack /> {freelancer.hourlyRate}</span>
        </div>

        <p className="details-bio">{freelancer.fullBio || freelancer.shortBio}</p>

        <div className="details-skills">
          {freelancer.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>

        <button className="details-btn" onClick={handleHireClick}>Hire Freelancer</button>
      </div>
    </div>
  );
};

export default FreelancerDetails;