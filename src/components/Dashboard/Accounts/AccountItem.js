import PropTypes from 'prop-types'
import {Wrapper} from './style'
export default function Index ({details, icon}){
    const {type,bank,number,balance} = details
    return (
        <Wrapper className="account-item">
            <div className="top d-flex justify-content-between">
                <div className="account-details">
                    <h4 className="account-type">{type}</h4>
                    <h6 className="account-number">{bank} - <span>{number}</span></h6>
                </div>
                <img src={icon} alt="" className="account-icon"/>
            </div>
            <div className="bottom">
                <h3 className="amount">N814,800.<span>45</span></h3>
            </div>
        </Wrapper>
    );
}

Index.propTypes ={
    type:PropTypes.string.isRequired,
    bank:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    balance:PropTypes.string.isRequired
}