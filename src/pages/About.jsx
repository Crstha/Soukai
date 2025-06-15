import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

import { couli } from "../utils"

const About = () => {
  const { t } = useTranslation();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".image",{
      opacity:0,
      x:100

    }, {
      scrollTrigger: {
        trigger: ".animate",
        start:'top 50%',
        toggleActions: "play none none none"
      },
      opacity:1,
      x: 0,
      stagger:0.1,
      duration: 1
    });
    gsap.fromTo(".paragraph",{
      opacity:0,
      x:-100

    }, {
      scrollTrigger: {
        trigger: ".animate",
        start:'top 50%',
        toggleActions: "play none none none"
      },
      opacity:1,
      x: 0,
      stagger:0.1,
      duration: 1
    })
     
  })

  return (
    <section id='about' className='animate scroll-mt-30 mt-30 max-sm:p-0'>
      <h1 className='text-3xl font-semibold  text-[#121714]'>{t('about')}</h1>
      <div className=' about w-full p-2 flex h-full justify-around items-center max-sm:p-0'>
        <p className='paragraph text-gray-700 text-center text-xl text-wrap  w-4/6 max-sm:text-md max-sm:w-full '>{t('aboutdescription')}</p>
        <img src={couli} alt="" className='image h-70 p-2 object-cover max-sm:hidden' />
      </div >

    </section>

  )
}

export default About