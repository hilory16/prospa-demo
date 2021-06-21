
import React,{ Component } from 'react'
import Slider from "react-slick";
import FeatureSliderItem from './FeatureSliderItem';
import Timer from '../Timer'
import OpenVaultImg from '../../assets/img/open-vault.png';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Wrapper} from './style'

export default class Index extends Component {
  
  constructor() {
    
      super();
      this.state = { activeSlideIndex:0, activeInterval:0};
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }

    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }

    componentWillUnmount(){
      clearInterval(this.timer)
    }
    
    startTimer() {
      this.timer = setInterval(this.countDown, 1000);
    }
  
    countDown() {
      const {activeInterval} = this.state
      this.setState({
        activeInterval: activeInterval + 1
      });
    }
  
  renderSliderIndicators = () =>{
    const {activeSlideIndex, activeInterval} = this.state
    const slides = [0,1,2,3,4]
    return slides.map((item, i) => {
      if(activeSlideIndex == i) return(
          <div className="slides-indicator-item" key={i}>
            <span className="active" style={{width:`${(activeInterval) *15.5}%`}}></span>
          </div>
      )
      return (<div className={`slides-indicator-item ${activeSlideIndex > i ? 'viewed' : ''}`}></div>)
    })
  }

    render() {
        const settings = {
          accessibility:false,
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:false,
          speed: 100,
          autoplaySpeed: 7000,
          fade:true,
          arrows:false,
          beforeChange:(old, active) =>{
            this.setState({activeSlideIndex:active, activeInterval:0})
          },
          onInit:() =>{
            this.startTimer()
          }
        };

        return (
          <Wrapper>
            {/* <div className="slides-indicators">
                <div className="slides-indicator-item viewed"></div>
                <div className="slides-indicator-item viewed"></div>
                <div className="slides-indicator-item">
                  <span className="active"></span>
                </div>
                <div className="slides-indicator-item"></div>
                <div className="slides-indicator-item"></div>
            </div> */}
            <div className="prev slider-navigation" onClick={this.previous}></div>
            <div className="next slider-navigation" onClick={this.next}></div>
            <div className="slides-indicators">
                {this.renderSliderIndicators()}
            </div>
            
            <Slider ref={c => (this.slider = c)} {...settings}>
              <FeatureSliderItem>
                <div>
                    <div className="slide-description">
                        <h2 className="">Create multiple sub-account</h2>
                        <h6>Organise your business finances easily with multiple accounts. No limits!</h6>
                    </div>
                    <img src={OpenVaultImg} alt="vault" className="slide-img"/>
                </div>
                
             </FeatureSliderItem>
             <FeatureSliderItem>
                <div>
                    <div className="slide-description">
                        <h2 className="">Create Proposals </h2>
                        <h6>Organise your business finances easily with multiple accounts. No limits now!</h6>
                    </div>
                    <img src={OpenVaultImg} alt="vault" className="slide-img"/>
                </div>
             </FeatureSliderItem>

             <FeatureSliderItem>
                <div>
                    <div className="slide-description">
                        <h2 className="">Create effecient business plans</h2>
                        <h6>Organise your business finances easily with multiple accounts. No limits!</h6>
                    </div>
                    <img src={OpenVaultImg} alt="vault" className="slide-img"/>
                </div>
             </FeatureSliderItem>

             <FeatureSliderItem>
                <div>
                    <div className="slide-description">
                        <h2 className="">Create multiple sub-account</h2>
                        <h6>Organise your business finances easily with multiple accounts. No limits!</h6>
                    </div>
                    <img src={OpenVaultImg} alt="vault" className="slide-img"/>
                </div>
             </FeatureSliderItem>
             <FeatureSliderItem>
                <div>
                    <div className="slide-description">
                        <h2 className="">Create multiple</h2>
                        <h6>Organise your business finances easily with multiple accounts. No limits!</h6>
                    </div>
                    <img src={OpenVaultImg} alt="vault" className="slide-img"/>
                </div>
             </FeatureSliderItem>
             
            </Slider>
          </Wrapper>
        );
      }
}

