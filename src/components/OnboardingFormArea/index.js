import {Link} from 'react-router-dom';
import {Wrapper} from './style';

const Index = ({children}) => {
    return (
        <Wrapper className="onboarding-form-area">
            <div className="container">
                <div className="d-flex justify-content-end sign-in">
                    <p className="text-right">Already a member? <span><Link to="">Sign In</Link></span></p>
                </div>
                {children}
            </div>
        </Wrapper>
    );
}

export default Index;
