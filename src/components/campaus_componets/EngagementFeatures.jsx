'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Smartphone, MapPin, Users } from 'lucide-react';

const features = [
    {
        icon: Target,
        iconColor: 'text-purple-600',
        iconBg: 'bg-purple-100',
        title: 'Lead Generation',
        description: 'Collect qualified student data.',
    },
    {
        icon: Zap,
        iconColor: 'text-pink-600',
        iconBg: 'bg-pink-100',
        title: 'Instant Trials',
        description: 'Drive surging trial app downloads in high deal zones.',
    },
    {
        icon: TrendingUp,
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-100',
        title: 'Brand Recall',
        description: 'Dominate the subconscious of Gen-Z.',
    },
    {
        icon: Smartphone,
        iconColor: 'text-purple-600',
        iconBg: 'bg-purple-100',
        title: 'App Adoption',
        description: 'Convert campus  into digital users ',
    },
    {
        icon: MapPin,
        iconColor: 'text-orange-600',
        iconBg: 'bg-orange-100',
        title: 'Store Footfall',
        description: 'Hyper local discovery.',
    },
    {
        icon: Users,
        iconColor: 'text-cyan-600',
        iconBg: 'bg-cyan-100',
        title: 'Gen-Z Insights',
        description: 'Honest, real-time feedback.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

function EngagementFeatures() {
    return (
        <div className="w-full bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Deep <span className="text-purple-600 italic">Engagement</span>
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                        Beyond simple visibility, we turn offline real estate into trackable conversion funnels for brands.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                            }}
                            className="bg-white border border-slate-200 rounded-2xl p-8 transition-shadow duration-300 hover:border-slate-300"
                        >
                            {/* Icon */}
                            <div className={`${feature.iconBg} ${feature.iconColor} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
                                <feature.icon size={24} strokeWidth={2} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default EngagementFeatures;