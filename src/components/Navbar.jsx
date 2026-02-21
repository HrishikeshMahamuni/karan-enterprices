import React, { useState } from 'react'
import {Menu, X} from 'lucide-react'
import { motion } from "framer-motion"
import { fadeIn } from '../Utils/motion'
import logo from '../assets/CompanyLogo.webp'


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [ActiveLink, setActiveLink] = useState('#home')

  const navLinks = [
    {href:'/', label:'Home'},
    {href:'/aboutus', label:'About Us'},
    {href:'/services', label:'Services'},
    {href:'/testimonials', label:'Testimonils'},
    {href:'/contactUs', label:'Contact Us'},
    
    
  ]

  return (
    <motion.div 
      variants={fadeIn('down',0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once:true}}
    
    
    className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm '>
        <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-4 lg:px-8 md:h-20 h-16'>

          {/* Logo */}
          <div className='flex items-center cursor-pointer'>
              {/* <div className='h-4 w-4 rounded-full bg-red-500 opacity-75 hover:opacity-100 transition-opacity'></div>
              <div className='h-4 w-4 rounded-full bg-blue-500 -ml-2 opacity-75 hover:opacity-100 transition-opacity'></div> */}
              <div className='opacity-75 hover:opacity-100 transition-opacity'>
                <img 
                className='h-16'
                src={logo} alt="" />
              </div>
              <h1 className='text-xl font-semibold'>Karan  Enterprices</h1>
          </div>
          {/* NavItems */}
          <div className='hidden md:flex items-center gap-8'>
           {
            navLinks.map( (link, index) => (
             <a 
                onClick={()=> setActiveLink(link.href)}
                className={`text-black hover:text-blue-500 text-md font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600  after:transition-all           ${ActiveLink === link.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`} 
                key={index} 
                href={link.href}> 
                {link.label}
              </a>
            ))
           }
          </div>
          {/* button */}

          <div>
            <button className='hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-200'>
              <a href="#newsletter">Get In Touch</a>
            </button>
          </div>

          {/* Mobile Menu */}
           <button 
            className=' md:hidden transition-all duration-200'
            onClick={()=> setIsMenuOpen(!isMenuOpen)}>

          
          {
            isMenuOpen ? <X className='h-6 w-6'/>  : <Menu className='h-6 w-6'/>
          }
           </button>


        </div>

        {
            isMenuOpen && (
              <div className='md:hidden bg-white border-t  border-gray-100 py-4'>
                <div className='flex flex-col space-y-2 px-4'>
                  {
                         navLinks.map( (link, index) => (
                            <a  
                            key={index}
                            onClick={()=>{
                              setActiveLink(link.href)
                              setIsMenuOpen(false)
                            }} 
                            className={`text-sm font-medium py-2  ${ActiveLink === link.href ? "text-blue-500" : "text-gray-700"}`} 
                           
                            href={link.href}>{link.label}</a>
                            
                         ))         
                  }
                   <button className='block w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-200'>
                  <a href="#newsletter">Get In Touch</a>
                  </button>
                 
                </div>
              </div>
            )

        }
      
    </motion.div>
  )
}

export default Navbar
