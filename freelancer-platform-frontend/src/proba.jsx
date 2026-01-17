// import React from "react";
// import jobs from "../data/jobs";
// import JobCard from "../components/JobCard";
// import "../css/FindWork.css";
// import HeroOtherPages from "../components/HeroOtherPages";
// import Track from "../components/Track";

// const FindWork = () => {
//   return (
//     <section>
//     <div className="work-page">
//       <HeroOtherPages title="Available Jobs" desc="Here you can find various job opportunities tailored to your skills and preferences."></HeroOtherPages>

//       <div className="jobs-grid">
//         {jobs.map(job => (
//           <JobCard key={job.id} job={job} />
//         ))}
//       </div>
      
//     </div>
//     <Track></Track>
//     </section>

//   );
// };

// export default FindWork;

// import React from "react";
// import "../css/JobCard.css";

// const JobCard = ({ job }) => {
//   return (
//     <div className="job-card">
//       <h3>{job.title}</h3>
//       <p className="job-desc">{job.description}</p>

//       <div className="job-info">
//         <span>💰 {job.budget}</span>
//         <span>⏳ {job.duration}</span>
//       </div>

//       <button className="job-btn">Apply</button>
//     </div>
//   );
// };

// export default JobCard;