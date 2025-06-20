import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer className="m-2 w-full  bottom-0  left-0 p-2 text-center text-black">
            <p>&copy; {new Date().getFullYear()} {t('footer')}</p>
            {/* <p className="text-sm mt-2">Delivering quality goods to restaurants across the city.</p> */}
        </footer>
    )
}

export default Footer