import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import "../css/JobDetails.css";
import { GiMoneyStack } from "react-icons/gi";
import { FaClock } from "react-icons/fa";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await api.get(`/jobs/${id}`);
        setJob(res.data);
      } catch {
        setJob(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <p>Loading...</p>;

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

  const handleSendOffer = () => {
    alert(`Offer sent for: ${job.title}`);
  };

  return (
    <div className="job-details-page">
      <div className="job-details-card">
        <h2>{job.title}</h2>
        <p style={{color: '#222'}}>{job.description}</p>

        <div className="job-details-info">
          <span><GiMoneyStack /> ${job.budget}</span>
          <span><FaClock /> {job.duration}</span>
        </div>

        <p style={{color: '#222'}}>{job.detailedDescription}</p>
        {currentUser && currentUser.role === "freelancer" && (
          <button className="details-btn" onClick={handleSendOffer}>Send Offer</button>
        )}
        {currentUser && currentUser.role !== "freelancer" && (
        <button style={{margin: "20px 0 0 0"}}className="back-btn" onClick={() => navigate(`/work`)}>Back</button>
      )}
        {!currentUser && (
        <button style={{margin: "20px 0 0 0"}}className="back-btn" onClick={() => navigate(`/work`)}>Back</button>
      )}
      </div>
    </div>
  );
};

export default JobDetails;
