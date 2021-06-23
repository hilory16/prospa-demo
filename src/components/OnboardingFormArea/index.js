import {Link} from 'react-router-dom';
import {Wrapper} from './style';
import BackButtonImg from '../../assets/img/back-grey.svg'

const Index = ({children, active,signupLink, handlePage}) => {
    return (
        <Wrapper className="onboarding-form-area px-2 ">
            <div className="container">
                <div className={`d-flex ${active !=="business" ? 'justify-content-end':'justify-content-between'} sign-in top-bar align-items-center flex-wrap flex-md-nowrap`}>
                    {
                        active === "business" && <div className="" className="back-img">
                            <img src={BackButtonImg} alt="" onClick={handlePage}/>
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
