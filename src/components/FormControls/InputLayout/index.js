import {useState} from 'react'
import {Field} from 'formik';
import PhoneInput from 'react-phone-input-2'
import CaretImg from '../../../assets/img/phone-caret.svg'
import 'react-phone-input-2/lib/style.css'
import {RegularInputWrapper, CountryCode} from './style'

export const RegularInput = ({type, name, label}) => {
    return (
        <RegularInputWrapper className="form-field">
            <Field type={type} name={name} className={`input ${type} hide-number-arrow`} required autocomplete="off"/>
            <label>{label}</label>
            <div className="active-field"></div>
        </RegularInputWrapper>
    );
}

export const PhoneCountryCode = ({value, name, label, handleChange}) => {
    const [active, setActive] = useState(false)
    console.log(active)
    return (
        <CountryCode className="country-phone-code form-field" onMouseOut={() =>setActive(false)} onMouseOver={() =>setActive(true)}>
            
            <Field
                name={name}
                render={({ field, form }) => (
                    <PhoneInput
                        {...field}
                        country={'ng'}
                        value={value}
                        // onChange={phone => {
                        //     setActive(true)
                        //     handleChange(phone)
                        // }}
                        inputProps={{
                            required: true,
                            autofocus:false
                        }}
                        countryCodeEditable={false}
                    />
                )}
            />
            <img src={CaretImg} className="phone-caret" />
            <label className="country-code-label">{label}</label>
            {   
                <div className={`active-field ${!active ? 'show': ''}`}></div>
            }
            
        </CountryCode>
    );
}

