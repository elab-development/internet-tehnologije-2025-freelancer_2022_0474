import React, { useEffect, useState } from "react";
import HeroOtherPages from "../components/HeroOtherPages";
import "../css/MyPosts.css";
import FreelancerCard from "../components/FreelancerCard";
import JobCard from "../components/JobCard";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const MyPosts = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [freelancers, setFreelancers] = useState([]);
  const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        if (user.role === "freelancer") {
          const res = await api.get("/freelancers");

          const myProfile = res.data.filter(
            f => f.userId === user.id
          );

          setFreelancers(myProfile);
        }

        if (user.role === "client") {
          const res = await api.get("/jobs");

          const myJobs = res.data.filter(
            job => job.userId === user.id
          );

          setJobs(myJobs);
        }
      } catch (err) {
        console.error("Error loading posts", err);
      }
    };

    fetchData();
  }, [user]);
  const handleDelete = async (id, type) => {
  if (!window.confirm("Are you sure you want to delete this?")) return;

  try {
    if (type === "freelancer") {
      await api.delete(`/freelancers/${id}`);
      setFreelancers(prev => prev.filter(f => f.id !== id));
    }

    if (type === "job") {
      await api.delete(`/jobs/${id}`);
      setJobs(prev => prev.filter(j => j.id !== id));
    }
  } catch (err) {
    console.error("Delete failed", err);
  }
};

  return (
    <section className="myposts-section">
    <div>
      <HeroOtherPages title="My Posts" />

      {user?.role === "freelancer" && (
        <div className="frilensers-grid">
          {freelancers.length > 0 ? (
            freelancers.map(f => (
              <div key={f.id}>
                <FreelancerCard freelancer={f} />
                <button
                className="delete-btn"
                onClick={() => handleDelete(f.id, "freelancer")}
                >
                Delete Profile
                </button>
                </div>
            ))
          ) : (
            <div className="empty-state">
          <p>You have not created a profile yet.</p>
          <button className="create-service" onClick={() => navigate("/post-service")}>Create Profile</button>
            </div>
          )}
        </div>
      )}

      {user?.role === "client" && (
        <div className="poslovi-grid">
          {jobs.length > 0 ? (
            jobs.map(job => (
             <div key={job.id}>
                <JobCard job={job} />
                <button
                className="delete-btn"
                onClick={() => handleDelete(job.id, "job")}
                >
                Delete Job
                </button>
            </div>
            ))
          ) : (
            <div className="empty-state">
          <p>No jobs to display</p>
          <button className="create-job-btn" onClick={() => navigate("/post-job")}>Create Job</button>
            </div>
          )}
        </div>
      )}
    </div>
    <div className="back-btn-container">
      <button className="back-btn" onClick={() => navigate("/profile")}>Back to Your Profile</button>
    </div>
    </section>
  );
};

export default MyPosts;