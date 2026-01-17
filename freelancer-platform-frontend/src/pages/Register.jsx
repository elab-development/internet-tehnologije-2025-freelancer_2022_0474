import { ErrorMessage, Field, Formik, Form } from 'formik';
import '../css/Register.css';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email('Email is not valid').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is required')
});

function RegisterPage() {

  const navigate = useNavigate();

  const initialRegisterValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  const handleRegisterSubmit = (values) => {


  const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));


  if (registeredUser && registeredUser.email === values.email) {
    alert("This email is already registered. Please login.");
    navigate("/login");
    return;
  }

  localStorage.setItem("registeredUser", JSON.stringify(values));
  localStorage.setItem("user", JSON.stringify(values));

  alert('Registration successful!');
  navigate('/');
};

  return (
    <div className="registerform-container">
      <Formik
        initialValues={initialRegisterValues}
        validationSchema={RegisterSchema}
        onSubmit={handleRegisterSubmit}
      >
        <Form className="registerform-form">
          <h2 className="registerform-title">Register</h2>

          <div className="registerform-field">
            <label htmlFor="firstname">First Name</label>
            <Field id="firstname" name="firstname" type="text" />
            <ErrorMessage name="firstname" component="div" className="registerform-error" />
          </div>

          <div className="registerform-field">
            <label htmlFor="lastname">Last Name</label>
            <Field id="lastname" name="lastname" type="text" />
            <ErrorMessage name="lastname" component="div" className="registerform-error" />
          </div>

          <div className="registerform-field">
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="div" className="registerform-error" />
          </div>

          <div className="registerform-field">
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component="div" className="registerform-error" />
          </div>

          <div className="registerform-field">
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <Field id="passwordConfirmation" name="passwordConfirmation" type="password" />
            <ErrorMessage name="passwordConfirmation" component="div" className="registerform-error" />
          </div>

          <button type="submit" className="registerform-button">Register</button>

          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterPage;
