import React from 'react'
import { motion } from 'framer-motion'
import { scale} from '../Utils/motion'

const CTA = () => {
    return (
        <div className="w-full mt-10 px-4 py-6">
            <motion.div 
             variants={scale(0.5)}
              initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto bg-blue-900 pb-4 px-4  sm:px-6 py-6 md:py-18 md:px-12 mb-24 rounded-4xl shadow-2xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                    <div className="w-full md:w-1/2 space-y-3 text-center md:text-left mb-6 md:mb-0">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-2xl">
                            Get Your Leakage Fixed By Experienced Professional's
                        </h1>
                        <p className="text-white font-light text-base sm:text-lg md:text-xl">
                            Call Now For Free inspection
                        </p>
                    </div>
                    <div className="w-full md:w-auto flex flex-col items-center text-center md:space-y-2">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Call Now On</h1>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300">9322553116</p>
                    </div>
                </div>
            </motion.div>
        </div>
  )
}

export default CTA
