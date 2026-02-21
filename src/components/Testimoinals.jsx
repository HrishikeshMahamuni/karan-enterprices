import React from 'react'
import {Star} from 'lucide-react'
import profileImg from '../assets/Image.png'

import img from '../assets/Image.png'


const Testimoinals = () => {
  return (
     <section className='max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center'>
        {/* Title And Description Section */}
        <div className='flex flex-col items-center justify-center mb-10 text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-5 '>
                Our Customer Reviews & Rating
            </h1>
            <p className='text-xl sm:text-2xl md:text-3xl flex  text-orange-700 font-semibold w-100'>
                What Our Client Says
            </p>
        </div>
        <div className='flex gap-5'>
        <div className='h-70 w-100 border border-gray-300 rounded-4xl p-5'>
            <div className='flex items-center'>
                {/* image Section */}
                <div> 
                    <img src={profileImg} className='h-18 rounded-full' alt="ProfileImg" />
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-lg font-semibold'>Amardeep</h1>
                    <p className='italic text-gray-600 '>15 Dec 2022</p>
                </div>
            </div>

            <div className='flex flex-col  space-y-3'>
                <p className='flex gap-2 text-lg text-yellow-400'> 
                    ★★★★★  
                </p>
                <p className='text-gray-600 font-medium'>
                    Karan enterprises waterproofing contractors his very good vendor I have a sum 2 bathroom leakage problem his fix injection treatment for 2 bathroom and successful leakage are stop for within 8 days I ...
                    </p>   
            </div>

        </div>

        <div className='h-70 w-100 border border-gray-300 rounded-4xl p-5'>
            <div className='flex items-center'>
                {/* image Section */}
                <div> 
                    <img src={profileImg} className='h-18 rounded-full' alt="ProfileImg" />
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-lg font-semibold'>Amardeep</h1>
                    <p className='italic text-gray-600 '>15 Dec 2022</p>
                </div>
            </div>

            <div className='flex flex-col  space-y-3'>
                <p className='flex gap-2'> 
                    <Star size={18} className='text-yellow-400' />
                    <Star size={18} className='text-yellow-400'/>
                    <Star size={18} className='text-yellow-400' />
                    <Star size={18} className='text-yellow-400' />
                    <Star size={18} className='text-yellow-400'/>   
                </p>
                <p className='text-gray-600 font-medium'>
                    Karan enterprises waterproofing contractors his very good vendor I have a sum 2 bathroom leakage problem his fix injection treatment for 2 bathroom and successful leakage are stop for within 8 days I ...
                    </p>   
            </div>

        </div>
        </div>
    </section>
  )
}

export default Testimoinals
