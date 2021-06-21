import {Wrapper} from './style';
import OnboardingInfoSlides from '../../components/OnboardingInfoSlides';
import OnboardingFormArea from '../../components/OnboardingFormArea';
import BusinessTypeForm from '../../components/BusinessTypeForm';
import 'react-phone-input-2/lib/style.css';

function SignUp() {

  return (
    <Wrapper>
      <div className="onboarding-content d-flex">
        <OnboardingInfoSlides />
        <OnboardingFormArea>
          <BusinessTypeForm/>
        </OnboardingFormArea>
      </div>
    </Wrapper>
  );
}

export default SignUp;
