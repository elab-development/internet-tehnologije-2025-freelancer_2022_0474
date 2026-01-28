import { ErrorMessage, Field, Formik, Form } from 'formik';
import '../css/Register.css';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";


const RegisterSchema = Yup.object().shape({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email('Email is not valid').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is required'),
  role: Yup.string().oneOf(['freelancer', 'client'], 'Role is required').required('Role is required')
});

function Register() {

  const navigate = useNavigate();

  const initialRegisterValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    role: ''
  };

  const handleRegisterSubmit = async (values) => {
  try {
    const res = await api.post("/auth/register", {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      password: values.password,
      role: values.role
    });

    localStorage.setItem("user", JSON.stringify(res.data.user));

    alert("Registration successful!");
    navigate("/");
  } catch (error) {
    alert(error.response?.data?.message || "Registration error");
  }
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

          <div className="registerform-field">
            <label>Choose a role</label>
            <div className="registerform-radio-group">
              <label>
                <Field type="radio" name="role" value="freelancer" />
                Freelancer
              </label>
              <label>
                <Field type="radio" name="role" value="client" />
                Client
              </label>
            </div>
            <ErrorMessage name="role" component="div" className="registerform-error" />
          </div>


          <button type="submit" className="registerform-button">Register</button>

          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
