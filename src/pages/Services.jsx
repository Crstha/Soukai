import React, { useEffect } from 'react'

import { servicess } from '../constants'
import Card from '../components/Card';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

const Services = () => {
  const { t } = useTranslation();

  useEffect(()=>{
    gsap.fromTo('.section',{
      opacity:0,
      y:70
    },
  {
    scrollTrigger:{
      trigger:'.cards',
      start:'top 90%',
      toggleActions:'play none none none',
    },
    opacity:1,
    y:0,
    duration:1,
    // stagger:0.3,
    // ease:'power2.out',
  })
  },[])

  return (
    <section id='services' className='section w-full mx-auto  scroll-mt-30  p-6 text-center'>
      <h1 className='text-3xl font-semibold text-[#121714] mb-6'>{t('services.title')}</h1>
      <div className='cards grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-md:grid-cols-2'>
        {servicess.map((item) => (
          <Card 
            key={item.id}
            title={t(item.titleKey)}
            description={t(item.descriptionKey)}
            image={item.imgKey}
          />
        ))}
      </div>
    </section>
  );
};


export default Services

