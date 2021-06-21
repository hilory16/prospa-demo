import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import InputLayout from '../FormControls/InputLayout';
import Button from '../FormControls/Button'
import {Wrapper} from './style'

const validationSchema = yup.object({
    firstname: yup.string().required(),
    lastname:yup.string().required(),
    phone:yup.string().required(),
    email:yup.string().email().required()
})
const Index = () => {
    return (
        <Wrapper className="form col-lg-5 px-0 mx-auto">
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
                            <InputLayout type="text" name="firstname" label="Firstname"/>
                            <InputLayout type="text" name="lastname" label="Lastname"/>
                            
                            <div className="phone-input-container d-flex">
                                <div className="country-phone-code form-field">
                                    <Field type="number"  name="phone" className="input number hide-number-arrow" required autocomplete="off" min="0"/>
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
                                    <Field type="number"  name="countryCode" className="input number hide-number-arrow" required autocomplete="off" min="0" />
                                    <label>Phone number</label>
                                    <div className="active-field"></div>
                                </div>
                            </div>
                            
                            <InputLayout type="email" name="email" label="Email address"/>

                            <div className="">
                                <Button name="Sign Up"/>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Wrapper>
    );
}

export default Index;
