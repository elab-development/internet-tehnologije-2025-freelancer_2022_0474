import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import jobs from "../data/jobs";
import "../css/JobDetails.css";

import { GiMoneyStack } from "react-icons/gi";
import { FaClock } from "react-icons/fa";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find(j => j.id === Number(id));

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const handleSendOffer = () => {
    if (!currentUser) {
      alert("Please log in to send an offer.");
      navigate("/login");
      return;
    }

    if (currentUser.role !== "freelancer") {
      alert("Only freelancers can send offers.");
      return;
    }

    alert(`Offer successfully sent for: ${job.title}`);
  };

  if (!job) {
    return (
      <div className="not-found-job">
        <h2>Job not found</h2>
        <button onClick={() => navigate('/work')} className="back-btn-job">
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="job-details-page">
      <div className="job-details-card">

        <h2 className="job-details-title">{job.title}</h2>
        <p className="job-details-desc">
          {job.description}
        </p>

        <div className="job-details-info">
          <span style={{ color: "#14a800" }}>
            <GiMoneyStack /> {job.budget}
          </span>
          <span>
            <FaClock /> {job.duration}
          </span>
        </div>
        <p className="job-details-full-desc">
          {job.detailedDescription || "No additional details provided for this job."}
        </p>
        

        {job.skills && (
          <div className="job-details-skills">
            {job.skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        )}

        <button className="job-details-btn" onClick={handleSendOffer}>
          Send Offer
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
