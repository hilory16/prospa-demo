import {useState} from 'react';
import {CSSTransition } from 'react-transition-group'
import OnboardingInfoSlides from '../../components/OnboardingInfoSlides';
import OnboardingFormArea from '../../components/OnboardingFormArea';
import SignupForm from '../../components/SignupForm';
import BusinessTypeForm from '../../components/BusinessTypeForm';
import 'react-phone-input-2/lib/style.css';
import {Wrapper} from './style';

function SignUp({history}) {
  const [active, setActive] = useState('biodata')
  // console.log(active)
  const [inProp, setInProp] = useState(false);
  return (
    <Wrapper>
      <div className="onboarding-content d-flex">
        <OnboardingInfoSlides />
        <OnboardingFormArea handlePage={() =>{
          setActive("biodata")
          }} active={active}>
          {
            // active === "biodata"
            // ?<CSSTransition in={active === "biodata"} timeout={500} classNames="my-node">
            //   <SignupForm history={history} 
            //     handlePage={() =>{
            //     setActive("business") 
            //     setInProp(true)
                  
            //     }}
            //   />
            // </CSSTransition>
            
            // :<CSSTransition in={inProp} timeout={500} classNames="my-node">
            //   <BusinessTypeForm history={history} />
            // </CSSTransition>
           
          }
          <CSSTransition in={inProp} timeout={500} classNames="my-node" >
            {
              active === "biodata"
              ?<SignupForm history={history} 
                  handlePage={() =>{
                  setActive("business") 
                  setInProp(true)
                    
                  }}
                />
              :<BusinessTypeForm history={history} />
            }
            
          </CSSTransition>
        </OnboardingFormArea>
      </div>
    </Wrapper>
  );
}

export default SignUp;
