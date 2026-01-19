import React from 'react'
import HeroOtherPages from '../components/HeroOtherPages'
import '../css/PostJob.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const PostJobSchema = Yup.object({
        title: Yup.string().required("Job title is required"),
        description: Yup.string()
        .required("Description is required"),
        budget: Yup.string().required("Budget is required"),
        duration: Yup.string().required("Duration is required"),
        detailedDescription: Yup.string()
        .min(20, "Detailed description must be at least 20 characters")
        .required("Detailed description is required")
        });

const PostJob = () => {
        const navigate = useNavigate();
        const handleSubmit = (values, { resetForm }) => {
        const user = JSON.parse(localStorage.getItem("user"));
 
        if (!user) {
          alert("You must be logged in to post a job.");
          navigate("/login"); 
          return;
        }

        if (user.role !== "client") {
          alert("Only clients can post job listings!");
          resetForm();
          return;
        }

        const newJob = {
          ...values,
          clientId: user.id
        };

        console.log("New Job:", newJob);

        resetForm();
        alert("Job posted successfully!");
        navigate("/work");
};

  return (
    <div className="post-job-page">
        
        <HeroOtherPages title="Post a Job" desc="Create a new job posting to find the perfect freelancer for your project."></HeroOtherPages>
        <div className="postjob-container">
        <Formik
        initialValues={{ title: "", description: "", budget: "", duration: "", detailedDescription: "" }}
        validationSchema={PostJobSchema}
        onSubmit={handleSubmit}
      >
        
        <Form className="postjob-form">
          <div className="postjob-field">
            <label>Job Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" className="postjob-error" />
          </div>

          <div className="postjob-field">
            <label>Short Description</label>
            <Field name="description" type="text" />
            <ErrorMessage name="description" component="div" className="postjob-error" />
          </div>

          <div className="postjob-field">
            <label>Budget ($)</label>
            <Field name="budget" type="text" />
            <ErrorMessage name="budget" component="div" className="postjob-error" />
          </div>

          <div className="postjob-field">
            <label>Duration</label>
            <Field name="duration" type="text" placeholder="e.g. 2 weeks" />
            <ErrorMessage name="duration" component="div" className="postjob-error" />
          </div>
          <div className="postjob-field">
            <label>Detailed Description</label>
            <Field name="detailedDescription" as="textarea" />
            <ErrorMessage name="detailedDescription" component="div" className="postjob-error" />
          </div>

          <button type="submit">Post Job</button>
        </Form>
      </Formik>
    </div>
    </div>
  )
}
export default PostJob