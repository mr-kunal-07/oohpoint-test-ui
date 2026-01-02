"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const stats = [
    {
        value: 24,
        suffix: '+',
        label: 'Cities',
    },
    {
        value: 50,
        suffix: 'K+',
        label: 'Display',
    },
    {
        value: 3,
        suffix: 'M+',
        label: 'Audience',
    },
    {
        value: 86,
        suffix: '%',
        label: 'Market',
    },
];

function AnimatedCounter({ value, suffix }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on('change', (latest) => {
            setDisplayValue(Math.floor(latest));
        });
        return unsubscribe;
    }, [springValue]);

    return (
        <div ref={ref} className="text-4xl font-bold text-white">
            {displayValue}
            <span className="text-3xl md:text-4xl">{suffix}</span>
        </div>
    );
}

function StatsComponent() {
    return (
        <div className="w-full  py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 rounded-3xl p-8 md:p-12 shadow-2xl"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-700">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                className="flex items-center justify-center gap-4 pt-8 sm:pt-0 first:pt-0"
                            >
                                <div className="text-left">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    <div className="text-slate-400 text-lg md:text-xl mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default StatsComponent;