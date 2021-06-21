import {Wrapper} from './style';
import {Link} from 'react-router-dom';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import FeatureSlider from '../../components/FeatureSlider'
import ProspaLogoImg from '../../assets/img/prospa-logo.svg'


const validationSchema = yup.object({
  firstname: yup.string().required(),
  lastname:yup.string().required(),
  phone:yup.string().required(),
  email:yup.string().email().required()
})

function SignUp() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <Wrapper>
      <div className="onboarding-content d-flex">
        <div className="onboarding-info-slides">
          <div className="onboarding-info-slides-item">
            <div className="prospa-logo">
              <Link to="/">
                <img src={ProspaLogoImg} alt="prospa-logo"/>
              </Link>
            </div>

            
            <FeatureSlider/>
            

            <p className="mb-0 copyright">© {year} Prospa Inc</p>
          </div>
        </div>
        
        <div className="onboarding-form-area">
          <div className="container">
            <div className="d-flex justify-content-end sign-in">
              <p className="text-right">Already a member? <span><Link to="">Sign In</Link></span></p>
            </div>

            <div className="form col-lg-5 px-0 mx-auto">
              <h3 className="onboarding-name mb-0">Create your account</h3>
              <h6 className="onboarding-description">A short description about account types</h6>

              <div>
              <Formik
                validateOnChange={true}
                initialValues={{
                    firstname:"", 
                    lastname:"", 
                    phone:"", 
                    email:"",
                    countryCode:"+234"
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
                            <Field type="text" name="firstname" className="input text" required autocomplete="off"/>
                            <label>Firstname</label>
                            <div className="active-field"></div>
                        </div>
                        <p className={`mb-3 ${errors.username ? 'text-danger' : ""}` }>{errors.username}</p> 

                        <div className="form-field">
                            <Field type="text" name="lastname" className="input text" required autocomplete="off"/>
                            <label>Lastname</label>
                            <div className="active-field"></div>
                        </div>

                        <div className="phone-input-container d-flex">
                          <div className="country-phone-code form-field">
                            <Field type="number"  name="phone" className="input number hide-number-arrow" required autocomplete="off" />
                            {/* <PhoneInput
                              countryCodeEditable={false}
                              inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true
                              }}
                            /> */}
                            <label>Country</label>
                          </div>

                          <div className="form-field phone-number">
                            <Field type="number"  name="countryCode" className="input number hide-number-arrow" required autocomplete="off" />
                            <label>Phone number</label>
                            <div className="active-field"></div>
                          </div>
                        </div>

                        <div className="form-field">
                            <Field type="email" name="email" className="input email"  required autocomplete="off"/>
                            <label>Email address</label>
                        </div>

                        <div className="mb-2">
                          <button className={`submit-button disabled next`} type="submit"> Sign Up</button>
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
