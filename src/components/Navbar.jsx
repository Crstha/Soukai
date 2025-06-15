import React, { useState } from 'react'
// import { Link } from 'rea  ct-router-dom'

import { kimchiImg } from '../utils'
import { useTranslation } from 'react-i18next'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate,Link } from 'react-router-dom';


const Navbar = ({ switchLanguage, language }) => {

  const navigate  = useNavigate();

  const handleSectionClick = (sectionId) =>{
    navigate('/', {state:{scrollTo:sectionId}})
  }

  console.log("language", language);


  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className=' fixed top-0 left-0 right-0 z-50 w-full h-20 bg-green-800 text-white px-6 sm:px-8 flex items-center justify-between'>
      {/* <div className='flex items-center justify-between w-full '> */}
      <div className='flex items-center space-x-3'>
        {/* <a href="#herosection">
            <img className='h-15 w-auto' src={kimchiImg} alt="Kimchi Logo" /></a>
          <a href="#herosection" className=' text-white max-sm:text-2xl hover:text-green-400 text-4xl font-bold hover:cursor-pointer'> Soukai </a>
           */}
        <button onClick={()=>handleSectionClick('herosection')}>
          <img className='h-15 w-auto cursor-pointer' src={kimchiImg} alt="Kimchi Logo" />
        </button>
        <button onClick={()=>handleSectionClick('herosection')}  className='text-white max-sm:text-2xl tracking-wide text-4xl font-extrabold hover:cursor-pointer'>
          Soukai
        </button>
      </div>
      {/* <div className='flex items-center max-sm:hidden'> */}
      <ul className="hidden sm:flex space-x-6 text-lg font-medium text-white">
    <li><button onClick={()=>handleSectionClick('herosection')} className="hover:text-green-300">{t('home')}</button></li>
    <li><button onClick={()=>handleSectionClick('products')} className="hover:text-green-300">{t('products')}</button></li>
    <li><button onClick={()=>handleSectionClick('services')}  className="hover:text-green-300">{t('services.title')}</button></li>
    <li><button onClick={()=>handleSectionClick('about')}  className="hover:text-green-300">{t('about')}</button></li>
  </ul>


      {/* </div> */}
      <div className="flex items-center space-x-4">
    <button className="bg-green-600 hover:bg-green-500 text-white rounded-xl px-4 py-1 font-semibold">
      Log In
    </button>
    <button onClick={switchLanguage} className="hidden sm:block text-sm hover:text-green-300">
      {language === 'en' ? '日本語' : 'English'}
    </button>
    <div className="relative cursor-pointer text-xl">
      <AiOutlineShoppingCart />
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
        0
      </span>
    </div>
  </div>

      <button onClick={() => setOpenMenu(!openMenu)} className="sm:hidden text-white">
    {openMenu ? (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>

      <div
        className={`fixed top-0 right-0 h-12/12 w-64 bg-green-800 text-white z-40 transform transition-transform duration-300 ${openMenu ? 'translate-x-0)' : 'translate-x-full'
          } sm:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-green-300">
          <span className="text-xl font-sbold">Menu</span>
          <button onClick={() => setOpenMenu(false)}>
            {/* Close Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-4 text-lg">
          <a href="#herosection">
            <li className="hover:text-green-300 cursor-pointer">{t('home')}</li>

          </a>
          <a href="#products">
            <li className="hover:text-green-300 cursor-pointer">{t('products')}</li>

          </a>
          <a href="#services">
            <li className="hover:text-green-300 cursor-pointer">{t('services.title')}</li>

          </a>
          <a href="#about">
            <li className="hover:text-green-300 cursor-pointer">{t('about')}</li>

          </a>
          <button className=' max-sm:text-xl text-xl hover:text-green-400 font-bold hover:cursor-pointer' onClick={() => switchLanguage()}>{language === 'en' ? '日本語' : 'English'}</button>
        </ul>
      </div>

      {/* Backdrop */}
      {
        openMenu && (
          <button
            className="fixed inset-0 bg-black opacity-30 z-30 sm:hidden"
            onClick={() => setOpenMenu(false)}
          ></button>
        )
      }

    </nav >
  )
}

export default Navbar