import {useState} from 'react'
import {Field} from 'formik';
import PhoneInput from 'react-phone-input-2'
import CaretImg from '../../../assets/img/phone-caret.svg'
import 'react-phone-input-2/lib/style.css'
import {RegularInputWrapper, CountryCode} from './style'

export const RegularInput = ({type, name, label}) => {
    return (
        <RegularInputWrapper className="form-field">
            <Field type={type} name={name} className={`input ${type} hide-number-arrow`} required autocomplete="off" handleChange={() => console.log("object")}/>
            <label>{label}</label>
            <div className="active-field"></div>
        </RegularInputWrapper>
    );
}

export const RegularPhoneInput = ({type, name, label, handleChange, value}) => {
    function onChange(phone){
        const re =/^\d+$/;
        if (phone === '' || re.test(phone)) {
            handleChange(phone)
        }
     }
    return (
        <RegularInputWrapper className="form-field">
            <input type="number" name={"phone"} className={`input ${type} hide-number-arrow`} value={value} required autocomplete="off" onChange={(e) => onChange(e.target.value)}/>
            <label>{label}</label>
            <div className="active-field"></div>
        </RegularInputWrapper>
    );
}

export const PhoneCountryCode = ({value, name, label, handleChange}) => {
    const [active, setActive] = useState(false)
    
    return (
        <CountryCode className="country-phone-code form-field" onFocus={() =>setActive(true)} onBlur={() =>setActive(false)} onMouseLeave={() =>setActive(false)}>
            
            <Field
                name={name}
                render={({ field, form }) => (
                    <PhoneInput
                        {...field}
                        country={'ng'}
                        value={value}
                        onChange={phone => {
                            // setActive(true)
                            handleChange(phone)
                        }}
                        inputProps={{
                            required: true,
                            autofocus:false
                        }}
                        countryCodeEditable={false}
                    />
                )}
            />
            <img src={CaretImg} className="phone-caret" />
            <label className={`country-code-label ${active ? 'show': ''}`}>{label}</label>
            {   
                <div className={`active-field ${active ? 'show': ''}`}></div>
            }
            
        </CountryCode>
    );
}

