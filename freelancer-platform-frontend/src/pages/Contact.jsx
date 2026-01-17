import React from 'react'
import HeroOtherPages from '../components/HeroOtherPages'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import '../css/Contact.css'
import AboutUs from '../components/AboutUs'
import Track from '../components/Track'
import WhyChooseUs from '../components/WhyChooseUs'
import Newsletter from '../components/Newsletter'
import SocialSection from '../components/SocialSection'

const Contact = () => {

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log('Form data', values);
        setSubmitting(false);
        resetForm();
        alert('Your message has been sent!');
    }

  return (
    <>

    <div className="contact-page">
        <HeroOtherPages
      title="Contact Us"
      desc="Reach out to us through any of the following methods:"
        />
        <div className="contact-container">
        <Formik
            initialValues={{ email: '', message: '' }}
            validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string().min(20, 'Message must be at least 20 characters').required('Required'),
            })}
            onSubmit={handleSubmit}
        >
            <Form className="contact-form" >
            <h2 className="contact-title">Send us a message</h2>

            <div className="contact-field">
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" type="email" />
                <ErrorMessage name="email" component="div" className="contact-error" />
            </div>

            <div className="contact-field">
                <label htmlFor="message">Message</label>
                <Field id="message" name="message" as="textarea" />
                <ErrorMessage name="message" component="div" className="contact-error" />
            </div>

            <button type="submit" className="contact-button">Submit</button>
            </Form>
        </Formik>
        </div>
        
    </div>
        
        <Track></Track>
        <SocialSection></SocialSection>
        <AboutUs></AboutUs>
        <Track></Track>
        <WhyChooseUs></WhyChooseUs>
        <Newsletter></Newsletter>
        <Track></Track>

    </>
    
  )
}

export default Contact