import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../data/jobs";

const JobDetails = () => {
  const { id } = useParams();

  const job = jobs.find(j => j.id === Number(id));

  if (!job) return <p>Job not found.</p>;

  return (
    <div style={{ padding: "60px 10%" }}>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p><strong>Budget:</strong> {job.budget}</p>
      <p><strong>Duration:</strong> {job.duration}</p>

      <button>
        Send Offer
      </button>
    </div>
  );
};

export default JobDetails;
