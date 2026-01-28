import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../css/Register.css';
import { useNavigate, Link } from "react-router-dom";
import api from "../api/api";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email not valid').required('Email is required'),
  password: Yup.string().required('Password is required')
});

function Login() {

  const navigate = useNavigate();

  const initialLoginValues = {
    email: '',
    password: ''
  };

  const handleLoginSubmit = async (values) => {
  try {
    const res = await api.post("/auth/login", {
      email: values.email,
      password: values.password
    });

    localStorage.setItem("user", JSON.stringify(res.data.user));

    alert("Login successful!");
    navigate("/");
  } catch (error) {
    alert(error.response?.data?.message || "Login error");
  }
};



  return (
    <div className="registerform-container">
      <Formik
        initialValues={initialLoginValues}
        validationSchema={LoginSchema}
        onSubmit={handleLoginSubmit}
      >
        <Form className="registerform-form">
          <h2 className="registerform-title">Login</h2>

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

          <button type="submit" className="registerform-button">Login</button>

          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
