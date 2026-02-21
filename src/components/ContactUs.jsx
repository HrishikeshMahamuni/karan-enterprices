import React, { useState } from 'react'

import {Mail, Phone} from 'lucide-react'



const ContactUs = () => {
    const [selected, setSelected] = useState("");
    const services = [
        "Waterproofing",
        "Renovation",
        "Roof Repair",
        "Painting",
        "Flooring"
    ];
  return (
    <div className='bg-blue-50'>
    <section id='ContactUs' className='py-12  px-4 sm:px-8 lg:px-8  max-w-7xl mx-auto '>
        <div className='flex flex-col items-center justify-center space-y-3 mb-12'>
            <h3 className='text-5xl font-bold text-blue-900 '>
                Testimonials
            </h3>
        </div>
        <div className='flex '>
            <div className='w-full md:w-1/2 space-y-4 p-8 border  border-gray-400  '> 

                <h3 className='text-lg font-semibold text-gray-600'>We Are Here To Help You</h3> 
                <h1 className='text-4xl font-semibold text-blue-900 '>
                    <span className='font-bold '>Professional</span> WaterProofing and Renovation Services</h1> 
                <p className='text-gray-600 font-medium'>
                    Are You Looking For High Quality Service Provider For Water Proofing And Home,Office Renovation
                    </p>  

                <div className='flex items-center gap-10'>
                     <Mail size={60} />
                    <div>
                        <h1 className='text-sm font-medium text-gray-600'>Email Address</h1>
                        <p className='text-lg font-semibold '>karanenterprices@gmail.com</p>
                    </div>
                </div>  
                 <div className='flex items-center gap-10'>
                     <Phone  size={60} />
                    <div>
                        <h1 className='text-sm font-medium text-gray-600'>Phone Number</h1>
                        <p className='text-lg font-semibold'>9322553116</p>
                    </div>
                </div>     
            </div>

            <div>

            </div>
            {/* Right Section */}
            
                <div className=' border border-gray-400 rounded-4xl bg-white px-5 py-18 w-1/2 space-y-3 flex flex-col  '>

                    <h1 className="block mb-2 text-sm font-medium text-gray-700">Name</h1>
                    <textarea className='border border-gray-400 rounded-lg bg-gray-200 items-center justify-center my-auto px-4  h-12 w-[85%]' 
                        name="name" 
                        placeholder='Name' 
                        id="Name">
                    </textarea>

                    <h1 className="block mb-2 text-sm font-medium text-gray-700">Email</h1>
                    <textarea className='border border-gray-400 rounded-lg bg-gray-200  items-center justify-center px-5 w-[85%] ' 
                        name="Email" 
                        placeholder='Email' 
                        id="Email">
                    </textarea>

                    <div className="my-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Choose a Service
                        </label>
                        <select
                            className=" p-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[85%]"
                            value={selected}
                            onChange={e => setSelected(e.target.value)}
                        >
                            <option value="">Select a service</option>
                            {services.map(service => (
                            <option key={service} value={service}>
                                {service}
                            </option>
                            ))}
                        </select>
                        </div>
                        

                    <h1 className="block mb-2 text-sm font-medium text-gray-700">Message</h1>
                    {/* <textarea className='border border-gray-400 rounded-lg bg-gray-200 items-center justify-center px-5 w-[85%] ' 
                        name="Message" 
                        placeholder='Message' 
                        id="Msg">
                    </textarea> */}

                    <textarea className='border border-gray-400 rounded-lg bg-gray-200 items-center justify-center px-5 w-[85%]' 
                        name="Message" 
                        id="Message" 
                        cols="30"
                        placeholder='Message'
                        >
                    </textarea>

                </div>
            
        </div>
        
    </section>
    </div>
  )
}

export default ContactUs
