import {useState} from 'react'
import PropTypes from 'prop-types'
import BusinessTypes from '../BusinessTypes';
import Button from '../FormControls/Button'
import {Wrapper} from './style'


export default function Index({history}){
    const [businessTypeValue, setBusinessType] = useState('')
    return (
        <Wrapper className="form business-types col-lg-5 px-0 mx-auto">
            <h3 className="onboarding-name mb-0">Open a new business account</h3>
            <h6 className="onboarding-description">A short description comes here</h6>
            <BusinessTypes businessTypeValue={businessTypeValue} setBusinessType={setBusinessType}/>
            <Button name="Next" classList={`mb-5 ${businessTypeValue === "" ? 'form-error': ''}`} handleClick={() => history.push('/dashboard')}/>
        </Wrapper>

    );
}


Index.propTypes ={
    history:PropTypes.object.isRequired,
}
