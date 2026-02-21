// import React from 'react'

// const HeroPage = () => {
//   return (
//     <div className=' container mx-auto flex flex-col md:flex-row justify-between  pt-44 pb-6 px-4'>
//         {/* left Section */}
//         <div className='w-full md:w-1/2 space-y-5'>
//             <h1 className='text-5xl font-bold '>Karan Entrerprices</h1>
//             <h3 className='text 3xl font-semibold '>Pune's Leading WaterProofing and Painting Service Provider</h3>
//             <p className='text-lg font-light '>We have some best of kind world class chemical with 100% solutions for stop water leakage. <br />We undertake all types of waterproofing work. <br /> Society Maintenance, New & Old Structure, Industrial, Residential & Commercial.</p>
//         </div>

//         {/* Right Section */}
//         <div>
//         Right Section
//         </div>
//     </div>
//   )
// }

// export default HeroPage
import React from 'react'
import {Star, AlarmClockPlus, ArrowRight, CheckCircle2} from 'lucide-react'
import {motion} from 'framer-motion'
import { fadeIn, textVariant } from '../Utils/motion'
import HeroImg from '../assets/HeroImage.png'
import line from '../assets/Lines.svg'


const Hero = () => {
  return (

    <div className='w-full '
     style={{
        backgroundImage: `url(${line})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    
    >
    <div id='home'
    className='container mx-auto pt-44 pb-4 px-6 lg:px-8 flex flex-col md:flex-row items-center justify-end mb-24'>
       
      

        {/* left Column */}
        <div className='w-full md:w-1/2 space-y-8'>

            {/* Section 1 Left Side */}
            <motion.div
                variants={fadeIn('right',0.3)}
                  initial='hidden'
                  whileInView='show'
                  
             className='flex items-center gap-2 border border-gray-300 rounded-full w-fit px-4 py-2 hover:bg-gray-100 hover:scale-105 transition-colors cursor-pointer bg-white '>
                <span className='text-sm font-medium'> <Star color="#007bff" /></span>  
                <span className='text-sm font-medium'> Pune's Best Waterproofing Service Provider</span> 
            </motion.div>

            {/* Section 2 Left Side */}
            <div>
                <motion.h1 
                variants={textVariant(0.3)}
                initial='hidden'
                whileInView='show'
                
                className='text-4xl md:text-5xl lg:text-5xl font-bold leading-tight'>
                        Karan Enterprices
                        <span className='text-blue-600 relative inline-block'>
                       “Waterproofing That Lasts.
                        <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>
                        </span>  Painting That Shines.”
                        {/* <span className='inline-block ml-2 animate-pulse'>⏰</span> */}
                </motion.h1>
                
            </div>
            <motion.p 
                variants={textVariant(0.4)}
                  initial='hidden'
                  whileInView='show'
            className='text-gray-600 text-lg md:text-xl max-w-xl'>Expert waterproofing & painting services for homes and buildings. Free inspection. Affordable pricing. Call now.

            </motion.p>

            <motion.div
                 variants={textVariant(0.5)}
                  initial='hidden'
                  whileInView='show'

             className='flex items-center gap-2 max-w-md'>
                <input type="text"
                className='flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-300 focus:ring-1 focus:right-blue-100 transition-all'
                placeholder='Email Address' />
                <button className='px-6 py-4 bg-blue-500 rounded text-white cursor-pointer hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200'>
                    <ArrowRight />
                </button>
            </motion.div>
        </div>


        {/* Right Column */}
        {/* <motion.div
             variants={fadeIn('left',0.4)}
                  initial='hidden'
                  whileInView='show'
        className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 '>
           <div className='relative'>
                <img src={HeroImg} alt="hero-image" className='relative h-150 ml-2.5rounded-lg z-10 hover:scale-[1.02] transition-transform duration-300' />
           </div>
        </motion.div> */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://plus.unsplash.com/premium_photo-1754280023338-042a01752c22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="House Painting"
                className="w-full h-125 object-cover"
              />
            </div>
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <p className="font-bold text-xl">100% Leak Proof</p>
                <p className="text-sm text-slate-500">Certified Warranty</p>
              </div>
            </motion.div>
          </motion.div>
  
    </div>
    </div>
  )
}

export default Hero
