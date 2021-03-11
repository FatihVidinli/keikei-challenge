import '../styles/app.css'
import '../styles/style.scss'
import Swiper from 'swiper/bundle';


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
   
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      hider:true,
    },
  });

export default function MyApp({ Component, pageProps}){
    return <Component { ...pageProps}/>
}

