
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import ViewProducts from './pages/ViewProducts'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Login from './pages/Login'

function App() {
  // const [count, setCount] = useState(0)

  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);


  const switchLanguage = () => {
    const newLang = language === 'en' ? 'jp' : 'en';
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <div>
      <Navbar switchLanguage={switchLanguage} language={language} />
      <Routes >
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Homepage />} />
        <Route path="/view-product/:id" element={<ViewProducts />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App
