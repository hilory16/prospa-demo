import {useState} from 'react';
import {CSSTransition } from 'react-transition-group';
import {Helmet} from 'react-helmet';
import OnboardingInfoSlides from '../../components/OnboardingInfoSlides';
import OnboardingFormArea from '../../components/OnboardingFormArea';
import SignupForm from '../../components/SignupForm';
import BusinessTypeForm from '../../components/BusinessTypeForm';
import 'react-phone-input-2/lib/style.css';
import {Wrapper} from './style';

function SignUp({history}) {
  const [active, setActive] = useState('biodata')
  const [formData, setFormData] = useState({firstname:"", 
                                      lastname:"", 
                                      phone:"", 
                                      email:"",
                                      countryCode:"ng"
                                  })
  // const [inProp, setInProp] = useState(false);
  return (
    <Wrapper>
      <Helmet>
        <title>Prospa || Create an account today</title>
      </Helmet>
      <div className="onboarding-content d-flex">
        <OnboardingInfoSlides />
        <OnboardingFormArea handlePage={() =>{
          setActive("biodata")
          // setInProp(false)
          }} active={active}>
          {
            active === "biodata"
            ?<CSSTransition in={active === "biodata"} timeout={500} classNames="my-node">
              <SignupForm history={history} 
                handlePage={(data) =>{
                setActive("business") 
                // setInProp(true)
                setFormData(data)
                }}
                formData={formData}
              />
            </CSSTransition>
            
            :<CSSTransition in={active === "biodata"} timeout={500} classNames="my-node">
              <BusinessTypeForm history={history} />
            </CSSTransition>
           
          }
          {/* <CSSTransition in={inProp} timeout={500} classNames="my-node" >
            {
              active === "biodata"
              ?<SignupForm history={history} 
                  handlePage={(data) =>{
                  setActive("business") 
                  setInProp(true)
                  setFormData(data)
                  
                  }}
                  formData={formData}
                />
              :<BusinessTypeForm history={history} />
            }
            
          </CSSTransition> */}
        </OnboardingFormArea>
      </div>
    </Wrapper>
  );
}

export default SignUp;
