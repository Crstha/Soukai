
import HeroSection from '../components/HeroSection';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import WhySoukai from './WhySoukai';
import Products from './Products';
import Testimonails from './Testimonails';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Consumers from './Consumers';

const Homepage = () => {


  const location = useLocation();

  useEffect(()=>{
    if(location.state?.scrollTo){
      const element = document.getElementById(location.state.scrollTo);
      if(element){
        element.scrollIntoView({behavior:'smooth'})
      }
    }
  }, [location])
  // const { i18n } = useTranslation();
  // const [language, setLanguage] = useState(i18n.language);


  // const switchLanguage = () => {
  //   const newLang = language === 'en' ? 'jp' : 'en';
  //   i18n.changeLanguage(newLang);
  //   setLanguage(newLang);
  // };



  return (
    <div id='home' className=''>
      <HeroSection id="herosection" />
      <Services id="services" />
      <Products id="products" />
      <WhySoukai id="whysoukai" />
      <About id="about" />
      <Testimonails />
      <Consumers id="consumers"/>
      <Contact /> 
    </div>
  )
}

export default Homepage