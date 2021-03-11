import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import BannerBottom from '../components/Bottom-Banner';
import Footer from'../components/Footer';
import Navbarco from'../components/Navbar';
import Header from'../components/Header';
import Section2 from'../components/Section2';
import Section3 from'../components/Section3';
import Section4 from'../components/Section4';
import Section5 from'../components/Section5';
import FooterEnd from'../components/Footer-End';



function homepage(){
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  return (
    
    <div className="body">
    <Navbarco/>
    <Header/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <BannerBottom/>
    <Footer/>
    <FooterEnd/>
    </div>
    
  
  
  )
  
}
export default homepage