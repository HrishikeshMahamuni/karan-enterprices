import React from 'react'
import Navbar from './components/Navbar'
import HeroPage from './components/HeroPage'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
// import Testimoinals from './components/Testimoinals'
import Reviews from './components/Reviews'
import CTA from './components/CTA'
import ContactUs from './components/ContactUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ServicesPage from './Pages/ServicesPage'
import ReviewsPage from './Pages/ReviewsPage'
import ContactPage from './Pages/ContactPage'
import ContactButtons from './components/ContactButtons'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/aboutus' element={ <AboutPage/> }/>
        <Route path='/services' element={ <ServicesPage/> }/>
        <Route path='/testimonials' element={ <ReviewsPage/> }/>
        <Route path='/contactus' element={ <ContactPage/> }/>
      </Routes>
      <ContactButtons/>
      <Footer/>
    </div>
  )
}

export default App
