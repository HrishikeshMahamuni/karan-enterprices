import React from 'react'
import logo from '../assets/CompanyLogo.webp'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {

    const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

  return (
    <footer className='bg-gray-100' >
       <div className='container mx-auto px-4 py-16 sm:px-6 lg:px-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
                {/* Brand Column */}
                <div className='lg:col-span-4'>
                    <div className='flex gap-1 items-center mb-6'>
                        {/* <div className='flex items-center cursor-pointer'>
                                <div className='opacity-75 hover:opacity-100 transition-opacity'>
                                            <img 
                                            className='h-16'
                                            src={logo} alt="" />
                                          </div>
                            {/* <div className='h-4 w-4 rounded-full bg-red-500 opacity-75 hover:opacity-100 transition-opacity'></div>
                            <div className='h-4 w-4 rounded-full bg-blue-500 -ml-2 opacity-75 hover:opacity-100 transition-opacity'></div> }
                        </div> */}
                        <span className='text-xl font-medium gap-4'>Karan Enterprices</span>
                    </div>

                    <p className='text-gray-500 mt-6 mb-6'>Expert waterproofing & painting services for homes and buildings. Free inspection. Affordable pricing. Call now.</p>

                    <div className='flex gap-4'>
                        <a href="#" className='h-10 w-10 bg-gray-200 text-gray-600  hover:text-blue-500 hover:bg-gray-500 rounded-full flex items-center justify-center'>
                            <FaFacebook className='size-5'/>
                        </a>

                        <a href="#" className='h-10 w-10 bg-gray-200 text-gray-600  hover:text-blue-500 hover:bg-gray-500 rounded-full flex items-center justify-center'>
                            <FaTwitter className='size-5'/>
                        </a>

                        <a href="#" className='h-10 w-10 bg-gray-200 text-gray-600  hover:text-blue-500 hover:bg-gray-500 rounded-full flex items-center justify-center'>
                            <FaInstagram className='size-5'/>
                        </a>
                    </div>

                </div>

                {/* Footer navigation */}
                <div className='lg:col-span-8'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {
                            Object.entries(footerLinks).map(([Category, link], index)=>(
                                    <div key={index}>
                                        <h3 className='text-lg font-medium mb-4 capitalize'>{Category}</h3>
                                        <ul >
                                           {
                                             link.map((li, index)=> (
                                                <li key={index} className='mb-3'>
                                                    <a href={li.href} className='text-gray-500 hover:text-gray-900'>{li.name}</a>
                                                </li>
                                             ))
                                             
                                           }
                                        </ul>
                                    </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>

            <div className='border border-gray-200 mt-4'></div>

            <div className='flex justify-between mb-5 mt-4 text-gray-500 text-sm'>
                <p>Copyright © 2026 codetutorbd.com</p>
                <p>Created by Hrishikesh Mahamuni</p>
            </div>
       </div>
        
    </footer>
  )
}

export default Footer
