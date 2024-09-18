import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import CarList from './components/CarList'
import Testimonial from './components/Testimonial'
import AppStoreBanner from './components/AppStoreBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CarList />
      <Testimonial />
      <AppStoreBanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App