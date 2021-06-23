import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import {RegularInput, PhoneCountryCode} from '../FormControls/InputLayout';
import Button from '../FormControls/Button'
import {Wrapper} from './style'

const validationSchema = yup.object({
    firstname: yup.string().required(),
    lastname:yup.string().required(),
    countryCode:yup.string().required(),
    phone:yup.string().required(),
    email:yup.string().email().required()
})
const Index = ({history, handlePage}) => {
    return (
        <Wrapper className="form col-lg-5 px-0 mx-auto">
            <h3 className="onboarding-name mb-0">Create your account</h3>
            <h6 className="onboarding-description">A short description about account types</h6>
            <div>
                <Formik
                    validateOnChange
                    validateOnMount
                    initialValues={{
                        firstname:"", 
                        lastname:"", 
                        phone:"", 
                        email:"",
                        countryCode:"ng"
                    }}
                    onSubmit={async (data,{resetForm}) => {
                        console.log(data)
                        try{
                            // setTimeout(() =>{
                            //     history.push('/signup/2')
                            // },1000)
                            handlePage()
                        }
                        catch(e){
                        }
                    }}
                    validationSchema={validationSchema}
                >
                    {({values, errors, setFieldValue, handleSubmit, isValid}) =>(
                        <Form>
                            <RegularInput type="text" name="firstname" label="First name"/>
                            <RegularInput type="text" name="lastname" label="Last name"/>
                            
                            <div className="phone-input-container d-flex">
                                <PhoneCountryCode value={values.countryCode} handleChange ={(phone) => setFieldValue('countryCode',phone)} label="Country" name="countryCode"/>
                                <RegularInput type="number" name="phone" label="Phone number"/>
                            </div>

                            <RegularInput type="email" name="email" label="Email address"/>
                            <div className="">
                                <Button name="Next" classList={!isValid || errors.firstname || errors.lastname  || errors.email || errors.phone || errors.countryCode ? 'form-error' : ''}/>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Wrapper>
    );
}

export default Index;
