import React from 'react'
import HeroOtherPages from '../components/HeroOtherPages'
import '../css/HireFreelancers.css'
import freelancers from '../data/freelancers'
import JobCard from '../components/JobCard'
import FreelancerCard from '../components/FreelancerCard'
import Track from '../components/Track'
import { useNavigate } from 'react-router-dom'

const HireFreelancers = () => {

  const navigate = useNavigate();

 const handlePostService = () => {
    navigate("/post-service");
  }
  return (
    <section>
    <div className="hire-page">
      <HeroOtherPages title="Hire Freelancers" desc="Find skilled freelancers to help you with your projects."></HeroOtherPages>
          <div className="post-service-container">
            <button className="post-service" onClick={handlePostService}>Post a Service</button>
          </div>
      <div className="freelancers-grid">
        {freelancers.map(freelancer => (
          <FreelancerCard key={freelancer.id} freelancer={freelancer} />
        ))}
      </div>
    </div>
    <Track></Track>
    </section>
  )
}

export default HireFreelancers