import {Wrapper} from './style'
const FeatureSliderItem = ({children, title, desc, img}) =>(
    <Wrapper className="features-slider-item">
        <div>
            <div className="slide-description">
                <h2 className="">{title}</h2>
                <h6>Organise your {desc}</h6>
            </div>
            <img src={img} alt="feature-img" className="slide-img"/>
        </div>
    </Wrapper>
)

export default FeatureSliderItem