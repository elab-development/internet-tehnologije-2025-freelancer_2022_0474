import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/JobCard.css";

const JobCard = ({ job }) => {

  const navigate = useNavigate();

  const openDetails = () => {
    navigate(`/job/${job.id}`);
  };

  return (
    <div className="job-card" onClick={openDetails}>
      <h3>{job.title}</h3>
      <p className="job-desc">{job.description}</p>

      <div className="job-info">
        <span>💰 {job.budget}</span>
        <span>⏳ {job.duration}</span>
      </div>

      <button className="job-btn">Apply</button>
    </div>
  );
};

export default JobCard;
