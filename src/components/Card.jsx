import React from 'react'

const Card = ({title, description, image}) => {
  return (
    <div className='w-full flex flex-col items-center justify-center border border-[#dde4e0]  h-auto rounded-4xl hover:scale-105 transition-transform duration-300'>
        <img  className='  h-40 w-40 object-cover md:p-4 max-sm:p-4' alt='servicecard' src={image}></img>
        <h2 className='text-base font-bold text-[#121714] max-sm:text-xl  '>{title}</h2>
        <p className='text-[#688273] md:p-5 max-md:p-4 max-sm:text-sm  max-sm:p-2 text-sm'>{description}</p>

    </div>
  )
}

export default Card