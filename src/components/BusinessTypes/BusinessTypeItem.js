
import PropTypes from 'prop-types'
import GreenTickImg from '../../assets/img/green-tick.svg'
import {Wrapper} from './style'
const BusinessTypeItem = ({type, desc, benefits, businessType, setBusinessType, businessTypeValue}) => {
    return (
        <Wrapper className={`business-type-block d-flex ${businessTypeValue === businessType  ? 'active-business-block' : ''}`}>
            <div className="radio">
                <div class="radio-container">
                    <input type="radio" name="business-type" value={businessType} onChange={() => setBusinessType(businessType)}/>
                    <span class="checkmark"></span>
                </div>
            </div>
            <div className="business-details">
                <h3 className="business-type">{type}</h3>
                
                <ul className={`business-benefits m-0 p-0 ${businessTypeValue === businessType  ? 'active-benefit' : ''}`}>
                    <p className="business-desc">{desc}</p>
                    {
                        benefits ? benefits.map((item, i) =>{
                            return(
                                <li className="" key={i}>
                                    <img src={GreenTickImg} alt="" />
                                    <span>{item}</span>
                                </li>
                            ) 
                        })
                        : null
                    }
                </ul>
            </div>
        </Wrapper>
    );
}

export default BusinessTypeItem;

BusinessTypeItem.propTypes ={
    type:PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
    businessType:PropTypes.string.isRequired,
    businessTypeValue:PropTypes.string.isRequired,
    playerSelected:PropTypes.bool.isRequired,
    setBusinessType:PropTypes.func.isRequired
}