import { ArrowRight } from "lucide-react";

export default function CampusHero() {
    return (
        <div className="h-fit py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 flex items-center justify-center ">
            <div className="max-w-7xl mx-auto text-center">
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100 mb-8">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        Premium Campus Network
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
                    Campus Presence.
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600">
                        Digital Precision.
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xs md:text-md text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Helping brands engage students inside colleges with measurable, tech-driven interactions. Admin-approved, high-impact, and fully attributable.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-4 justify-center items-center">
                    <button className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                        Get Started
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <button className="bg-white hover:bg-slate-50 text-slate-900 font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200">
                        See Inventory
                    </button>
                </div>
            </div>
        </div>
    );
}