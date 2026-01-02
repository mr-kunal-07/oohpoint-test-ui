"use client";
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Image, X, Check, Shield, Sparkles } from 'lucide-react';

// Reusable Card Component
const InventoryCard = ({ badge, badgeColor, title, image, specs, onRequest }) => {
    const cardRef = useRef(null);
    const inView = useInView(cardRef, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
            <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-bold uppercase tracking-wide ${badgeColor}`}>
                    {badge}
                </span>
                {badge.includes('DIGITAL') ? (
                    <Monitor className="w-5 h-5 text-gray-400" aria-hidden="true" />
                ) : (
                    <Image className="w-5 h-5 text-gray-400" aria-hidden="true" />
                )}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>

            <div className={`rounded-2xl p-12 mb-6 flex items-center justify-center min-h-[280px] ${image.bg}`}>
                <span className="text-gray-400 text-sm">{image.placeholder}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                {specs.map((spec, idx) => (
                    <div key={idx}>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{spec.label}</p>
                        <p className="text-sm font-semibold text-gray-900">{spec.value}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={onRequest}
                className="w-full bg-gray-900 text-white py-4 rounded-full font-bold hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-gray-300 focus:outline-none"
                aria-label={`Request availability for ${title}`}
            >
                Request Availability
            </button>
        </motion.div>
    );
};

// Reusable Input Component
const Input = ({ label, placeholder, value, onChange, type = "text", required = false, error = "" }) => (
    <div className="space-y-2">
        <label className="block text-sm font-bold text-gray-500 uppercase tracking-wide">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${label}-error` : undefined}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${error ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-indigo-500'
                }`}
        />
        {error && (
            <p id={`${label}-error`} className="text-sm text-red-500 mt-1">
                {error}
            </p>
        )}
    </div>
);

// Reusable Selection Card
const SelectionCard = ({ title, description, icon, selected, onClick }) => (
    <motion.button
        onClick={onClick}
        className={`w-full p-6 rounded-2xl border-2 text-left transition-all ${selected
            ? 'border-indigo-500 bg-indigo-50'
            : 'border-gray-200 hover:border-gray-300'
            }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-pressed={selected}
        role="radio"
    >
        <div className="flex items-start justify-between">
            <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
            <div className="flex items-center gap-2">
                {icon}
                {selected && <Check className="w-5 h-5 text-indigo-600" aria-hidden="true" />}
            </div>
        </div>
    </motion.button>
);

// Progress Indicator Component
const ProgressIndicator = ({ currentStep, totalSteps }) => (
    <div className="flex items-center gap-2 mb-6">
        {Array.from({ length: totalSteps }).map((_, idx) => (
            <div key={idx} className="flex items-center flex-1">
                <div
                    className={`h-2 rounded-full transition-all duration-300 flex-1 ${idx + 1 <= currentStep ? 'bg-indigo-600' : 'bg-gray-200'
                        }`}
                />
            </div>
        ))}
    </div>
);

// Main Application Component
const CampusFootprintSystem = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        brandName: '',
        strategy: '',
        colleges: 5,
        engagements: ''
    });

    // Inventory Data
    const inventoryItems = [
        {
            badge: 'PREMIUM DIGITAL',
            badgeColor: 'text-indigo-600',
            title: 'Digital LED Frames',
            image: { bg: 'bg-gray-900', placeholder: 'CONTENT PREVIEW' },
            specs: [
                { label: 'STANDARD SIZES', value: 'A3 / A0 Portrait' },
                { label: 'BEST SUITED', value: 'Lobby & Lounges' }
            ]
        },
        {
            badge: 'HIGH RECALL',
            badgeColor: 'text-red-500',
            title: 'Static Canteen Frames',
            image: { bg: 'bg-indigo-50', placeholder: 'Reflective QR Enabled High-Dwell Static Frame' },
            specs: [
                { label: 'FORMAT', value: 'A3 Landscape/Port' },
                { label: 'DWELL TIME', value: '15-30 Minutes' }
            ]
        }
    ];

    // Validation functions
    const validateStep1 = () => {
        const newErrors = {};
        if (!formData.brandName.trim()) {
            newErrors.brandName = 'Brand name is required';
        }
        if (!formData.strategy) {
            newErrors.strategy = 'Please select a campaign strategy';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};
        if (!formData.engagements || formData.engagements <= 0) {
            newErrors.engagements = 'Please enter a valid number of engagements';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (currentStep === 1 && validateStep1()) {
            setCurrentStep(2);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            setErrors({});
        }
    };

    const handleSubmit = async () => {
        if (validateStep2()) {
            setIsSubmitting(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSubmitting(false);
            setCurrentStep(3);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentStep(1);
        setFormData({
            brandName: '',
            strategy: '',
            colleges: 5,
            engagements: ''
        });
        setErrors({});
        setIsSubmitting(false);
    };

    // Keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === 'Escape' && showModal) {
            handleCloseModal();
        }
    };

    return (
        <div className=" bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100">
            {/* Inventory Section */}
            <section className="py-12 px-4 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Tangible Inventory
                        </h2>
                        <p className="text-gray-600">
                            Curated placements in the heart of student activity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {inventoryItems.map((item, idx) => (
                            <InventoryCard
                                key={idx}
                                {...item}
                                onRequest={() => setShowModal(true)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
                    onClick={(e) => e.target === e.currentTarget && handleCloseModal()}
                    onKeyDown={handleKeyDown}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                    >
                        {/* Left Sidebar */}
                        <div className="bg-indigo-600 p-8 md:w-1/3 text-white relative">
                            <div className="bg-white/20 rounded-2xl w-16 h-16 flex items-center justify-center mb-8">
                                <Sparkles className="w-8 h-8" aria-hidden="true" />
                            </div>

                            <h2 id="modal-title" className="text-3xl md:text-4xl font-bold mb-4">
                                Plan Your Campus Footprint.
                            </h2>

                            <p className="text-indigo-100 mb-8">
                                Let's build a campaign that actually converts.
                            </p>

                            <div className="flex items-center gap-2 text-indigo-100">
                                <Shield className="w-5 h-5" aria-hidden="true" />
                                <span className="text-sm font-semibold uppercase tracking-wide">
                                    Admin Verified
                                </span>
                            </div>

                            {/* Progress Indicator - Desktop */}
                            <div className="hidden md:block mt-12">
                                <div className="space-y-4">
                                    <div className={`flex items-center gap-3 ${currentStep >= 1 ? 'text-white' : 'text-indigo-300'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 1 ? 'bg-white text-indigo-600' : 'bg-indigo-500'
                                            }`}>
                                            {currentStep > 1 ? <Check className="w-5 h-5" /> : '1'}
                                        </div>
                                        <span className="text-sm font-semibold">Campaign Basics</span>
                                    </div>
                                    <div className={`flex items-center gap-3 ${currentStep >= 2 ? 'text-white' : 'text-indigo-300'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 2 ? 'bg-white text-indigo-600' : 'bg-indigo-500'
                                            }`}>
                                            {currentStep > 2 ? <Check className="w-5 h-5" /> : '2'}
                                        </div>
                                        <span className="text-sm font-semibold">Scale & Goals</span>
                                    </div>
                                    <div className={`flex items-center gap-3 ${currentStep >= 3 ? 'text-white' : 'text-indigo-300'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep >= 3 ? 'bg-white text-indigo-600' : 'bg-indigo-500'
                                            }`}>
                                            3
                                        </div>
                                        <span className="text-sm font-semibold">Confirmation</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="p-8 md:w-2/3 overflow-y-auto relative">
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg p-1"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Progress Indicator - Mobile */}
                            <div className="md:hidden mb-6">
                                <ProgressIndicator currentStep={currentStep} totalSteps={3} />
                            </div>

                            {/* Step 1: Campaign Basics */}
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900">Campaign Basics</h3>

                                    <Input
                                        label="Brand Name"
                                        placeholder="e.g. Fintech Pro"
                                        value={formData.brandName}
                                        onChange={(e) => {
                                            setFormData({ ...formData, brandName: e.target.value });
                                            setErrors({ ...errors, brandName: '' });
                                        }}
                                        required
                                        error={errors.brandName}
                                    />

                                    <div className="space-y-3">
                                        <label className="block text-sm font-bold text-gray-500 uppercase tracking-wide">
                                            Select Campaign Strategy <span className="text-red-500">*</span>
                                        </label>
                                        {errors.strategy && (
                                            <p className="text-sm text-red-500">{errors.strategy}</p>
                                        )}

                                        <div role="radiogroup" aria-label="Campaign strategy">
                                            <SelectionCard
                                                title="Static Visibility"
                                                description="Traditional A3 frames for high-recall visibility."
                                                selected={formData.strategy === 'static'}
                                                onClick={() => {
                                                    setFormData({ ...formData, strategy: 'static' });
                                                    setErrors({ ...errors, strategy: '' });
                                                }}
                                            />

                                            <div className="mt-3">
                                                <SelectionCard
                                                    title="Oohpoint Engagement"
                                                    description="Assured interactions & tech-driven offline attribution."
                                                    icon={<Sparkles className="w-5 h-5 text-indigo-600" aria-hidden="true" />}
                                                    selected={formData.strategy === 'oohpoint'}
                                                    onClick={() => {
                                                        setFormData({ ...formData, strategy: 'oohpoint' });
                                                        setErrors({ ...errors, strategy: '' });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleNext}
                                        className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-indigo-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        Next Step
                                    </button>
                                </motion.div>
                            )}

                            {/* Step 2: Scale & Goals */}
                            {currentStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-2xl font-bold text-gray-900">Scale & Goals</h3>

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center mb-2">
                                            <label
                                                htmlFor="colleges-range"
                                                className="text-sm font-bold text-gray-500 uppercase tracking-wide"
                                            >
                                                Number of Colleges
                                            </label>
                                            <span className="text-indigo-600 font-bold">{formData.colleges} Colleges</span>
                                        </div>
                                        <input
                                            id="colleges-range"
                                            type="range"
                                            min="1"
                                            max="20"
                                            value={formData.colleges}
                                            onChange={(e) => setFormData({ ...formData, colleges: e.target.value })}
                                            className="w-full accent-indigo-600 h-2 rounded-lg appearance-none cursor-pointer"
                                            aria-label="Number of colleges"
                                            aria-valuemin="1"
                                            aria-valuemax="20"
                                            aria-valuenow={formData.colleges}
                                        />
                                        <p className="text-xs text-gray-500">Est. {formData.colleges * 5} total inventory units ({5} per campus)</p>
                                    </div>

                                    <Input
                                        label="Target Engagements"
                                        placeholder="e.g. 5000"
                                        type="number"
                                        value={formData.engagements}
                                        onChange={(e) => {
                                            setFormData({ ...formData, engagements: e.target.value });
                                            setErrors({ ...errors, engagements: '' });
                                        }}
                                        required
                                        error={errors.engagements}
                                    />

                                    <div className="flex gap-3">
                                        <button
                                            onClick={handleBack}
                                            className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-300 transition-all transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-gray-300 focus:outline-none"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className="flex-1 bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-indigo-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Submitting...
                                                </>
                                            ) : (
                                                'Submit Plan'
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Success */}
                            {currentStep === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', duration: 0.5, delay: 0.2 }}
                                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                    >
                                        <Check className="w-10 h-10 text-green-600" aria-hidden="true" />
                                    </motion.div>

                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Plan Received!</h3>
                                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                        Our campus experts will analyze your footprint and get back to you with a detailed inventory map within 24 hours.
                                    </p>

                                    <button
                                        onClick={handleCloseModal}
                                        className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95 focus:ring-4 focus:ring-gray-300 focus:outline-none"
                                    >
                                        Back to Website
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default CampusFootprintSystem;