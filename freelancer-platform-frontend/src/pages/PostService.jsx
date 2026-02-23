import React from 'react'
import HeroOtherPages from '../components/HeroOtherPages'
import '../css/PostService.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import api from "../api/api";

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
  const navigate = useNavigate();
  const handleSubmit = async (values, { resetForm }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("You must be logged in.");
    navigate("/login");
    return;
  }

  try {
    const formData = new FormData();
      formData.append("name", values.name);
      formData.append("title", values.title);
      formData.append("hourlyRate", values.hourlyRate);
      formData.append("location", values.location);
      formData.append("skills", values.skills);
      formData.append("shortBio", values.shortBio);
      if (values.image) {
        formData.append("image", values.image);
      }

    const token = localStorage.getItem("token");

    await api.post("/freelancers", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      },
    });

    alert("Profile created!");
    resetForm();
    navigate("/freelancers");

  } catch (err) {
  alert(err.response?.data?.message || "Error creating profile");
}
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
            shortBio: "",
            image: null
          }}
          validationSchema={PostFreelancerSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
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
              <div className="postservice-field">
                <label>Profile Image</label>
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files[0]);
                  }}
                />
              </div>
            <button type="submit">Publish Profile</button>

          </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default PostService;
