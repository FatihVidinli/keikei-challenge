import React, { Component } from 'react'
function  Header() {
        return(
            <div className="slider">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="swiper-zoom-container">
              <img src="/slider1.jpg" />
            </div>
          </div>
        <div className="swiper-slide">
          <div className="swiper-zoom-container">
            <img src="/slider2.jpg" />
          </div>
        </div>
      <div className="swiper-slide">
        <div className="swiper-zoom-container">
          <img src="/slider1.jpg" />
        </div>
      </div>
    </div>
      </div>
      <div class="swiper-scrollbar"></div>
  
    </div>
        )
}
export default Header