import {Link} from 'react-router-dom';
import FeatureSlider from '../FeatureSlider'
import ProspaLogoImg from '../../assets/img/prospa-logo.svg'
import {Wrapper} from './style';

const Index = ({initial, bg}) => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <Wrapper className={`onboarding-info-slides d-none d-md-block `}>
            <div className={`onboarding-info-slides-item ${bg ? 'bg-2' : ''}`}>
                <div className={`prospa-logo `}>
                <Link to="/">
                    <img src={ProspaLogoImg} alt="prospa-logo"/>
                </Link>
                </div>
                <FeatureSlider/>
                <p className="mb-0 copyright">© {year} Prospa Inc</p>
            </div>
        </Wrapper>
    );
}

export default Index;
