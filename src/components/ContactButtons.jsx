import React from 'react'
import { Phone, MessageCircle } from "lucide-react";

// Configure contact details here
const phoneNumber = '919322553116';
const whatsappMessage = 'Hello, I would like to inquire about your waterproofing services.';


const ContactButtons = () => {
  return (
    <div>
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      
      {/* Call Button */}
      <div className="group relative">
        <span className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">
          Call Now
        </span>

        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white shadow-lg hover:scale-110 transition animate-pulse"
        >
          <Phone size={22} />
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="group relative">
        <span className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">
          Chat on WhatsApp
        </span>

        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition"
        >
          <MessageCircle size={22} />
        </a>
      </div>
    </div>
    </div>
  )
}

export default ContactButtons
