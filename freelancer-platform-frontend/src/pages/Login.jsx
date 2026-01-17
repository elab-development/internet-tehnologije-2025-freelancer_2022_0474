import { ErrorMessage, Field, Formik,Form } from 'formik';
import * as Yup from 'yup';
import '../css/Register.css' 

const RegisterSchema = Yup.object().shape({ 
  email: Yup.string()
    .email('Email not valid')
    .required('Email is required'),
  password: Yup.string() 
    .required('Password is required'), 
});



function Login() {
    
        const initialRegisterValues = {
           email: '', password: ''}; 

    const handleLoginSubmit = (values) => {
        console.log('Login data:', values);

    };

    return (
     <div className="registerform-container">
      <Formik
        initialValues={initialRegisterValues}
        validationSchema={RegisterSchema}
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
                     <p>Don't have an account? <a href="/register">Register here</a></p>
        </Form>
      </Formik>
    </div>
    );
 

 
  }
 export default Login;