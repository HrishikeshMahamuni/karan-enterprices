import React from 'react'
import CTA from '../components/CTA'
import servicesData from '../Utils/ServiceSection'


const ServicesPage = () => {
  return (
    <div>
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
            {/* Title And Description Section */}
            <div className='flex flex-col items-center justify-center  mb-10'>
                <h1 className='text-5xl font-bold text-blue-900 mb-5'>
                    Our Services
                </h1>
                <p className='text-2xl flex text-center text-orange-700 font-semibold w-100'>
                    We Provide Waterproofing & Painting Services 
                </p>
            </div>
    
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10'>
                {/* Section Where every Service are Showned */}
    
                {
                    servicesData.map((service) => (
                    <div key={service.id} className='h-full w-100 hover:shadow-2xl rounded-2xl space-y-2 '>
                        <img src={service.image} className='h-50 w-full rounded-2xl object-cover' 
                        alt={service.title}/>
    
                        <div className='p-5 space-y-5'>
                            <h1 className='text-2xl font-semibold text-blue-900 '>
                            {service.title}
                            </h1>
    
                            <p className='text-lg font-medium text-gray-700 '>
                            {service.description}
                            </p>
                        </div>
    
                </div>
                    ))
    
                }
    
               
            </div>
        </section>
        <CTA/>
        </div>

        
  )
}

export default ServicesPage
