import { Swiper, SwiperSlide } from 'swiper/react';


export default () => {
  return (
    <div className="section5">
          <p>Kombinini Tamamla</p>
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      navigation
    
      breakpoints={{
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     <SwiperSlide>
          
          <div className="content-slider section5-slider">
          <a href="#" target="_blank"><img src="/slider5.jfif"/>
            <span className="slider-span-content">Yazlık Elbise</span><br/>
            <span className="slider-span-content">299$</span></a>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          
          
          <div className="content-slider section5-slider">
          <a href="#" target="_blank"><img src="/slider6.jfif"/>
            <span className="slider-span-content">Yazlık Elbise</span><br/>
            <span className="slider-span-content">299$</span></a>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="content-slider section5-slider">
          <a href="#" target="_blank"><img src="/slider7.jfif"/>
            <span className="slider-span-content">Yazlık Elbise</span><br/>
            <span className="slider-span-content">299$</span></a>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="content-slider section5-slider">
          <a href="#" target="_blank"><img src="/slider5.jfif"/>
            <span className="slider-span-content">Yazlık Elbise</span><br/>
            <span className="slider-span-content">299$</span></a>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="content-slider section5-slider">
          <a href="#" target="_blank"><img src="/slider7.jfif"/>
            <span className="slider-span-content">Yazlık Elbise</span><br/>
            <span className="slider-span-content">299$</span></a>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="content-slider section5-slider">
          <a href="#" target="_blank"><img src="/slider5.jfif"/>
            <span className="slider-span-content">Yazlık Elbise</span><br/>
            <span className="slider-span-content">299$</span></a>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="content-slider section5-slider">
          <a href="#" target="_blank"><img src="/slider6.jfif"/>
            <span className="slider-span-content">Yazlık Elbise</span><br/>
            <span className="slider-span-content">299$</span></a>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="content-slider section5-slider">
          <a href="#" target="_blank"><img src="/slider7.jfif"/>
            <span className="slider-span-content">Yazlık Elbise</span><br/>
            <span className="slider-span-content">299$</span></a>
          </div>
          </SwiperSlide>

      
    </Swiper>
    </div>
  );
};