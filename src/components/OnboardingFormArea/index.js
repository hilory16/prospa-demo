import {Link} from 'react-router-dom';
import {Wrapper} from './style';
import BackButtonImg from '../../assets/img/back-grey.svg'

const Index = ({children, initial}) => {
    return (
        <Wrapper className="onboarding-form-area">
            <div className="container">
                <div className={`d-flex ${initial ? 'justify-content-end':'justify-content-between'} sign-in top-bar align-items-center flex-wrap flex-md-nowrap`}>
                    {
                        !initial && <div className="" className="back-img">
                            <img src={BackButtonImg} alt="" />
                        </div>
                    }
                        <p className="text-right mb-0">Already a member? <span><Link to="">Sign In</Link></span></p>
                </div>
                {children}
            </div>
        </Wrapper>
    );
}

export default Index;
