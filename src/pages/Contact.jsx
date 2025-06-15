import React from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const { t } =  useTranslation(); 
    return (
        <div id='contact' className='mt-20 contact scroll-mt-20 mx-auto flex flex-col items-center justify-center max-w-2xl '>
            <h1 className='m-2 text-[#121714] text-3xl font-semibold'>{t('contact.title')}</h1>
            <p className='text-gray-700 font-2xl'>{t('contact.description')}</p>
            <form action="" className='w-full  p-8 m-3 flex flex-col items-center mx-auto space-y-4 max-sm:p-2'>
                <input type="text" placeholder={t('contact.inputname')} className='w-full bg-white rounded-lg border border-gray-300 p-8   ' />
                <input type="text" placeholder={t('contact.inputemail')} className='w-full bg-white rounded-lg border border-gray-300 p-8  ' />
                <textarea type="text" placeholder={t('contact.inputmessage')} className='w-full bg-white rounded-lg border border-gray-300 p-8  '/>
            <button className='p-1 text-white text-2xl font-semibold hover:bg-green-700 bg-green-800 rounded-2xl w-30 justify-center' >{t('contact.submitaction')}</button>
            </form>
        </div>
    )
}

export default Contact