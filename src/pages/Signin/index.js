import {Helmet} from 'react-helmet';
import OnboardingInfoSlides from '../../components/OnboardingInfoSlides';
import OnboardingFormArea from '../../components/OnboardingFormArea';
import SigninForm from '../../components/SigninForm';
import 'react-phone-input-2/lib/style.css';
import {Wrapper} from './style';


function SignUp({history}) {

  return (
    <Wrapper>
      <Helmet>
          <title>Prospa || Login to your account</title>
      </Helmet>
      <div className="onboarding-content d-flex">
        <OnboardingInfoSlides />
        <OnboardingFormArea initial signupLink>
          <SigninForm history={history}/>
        </OnboardingFormArea>
      </div>
    </Wrapper>
  );
}

export default SignUp;
