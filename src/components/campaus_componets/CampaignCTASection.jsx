"use client";
import React from 'react';
import { Download, Phone } from 'lucide-react';

const CampaignCTASection = () => {
    const handleTalkToExpert = () => {
        console.log('Talk to Expert clicked');
        // Add your logic here (e.g., open modal, redirect, etc.)
    };

    const handleDownloadKit = () => {
        console.log('Download Media Kit clicked');
        // Add your logic here (e.g., trigger download)
    };

    return (
        <div className=" bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl">
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 rounded-3xl p-12 md:p-16 shadow-2xl">
                    {/* Main Content */}
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            Let's Plan Your First{' '}
                            <span className="text-indigo-400 italic">Campaign.</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
                            Relevant campuses, inventory, and engagement formats are
                            <br className="hidden md:block" />
                            just a discovery call away.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={handleTalkToExpert}
                                className="group relative bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-400 w-full sm:w-auto"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Phone className="w-5 h-5" />
                                    Talk to an Expert
                                </span>
                            </button>

                            <button
                                onClick={handleDownloadKit}
                                className="group relative bg-slate-700 hover:bg-slate-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-slate-500 w-full sm:w-auto"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Download className="w-5 h-5" />
                                    Download Media Kit
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignCTASection;
