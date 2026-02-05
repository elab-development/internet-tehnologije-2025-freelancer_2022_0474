import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import "../css/FindWork.css";
import HeroOtherPages from "../components/HeroOtherPages";
import Track from "../components/Track";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const FindWork = () => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchJobs = async () => {
    try {
      const res = await api.get("/jobs");
      setJobs(res.data);
    } catch  {
      console.error("Error loading jobs");
    } finally {
      setLoading(false);
    }
  };

  fetchJobs();
}, []);

  const navigate = useNavigate();

  const handlePostJob = () => {
    navigate("/post-job");
  }

  return (
    <section>
      <div className="work-page">
        <HeroOtherPages 
          title="Available Jobs" 
          desc="Here you can find various job opportunities tailored to your skills and preferences."
        />
          <div className="post-job-container">
            <button className="post-job" onClick={handlePostJob}>Post a Job</button>
          </div>
          
        {loading ? (
          <p style={{ color: "#222", textAlign: "center", fontSize: "30px" }}>Loading jobs...</p>
        ) : (
          <div className="jobs-grid">
            {jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}

      </div>
      <Track />
    </section>
  );
};

export default FindWork;