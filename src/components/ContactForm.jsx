import React , { useRef } from 'react'
import emailjs from '@emailjs/browser';
import {Mail, Phone} from 'lucide-react'
import { motion } from 'framer-motion'
import { scale} from '../Utils/motion'

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_06pl1ay', 'template_szw5wvx', form.current, {
        publicKey: 'v6lOIxuky17ZjN7Nz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent successfully!");
        },
        (error) => {
            alert("Failed to send message.");
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
   
    <section className="bg-gray-50 py-20 px-6 mt-15">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm tracking-widest text-gray-500 mb-4">
            WE ARE HERE TO HELP YOU
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
            {/* Discuss Your <br /> Chemical <br /> Solution Needs */}
            Professional <br /> WaterProofing and Renovation Services
          </h2>

          <p className="text-gray-600 mb-8 max-w-md">
            {/* Are you looking for top-quality chemical solutions tailored to your
            needs? Reach out to us. */}
            Are You Looking For High Quality Service Provider For Water Proofing
            And Home, Office Renovation
          </p>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                <Mail/>
              </div>
              <div>
                <p className="text-sm text-gray-500">E-mail</p>
                <p className="font-medium">kiranenterprices@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                <Phone/>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone number</p>
                <p className="font-medium">+91 9322553116</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <motion.div 
             variants={scale(0.5)}
              initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
         className="bg-white p-8 rounded-2xl shadow-lg">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            
            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full h-12 px-4 mt-2 border border-gray-200 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full h-12 px-4 mt-2 border border-gray-200 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="text-sm text-gray-600">Industry</label>
              <select
                name='service' required
                className="w-full h-12 px-4 mt-2 border border-gray-200 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={""} >Select...</option>
                <option value={"Renovation"} >Renovation</option>
                <option value={"Waterproofing"}>Waterproofing</option>
                <option value={"Paintiing"}>Painting</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                placeholder="Type your message"
                name="message"
                className="w-full h-28 p-4 mt-2 border border-gray-200 rounded-lg 
                resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Button */}
            
            <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white 
            py-3 rounded-full flex items-center justify-center gap-2 transition">
                <input type="submit" value="Send" />
              ➜ Get a Solution
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
 

export default ContactForm
