import React from 'react'
import HeroOtherPages from '../components/HeroOtherPages'
import '../css/PostService.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const PostFreelancerSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  title: Yup.string().required("Professional title is required"),
  hourlyRate: Yup.string().required("Hourly rate is required"),
  location: Yup.string().required("Location is required"),
  skills: Yup.string().required("Skills are required"),
  shortBio: Yup.string()
    .min(20, "Bio must be at least 20 characters")
    .required("Short bio is required")
});

const PostService = () => {

  const handleSubmit = (values, { resetForm }) => {
    console.log("New Freelancer Ad:", {
      ...values,
      skills: values.skills.split(",").map(s => s.trim())
    });
    resetForm();
  };

  return (
    <div className="post-service-page">
      
      <HeroOtherPages 
        title="Create Freelancer Profile"
        desc="Publish your freelancer profile so clients can find you."
      />

      <div className="postservice-container">
        <Formik
          initialValues={{
            name: "",
            title: "",
            hourlyRate: "",
            location: "",
            skills: "",
            shortBio: ""
          }}
          validationSchema={PostFreelancerSchema}
          onSubmit={handleSubmit}
        >
          
          <Form className="postservice-form">

            <div className="postservice-field">
              <label>Full Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" component="div" className="postservice-error" />
            </div>

            <div className="postservice-field">
              <label>Professional Title</label>
              <Field name="title" type="text" placeholder="e.g. Frontend Developer" />
              <ErrorMessage name="title" component="div" className="postservice-error" />
            </div>

            <div className="postservice-field">
              <label>Hourly Rate ($/hr)</label>
              <Field name="hourlyRate" type="text" placeholder="$25/hr" />
              <ErrorMessage name="hourlyRate" component="div" className="postservice-error" />
            </div>

            <div className="postservice-field">
              <label>Location</label>
              <Field name="location" type="text" placeholder="Serbia" />
              <ErrorMessage name="location" component="div" className="postservice-error" />
            </div>

            <div className="postservice-field">
              <label>Skills (comma separated)</label>
              <Field name="skills" type="text" placeholder="React, CSS, UI/UX" />
              <ErrorMessage name="skills" component="div" className="postservice-error" />
            </div>

            <div className="postservice-field">
              <label>Short Bio</label>
              <Field name="shortBio" as="textarea" />
              <ErrorMessage name="shortBio" component="div" className="postservice-error" />
            </div>

            <button type="submit">Publish Profile</button>

          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default PostService;
