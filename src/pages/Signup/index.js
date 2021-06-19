import {Wrapper} from './style';
import {Link} from 'react-router-dom';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object({
  firstname: yup.string().required(),
  lastname:yup.string().required(),
  phone:yup.string().required(),
  email:yup.string().email().required()
})

function SignUp() {
  return (
    <Wrapper>
      <div className="onboarding-content d-flex">
        <div className="onboarding-info-slides">
          <div className="">

          </div>
        </div>
        
        <div className="onboarding-form-area">
          <div className="container">
            <div className="">
              <p className="mb-0">Already a member? <span><Link to="">Sign In</Link></span></p>
            </div>

            <div className="form">
              <h3 className="onboarding-name">Create your account</h3>
              <h6 className="onboarding-description">A short description about account types</h6>

              <div>
              <Formik
                validateOnChange={true}
                initialValues={{
                    firstname:"", 
                    lastname:"", 
                    phone:"", 
                    email:""
                }}
                onSubmit={async (data,{resetForm}) => {
                    try{
                    }
                    catch(e){
                    }
                }}
                validationSchema={validationSchema}
            >
                {({values, errors, handleChange, handleBlur, handleSubmit}) =>(
                    <Form>
                        <div className="form-field">
                            <Field type="text" name="username" className="input text" required autocomplete="off"/>
                            <label>Username</label>
                        </div>
                        <p className={`mb-3 ${errors.username ? 'text-danger' : ""}` }>{errors.username}</p> 

                        <div className="form-field ">
                            <Field type="text" name="email" className="input email"  required autocomplete="off"/>
                            <label>Email</label>
                        </div>

                        <div className="mb-2">
                          <button className={`submit-button disabled`} type="submit" disabled> Sign Up</button>
                        </div>
                    </Form>
                )}
            </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SignUp;
