import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import {RegularInput} from '../FormControls/InputLayout';
import Button from '../FormControls/Button'
import {Wrapper} from './style'

const validationSchema = yup.object({
    password:yup.string().required(),
    email:yup.string().email().required()
})
const Index = ({history}) => {
    return (
        <Wrapper className="form col-lg-5 px-0 mx-auto">
            <h3 className="onboarding-name mb-0">Welcome back to Prospa</h3>
            <h6 className="onboarding-description">An account, with powerful, personalised tools all in one place</h6>
            <div>
                <Formik
                    validateOnChange
                    validateOnMount
                    initialValues={{
                        email:"",
                        password:""
                    }}
                    onSubmit={async (data,{resetForm}) => {
                        console.log(data)
                        try{
                            history.push('/dashboard')
                        }
                        catch(e){
                        }
                    }}
                    validationSchema={validationSchema}
                >
                    {({errors, isValid}) =>(
                        <Form>
                            <RegularInput type="email" name="email" label="Email address"/>
                            <RegularInput type="password" name="password" label="Enter password"/>
                            <div className="">
                                <Button name="Next" classList={!isValid || errors.email || errors.password ? 'form-error' : ''}/>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Wrapper>
    );
}

export default Index;
