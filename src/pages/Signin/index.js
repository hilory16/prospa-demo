import {Wrapper} from './style';
import OnboardingInfoSlides from '../../components/OnboardingInfoSlides';
import OnboardingFormArea from '../../components/OnboardingFormArea';
import SigninForm from '../../components/SigninForm';
import 'react-phone-input-2/lib/style.css';

function SignUp({history}) {

  return (
    <Wrapper>
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
