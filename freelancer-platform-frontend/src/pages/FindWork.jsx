import React, { useState, useEffect } from "react";
import jobsData from "../data/jobs";
import JobCard from "../components/JobCard";
import "../css/FindWork.css";
import HeroOtherPages from "../components/HeroOtherPages";
import Track from "../components/Track";
import { useNavigate } from "react-router-dom";

const FindWork = () => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setJobs(jobsData);
      setLoading(false);
    }, 1000); 
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
