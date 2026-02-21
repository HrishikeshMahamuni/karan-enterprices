import React from 'react'
import Hero from '../components/HeroPage'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Reviews from '../components/Reviews'
import CTA from '../components/CTA'
import ContactForm from '../components/ContactForm'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <Services/>
        <WhyChooseUs/>
        <Reviews/>
        <CTA/>
        <ContactForm/>
    </div>
  )
}

export default HomePage
