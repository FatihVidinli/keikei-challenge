import { Swiper, SwiperSlide } from 'swiper/react';


export default () => {
  return (
    <div className="hero-slider">
      <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <a href="#" target="_blank"><img src="/slider2.jpg" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="#" target="_blank"><img src="/slider2.jpg" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="#" target="_blank"><img src="/slider2.jpg" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="#" target="_blank"><img src="/slider2.jpg" /></a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="#" target="_blank"><img src="/slider2.jpg" /></a>
      </SwiperSlide>
      
      

      
    </Swiper>
    </div>
  );
};