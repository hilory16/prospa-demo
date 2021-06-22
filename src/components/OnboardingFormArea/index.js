import {Link} from 'react-router-dom';
import {Wrapper} from './style';
import BackButtonImg from '../../assets/img/back-grey.svg'

const Index = ({children, initial,signupLink}) => {
    return (
        <Wrapper className="onboarding-form-area">
            <div className="container">
                <div className={`d-flex ${initial ? 'justify-content-end':'justify-content-between'} sign-in top-bar align-items-center flex-wrap flex-md-nowrap`}>
                    {
                        !initial && <div className="" className="back-img">
                            <img src={BackButtonImg} alt="" />
                        </div>
                    }
                    {
                        !signupLink 
                        ? <p className="text-right mb-0">Already a member? <span><Link to="/signin">Sign In</Link></span> </p>
                        : <p className="text-right mb-0">Don’t have an account? <span><Link to="/signup">Sign Up</Link></span></p>
                    }
                        
                </div>
                {children}
            </div>
        </Wrapper>
    );
}

export default Index;
