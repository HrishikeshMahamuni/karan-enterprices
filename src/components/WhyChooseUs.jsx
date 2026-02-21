import React from 'react'
import {UsersRound, ShieldCheck, Clock, HandCoins} from 'lucide-react'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer, scale, textVariant } from '../Utils/motion'


const data = [
    {
        icon: ShieldCheck,
        title: "Quality Material Used"
    },
    {
        icon: UsersRound,
        title: "Experienced & Skilled Team"
    },
    {
        icon: Clock,
        title: "On Time Completion"
    },
    {
        icon: HandCoins, 
        title: "Affordable & Tranparent Pricing"
    }
];

const WhyChooseUs = () => {
    return (
        <section className="bg-blue-900 w-full">
            <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300 mb-5 text-center pt-16 sm:pt-24">
                    Why Choose Us ?
                </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
                {/* Left Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
                      <motion.div
                        className="grid grid-cols-2 gap-5 md:w-[70%] sm:w-full"
                        variants={staggerContainer(0.12, 0)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        {data.map((prod, idx) => {
                            const Icon = prod.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className="min-w-30 border border-amber-200 flex flex-col items-center justify-center rounded-2xl space-y-3 p-5"
                                    variants={scale(0)}
                                >
                                    <motion.h3 className="text-center" variants={scale(0)}>
                                        <Icon size={40} className="text-yellow-300" />
                                    </motion.h3>
                                    <motion.p
                                        className="text-base sm:text-lg font-semibold text-white text-center"
                                        variants={slideIn('up', 'tween', 0, 0.4)}
                                    >
                                        {prod.title}
                                    </motion.p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
                {/* Right Section */}
                <div className="w-full md:w-1/2 space-y-6">
                    <div className="space-y-6">
                        <motion.h1
                        variants={textVariant(0.3)}
                                                        initial='hidden'
                                                        whileInView='show'
                         className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300">
                            Sealed Right: Choose Us For Superior Service
                        </motion.h1>
                        <div className="space-y-3">
                            <motion.h3
                            variants={textVariant(0.4)}
                                                            initial='hidden'
                                                            whileInView='show'
                             className="text-white text-base sm:text-lg font-semibold">
                                Choose Karan Enterprices for unparalleled craftsmanship, dedicated service, and peace of mind.
                            </motion.h3>

                            <motion.p 
                                variants={textVariant(0.5)}
                                                                initial='hidden'
                                                                whileInView='show'
                            className="text-white text-sm sm:text-base md:text-lg font-medium">
                                Whether you're dealing with stubborn leakages, damp walls, or need complete structural waterproofing, we're here to provide reliable, efficient, and long-lasting solutions. At Karan Enterprices, customer satisfaction is our top priority, and we take pride in protecting your spaces with precision, expertise, and care.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default WhyChooseUs
