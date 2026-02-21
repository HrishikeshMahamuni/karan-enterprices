import React, { useRef, useState } from 'react';
import {ChevronRight, ChevronLeft, Star} from 'lucide-react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../Utils/Reviews'
import img from '../assets/Image.png'
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Reviews = () => {
  return (
    <div className='w-full bg-gray-50 '>
   <section id='testimonials' className='py-12  px-4 sm:px-8 lg:px-8 mt-12  max-w-7xl mx-auto'>
        <div className='flex flex-col items-center justify-center space-y-3 mb-12'>
            <h3 className='text-5xl font-bold text-blue-900 '>
                Testimonials
            </h3>
            <p className='text-2xl text-center text-orange-700 font-semibold w-100'>
                What Our Client Say's
            </p>
        </div>

        <div>

              {/* Swiper Card For Review */}
        <div className='relative'>
        <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              pagination={{
                clickable: true,
              }}
              navigation={
                {
                  nextEl:'.swiper-button-next-custom',
                  prevEl:'.swiper-button-prev-custom',
                }
              }
              spaceBetween={30}
              
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3, 
                }
              }}
              
              modules={[Navigation]}
              className="testimonial-swiper md:mb-12">

                {
                  data.map((testi, index) => (
                        <SwiperSlide key={index} className='h-full md:py-12 px-4'>
                            <div className='text-center flex flex-col bg-white p-4 rounded-lg shadow-md h-full hover:shadow-lg hover:scale-105 duration-300'>
                                <div className='w-24 h-24 mx-auto mb-4 '>
                                    <img src={img}
                                        className='w-full h-full object-cover rounded-full'
                                        alt="" />
                                </div>
                               
                                <div className='flex justify-center mb-2'>
                                    <span className='text-yellow-500'>★★★★★</span>
                                </div>
                                <div className='space-y-2'>
                                    <h3 className='text-xl font-semibold mb-2'>{testi.name}</h3>
                                    <p className='text-sm text-gray-600 italic'>{testi.date}</p>
                                    <p className='text-gray-600 italic text-sm px-3'>"{testi.review}"</p>
                                </div>
                                
                            </div>

                        </SwiperSlide>
                  ))
                }
                    
                   
        </Swiper>

                  <div className='flex items-center justify-center mt-8 gap-10'>
                    
                    <button className='swiper-button-prev-custom h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer'
                    >
                        <ChevronLeft />
                    </button>

                      <button className='swiper-button-next-custom h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer'>
                        <ChevronRight className='size-6 ' />
                      </button>
                  </div>
    
              </div>
        </div>
      
    </section>
    </div>
  )
}

export default Reviews
