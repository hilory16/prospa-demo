import {Wrapper} from './style';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2'
import OnboardingInfoSlides from '../../components/OnboardingInfoSlides';
import OnboardingFormArea from '../../components/OnboardingFormArea';
import SignupForm from '../../components/SignupForm';
import 'react-phone-input-2/lib/style.css';

function SignUp() {

  return (
    <Wrapper>
      <div className="onboarding-content d-flex">
        <OnboardingInfoSlides />
        <OnboardingFormArea initial>
          <SignupForm/>
        </OnboardingFormArea>
      </div>
    </Wrapper>
  );
}

export default SignUp;
