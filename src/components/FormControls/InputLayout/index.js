import {Field} from 'formik';
import {RegularInputWrapper} from './style'

const Index = ({type, name, label}) => {
    return (
        <RegularInputWrapper className="form-field">
            <Field type={type} name={name} className="input text" required autocomplete="off"/>
            <label>{label}</label>
            <div className="active-field"></div>
        </RegularInputWrapper>
    );
}

export default Index;
