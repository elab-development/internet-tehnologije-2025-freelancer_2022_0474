import React from "react";
import "../css/JobCard.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
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
