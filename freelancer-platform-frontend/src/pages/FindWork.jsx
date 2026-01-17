import React, { useState, useEffect } from "react";
import jobsData from "../data/jobs";
import JobCard from "../components/JobCard";
import "../css/FindWork.css";
import HeroOtherPages from "../components/HeroOtherPages";
import Track from "../components/Track";

const FindWork = () => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setJobs(jobsData);
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <section>
      <div className="work-page">
        <HeroOtherPages 
          title="Available Jobs" 
          desc="Here you can find various job opportunities tailored to your skills and preferences."
        />

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
