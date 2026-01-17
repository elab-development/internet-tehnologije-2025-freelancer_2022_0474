import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../css/Register.css';
import { useNavigate, Link } from "react-router-dom";

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

  const handleLoginSubmit = (values) => {

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));


    if (!registeredUser) {
      alert("No registered user found. Please register first.");
      navigate("/register");
      return;
    }


    if (
      values.email === registeredUser.email &&
      values.password === registeredUser.password
    ) {
      alert("Login successful!");
      localStorage.setItem("user", JSON.stringify(registeredUser));
      navigate("/");
    } else {
      alert("Wrong email or password!");
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
