import React from 'react'
import HeroOtherPages from '../components/HeroOtherPages'
import '../css/HireFreelancers.css'
import JobCard from '../components/JobCard'
import FreelancerCard from '../components/FreelancerCard'
import Track from '../components/Track'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getFreelancers } from "../services/freelancerService";

const HireFreelancers = () => {
  
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const searchQuery = searchParams.get("search")?.toLowerCase() || "";

const [freelancers, setFreelancers] = useState([]);

useEffect(() => {
  const fetchFreelancers = async () => {
    try {
      const res = await getFreelancers();
      setFreelancers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchFreelancers();
}, []);

const filteredFreelancers = searchQuery
  ? freelancers.filter(f =>
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : freelancers;

  const navigate = useNavigate();

 const handlePostService = () => {
    navigate("/post-service");
  }
  return (
    <section>
    <div className="hire-page">
      <HeroOtherPages title="Hire Freelancers" desc="Find skilled freelancers to help you with your projects."></HeroOtherPages>
      {user?.role === "freelancer" && (
          <div className="post-service-container">
            <button className="post-service" onClick={handlePostService}>Post a Service</button>
          </div>
      )}
      <div className="freelancers-grid">
        {filteredFreelancers.map(freelancer => (
          <FreelancerCard key={freelancer.id} freelancer={freelancer} />
        ))}
      </div>
    </div>
    <Track></Track>
    </section>
  )
}

export default HireFreelancers;