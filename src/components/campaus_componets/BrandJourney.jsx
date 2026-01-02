"use client"
import { BarChart3 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const BrandJourney = () => {
    const steps = [
        {
            number: '01',
            title: 'Discovery & Planning',
            description: 'We map your brand goals to the most relevant campuses and inventory formats.'
        },
        {
            number: '02',
            title: 'Creative Onboarding',
            description: 'Admin-approval of content and setting up interactive digital triggers (QR/NFC).'
        },
        {
            number: '03',
            title: 'Live Deployment',
            description: 'Your campaign goes live across selected zones within days, not weeks.'
        },
        {
            number: '04',
            title: 'Data & Insights',
            description: 'Access real-time engagement data and plan digital retargeting for interested users.'
        }
    ];

    // Refs for scroll-based animations
    const headingRef = useRef(null);
    const stepsRef = useRef(null);
    const cardRef = useRef(null);

    // Check if elements are in view
    const headingInView = useInView(headingRef, { once: true, amount: 0.3 });
    const stepsInView = useInView(stepsRef, { once: true, amount: 0.2 });
    const cardInView = useInView(cardRef, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.3
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.8
            }
        }
    };

    const StepItem = ({ number, title, description }) => (
        <motion.div
            variants={itemVariants}
            className="flex gap-4 mb-8 last:mb-0 group"
            whileHover={{ x: 8 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className="group flex gap-4 mb-8 last:mb-0 cursor-pointer"
                whileHover={{ x: 8 }}
            >
                <span className="text-3xl md:text-4xl font-bold text-blue-200 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-200">
                    {number}
                </span>
            </motion.div>

            <div className="pt-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );

    return (
        <div className=" bg-gray-50 p-4 md:p-8 lg:p-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Section */}
                    <div className="space-y-6">
                        <motion.h1
                            ref={headingRef}
                            className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
                            initial={{ opacity: 0, y: -20 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            The 4-Step<br />Brand Journey
                        </motion.h1>

                        <motion.div
                            ref={stepsRef}
                            className="mt-8 lg:mt-12"
                            variants={containerVariants}
                            initial="hidden"
                            animate={stepsInView ? "visible" : "hidden"}
                        >
                            {steps.map((step) => (
                                <StepItem key={step.number} {...step} />
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Section - Card */}
                    <div className="lg:sticky lg:top-8">
                        <motion.div
                            ref={cardRef}
                            className="bg-white rounded-3xl shadow-lg p-6 md:p-8"
                            variants={cardVariants}
                            initial="hidden"
                            animate={cardInView ? "visible" : "hidden"}
                            whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Placeholder bars */}
                            <div className="space-y-3 mb-6">
                                <motion.div
                                    className="h-3 bg-gray-200 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={cardInView ? { width: '75%' } : { width: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                />
                                <motion.div
                                    className="h-3 bg-gray-200 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={cardInView ? { width: '50%' } : { width: 0 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                />
                            </div>

                            {/* Chart Section */}
                            <motion.div
                                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 md:p-16 flex items-center justify-center min-h-[300px]"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    variants={iconVariants}
                                    initial="hidden"
                                    animate={cardInView ? "visible" : "hidden"}
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <BarChart3 className="w-16 h-16 md:w-20 md:h-20 text-blue-400" strokeWidth={1.5} />
                                </motion.div>
                            </motion.div>

                            {/* Bottom placeholder bars */}
                            <div className="space-y-3 mt-6">
                                <motion.div
                                    className="h-3 bg-gray-200 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={cardInView ? { width: '100%' } : { width: 0 }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                />
                                <motion.div
                                    className="h-3 bg-gray-200 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={cardInView ? { width: '83.333333%' } : { width: 0 }}
                                    transition={{ duration: 0.8, delay: 1.1 }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandJourney;