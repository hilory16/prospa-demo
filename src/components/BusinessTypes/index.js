import PropTypes from 'prop-types'
import {Wrapper} from './style';
import BusinessTypeItem from './BusinessTypeItem';

const Index = ({businessTypeValue,setBusinessType}) => {
    
    return (
        <>
            <BusinessTypeItem 
                type="I have a registered business / charity with CAC"     
                desc="As a registered business you’ll get:" 
                benefits={["Account in your business name","Send to and receive transfers from all Nigerian banks", "Tools for business management"]}
                businessType="registered"
                setBusinessType={setBusinessType}
                businessTypeValue={businessTypeValue}
            />
            <BusinessTypeItem 
                type="My business is not yet registered, I would like to register"     
                desc="Everything you need to start your business" 
                benefits={["Registered business name with the CAC","Tax identification number", "Your account will be automatically opened on completion"]}
                businessType="pre-register"
                setBusinessType={setBusinessType}
                businessTypeValue={businessTypeValue}
            />
            <BusinessTypeItem 
                type="I’m a freelancer I do business in my personal name"     
                desc="As a freelancer business you’ll get:" 
                benefits={["Account in your business name","Send to and receive transfers from all Nigerian banks", "Tools for business management"]}
                businessType="freelancer"
                setBusinessType={setBusinessType}
                businessTypeValue={businessTypeValue}
            />
        </>
    );
}

export default Index;
Index.propTypes ={
    businessTypeValue:PropTypes.string.isRequired,
    setBusinessType:PropTypes.func.isRequired
}