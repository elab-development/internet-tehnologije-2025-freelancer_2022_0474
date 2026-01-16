import React from "react";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";
import "../css/FindWork.css";
import HeroOtherPages from "../components/HeroOtherPages";
import Track from "../components/Track";

const FindWork = () => {
  return (
    <section>
    <div className="work-page">
      <HeroOtherPages title="Available Jobs" desc="Here you can find various job opportunities tailored to your skills and preferences."></HeroOtherPages>

      <div className="jobs-grid">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      
    </div>
    <Track></Track>
    </section>

  );
};

export default FindWork;
