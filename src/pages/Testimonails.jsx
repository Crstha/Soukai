import React from 'react'
import { TestimonialsData } from '../constants'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTranslation } from 'react-i18next';


// import {Pagination } from 'swiper'

const Testimonails = () => {

  const {t} = useTranslation();


  return (
    <section className='mt-20'>
      <div className=''>
        <h1 className='text-4xl font-semibold text-center text-black  mb-2'>{t('testimonialsTitle')}</h1>
        <p className='text-center text-gray-600 dark:text-gray-400 mb-8'>{t('testimonialsDesc')}</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        // loop={true}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={true}

        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >

        {TestimonialsData.map((data) => (
          <SwiperSlide key={data.restaurantId}>
            <div className="bg-white h-80 w-90 border max-sm:w-60 border-[#dde4e0] rounded-xl p-6 text-center max-w-sm mx-auto">
              <img
                src={data.profileImg}
                alt={t(data.representerName)}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">{t(data.representerName)}</h3>
              <p className="text-sm text-gray-500 mb-3">
                {t(data.representerPost)}, {t(data.restaurantName)}
              </p>
              <p className="text-[#688273] text-sm">
                {t(data.testimonial)}
              </p>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </section>
  )
}

export default Testimonails