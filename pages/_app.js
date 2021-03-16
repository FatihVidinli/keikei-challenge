import '../styles/app.css'
import '../styles/style.scss'
import Swiper from 'swiper/bundle';



  
  var swiper = new Swiper(".section5-slider-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });

export default function MyApp({ Component, pageProps}){
    return <Component { ...pageProps}/>
}

