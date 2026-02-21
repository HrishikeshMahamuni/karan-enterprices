import React from 'react'
import {motion} from 'framer-motion'
import servicesData from '../Utils/ServiceSection'

const Services = () => {
  return (
    <div className='w-full bg-gray-50'>
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        {/* Title And Description Section */}
        <div className='flex flex-col items-center justify-center mb-10'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-5'>
                Our Services
            </h1>
            <p className='text-xl sm:text-2xl md:text-3xl flex text-center text-orange-700 font-semibold w-100'>
                We Provide Waterproofing & Painting Services 
            </p>
        </div>

        <motion.div
         initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
            {/* Section Where every Service are Showned */}

            {
                servicesData.map((service) => (
                <div key={service.id} className='h-full w-100 hover:shadow-2xl rounded-2xl space-y-2 '>
                    <img src={service.image} className='h-50 w-full rounded-2xl object-cover' 
                    alt={service.title}/>

                    <div className='p-5 '>
                        <h1 className='text-2xl font-semibold text-blue-900 '>
                        {service.title}
                        </h1>

                        {/* <p className='text-lg font-medium text-gray-700 '>
                        {service.description}
                        </p> */}
                    </div>

            </div>
                ))

            }

           
        </motion.div>
    </section>
    </div>
  )
}

export default Services
