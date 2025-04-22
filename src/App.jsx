import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Reservation from './components/reservation/Reservation'
import Features from './components/features/Features'
import About from './components/about/About'

import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Gallery from './components/gallery/Gallery'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Reservation/>
      <Features/>
    <About/>
      <Menu/>
      <Gallery/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App