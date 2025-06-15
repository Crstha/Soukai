import React from 'react'

const ScrollToSection = (id) => {

    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
        })
    }
}

export default ScrollToSection