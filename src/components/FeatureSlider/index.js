
import React,{ Component } from 'react'
import Slider from "react-slick";
import FeatureSliderItem from '../FeatureSliderItem';
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
      if(activeSlideIndex === i) return(
          <div className="slides-indicator-item" key={i}>
            <span className="active" style={{width:`${(activeInterval) * 15.5}%`}}></span>
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
          autoplay:true,
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
            <div className="prev slider-navigation" onClick={this.previous}></div>
            <div className="next slider-navigation" onClick={this.next}></div>
            <div className="slides-indicators">
                {this.renderSliderIndicators()}
            </div>
            
            <Slider ref={c => (this.slider = c)} {...settings}>
             <FeatureSliderItem title="Create multiple sub-account" desc="Organise your business finances easily with multiple accounts. No limits!" img={OpenVaultImg}/>
             <FeatureSliderItem title="Create Proposals " desc="Organise your business finances easily with multiple accounts. No limits now!" img={OpenVaultImg}/>
             <FeatureSliderItem title="Create effecient business plans" desc=">Organise your business finances easily with multiple accounts. No limits!" img={OpenVaultImg}/>
             <FeatureSliderItem title="Create multiple sub-account" desc="Organise your business finances easily with multiple accounts. No limits!" img={OpenVaultImg} />
             <FeatureSliderItem title="Create multiple" desc="Organise your business finances easily with multiple accounts. No limits!" img={OpenVaultImg} />
            </Slider>
          </Wrapper>
        );
      }
}

