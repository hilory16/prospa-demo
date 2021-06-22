import {Wrapper} from './style'
const Index = ({details, icon}) => {
    const {type,bank,number,balance} = details
    return (
        <Wrapper className="account-item">
            <div className="top d-flex justify-content-between">
                <div className="account-details">
                    <h4 className="account-type">{type}</h4>
                    <h6 className="account-number">{bank} - {number}</h6>
                </div>
                <img src={icon} alt="" className="account-icon"/>
            </div>
            <div className="bottom">
                <h3 className="amount">N814,800.<span>45</span></h3>
            </div>
        </Wrapper>
    );
}

export default Index;
