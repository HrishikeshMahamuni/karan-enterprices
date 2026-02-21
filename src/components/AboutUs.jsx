import React from 'react'
import { MoveRight } from 'lucide-react'
import {motion} from 'framer-motion'
import { fadeIn, textVariant } from '../Utils/motion'
import AboutPage from '../assets/about_us2.png'

const AboutUs = () => {
  return (
    <div className='w-full bg-blue-50'>
    <div className='max-w-7xl mx-auto mt-12 px-4 py-16 md:py-16'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl flex items-center justify-center  font-bold text-blue-900 mb-24'>
            About Us
        </h1>
       <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>

            {/* left Section */}
            <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full md:w-1/2">
                    <img src={AboutPage} alt="Schedule Image" className='w-full h-auto object-contain rounded-2xl' />
            </motion.div>

            {/* Right Section */}
            <div className='w-full md:w-1/2'>
                
                <motion.h2
                variants={textVariant(0.3)}
                                initial='hidden'
                                whileInView='show'
                className='text-3xl sm:text-4xl md:text-3xl font-bold text-blue-900 mt-4 mb-6'>
                    What Karan Enterprices Do ?
                </motion.h2>
                
                <motion.p 
                variants={textVariant(0.4)}
                                initial='hidden'
                                whileInView='show'
                className='text-gray-500 font-medium mb-8'>
                    Karan Enterprices is a renowned waterproofing specialist, established
                    by industry experts. Fusing in-depth
                    technical knowledge, innovative materials, and advanced techniques, we
                    provide bespoke waterproofing solutions for residential, commercial, and
                    industrial properties. At Karan Enterprices, we are committed to
                    delivering enduring protection against water damage, ensuring safe,
                    durable, and resilient spaces for our client
                </motion.p>

                <motion.a
                variants={textVariant(0.5)}
                                initial='hidden'
                                whileInView='show'
                
                 href="#"
                className='text-blue-600 font-medium flex items-center gap-2 hover:gap-4 transition-all'
                >
                    Know More About Us <MoveRight size={18} />
                </motion.a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs
