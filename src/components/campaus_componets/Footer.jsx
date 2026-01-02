import React from 'react';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 pt-12 ">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-indigo-600 text-white font-bold text-xl px-3 py-1 rounded-lg">
                                O!
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Oohpoint</h3>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            We're committed to helping you succeed with campus and Gen Z audiences.
                            Every interaction is verified, attributable, and measurable.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-50 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                aria-label="Website"
                            >
                                <Globe className="w-5 h-5 text-gray-600" />
                            </a>
                        </div>
                    </div>

                    {/* Connect Section */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                            Connect
                        </h4>

                        <div className="space-y-4">
                            <a
                                href="https://twitter.com/oohpoint"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-indigo-50 flex items-center justify-center transition-colors">
                                    <span className="text-lg">𝕏</span>
                                </div>
                                <span className="font-medium">@oohpoint</span>
                            </a>

                            <a
                                href="mailto:info@oohpoint.com"
                                className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-indigo-50 flex items-center justify-center transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="font-medium">info@oohpoint.com</span>
                            </a>

                            <a
                                href="tel:+917304627090"
                                className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-indigo-50 flex items-center justify-center transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="font-medium">+91 7304627090</span>
                            </a>
                        </div>
                    </div>

                    {/* Company Section */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                            Company
                        </h4>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-gray-600">
                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="font-medium mt-2">Mumbai, MH, India</span>
                            </div>

                            <div className="space-y-3 mt-6">
                                <a
                                    href="#"
                                    className="block text-gray-600 hover:text-indigo-600 font-medium transition-colors"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-600 hover:text-indigo-600 font-medium transition-colors"
                                >
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-3 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 uppercase tracking-wide">
                        © 2024 Oohpoint Media. All Rights Reserved.
                    </p>

                    <a
                        href="#"
                        className="text-sm font-bold text-indigo-600 hover:text-indigo-700 uppercase tracking-wide transition-colors"
                    >
                        Supported by MSSU I-SPARK
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;