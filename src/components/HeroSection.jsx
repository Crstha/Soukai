import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'
import { vege } from '../utils';

const HeroSection = () => {
  const { t } = useTranslation();

  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current, {
      opacity: 0, y: 30
    }, {
      opacity: 1, y: 0, duration: 1.5, ease: "power3.out"
    }
    )
  }, [])

  return (
    <section id='herosection' ref={heroRef} className=" w-full min-h-[80vh] flex justify-between max-sm:justify-center items-center  p-2 max-sm:p-0 text-center">
      <div className=' w-4/6 max-sm:w-full'>
        <h2 className="text-4xl font-extrabold text-gray-800 mb-9 max-md:text-2xl">{t('welcome')}</h2>
        <p className=" text-wrap text-center text-xl text-gray-700  mx-auto mb-8 max-md:text-md max-sm:p-0 max-sm:text-md max-sm:text-center">{t('description')}</p>
        <button className='text-white bg-green-900 p-2 cursor-pointer rounded-2xl hover:bg-green-700 '>{t('cta')}</button>
      </div>

      <img className='h-80  object-cover  -rotate-12 max-md:h-60 max-sm:hidden' src={vege} alt="herosection" />
    </section>
  )
}

export default HeroSection 