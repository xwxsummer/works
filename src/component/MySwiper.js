import React, { PropTypes } from 'react'
import Swiper from 'swiper';

import img1 from '../images/u62.jpg';
import img2 from '../images/u65.jpg';
import img3 from '../images/u68.jpg';

import img4 from '../images/u68.jpg';
import img5 from '../images/u68.jpg';
import img6 from '../images/u68.jpg';
import img7 from '../images/u68.jpg';
import img8 from '../images/u68.jpg';
import img9 from '../images/u68.jpg';

class MySwiper extends React.Component {
  componentDidMount(){
    var mySwiper = new Swiper ('.container-big', {
      pagination: '.swiper-pagination',
      loop : true,
      slidesPerView : 'auto',
      autoPlay:'true',
    })
    var ourSwiper = new Swiper ('.container-little', {
      loop : true,
      slidesPerView : 'auto',
      spaceBetween: 6,
      freeMode : true,
      slidesPerView : 2,
    })
  }

  render () {
    return(
      <div>
        <div className="swiper-container container-big">
          <div className="swiper-wrapper">
              <div className="swiper-slide slide1"></div>
              <div className="swiper-slide slide2"></div>
              <div className="swiper-slide slide3"></div>
          </div>
          <div className="swiper-pagination" ref='dott'></div>
        </div>
        <div className="swiper-container container-little">
          <div className="swiper-wrapper">
              <div className="swiper-slide slide1"></div>
              <div className="swiper-slide slide2"></div>
              <div className="swiper-slide slide3"></div>
              <div className="swiper-slide slide4"></div>
              <div className="swiper-slide slide5"></div>
              <div className="swiper-slide slide6"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default MySwiper;
