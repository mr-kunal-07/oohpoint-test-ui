"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Target, Workflow, Package } from 'lucide-react';

const NavLink = ({ children, href, icon: Icon, active }) => (
    <Link href={href} className={`flex items-center gap-2 font-medium transition-colors ${active ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}>
        {Icon && <Icon size={18} />}
        {children}
    </Link>
);

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { label: 'Outcomes', href: '/outcomes', icon: Target },
        { label: 'Process', href: '/process', icon: Workflow },
        { label: 'Inventory', href: '/inventory', icon: Package }
    ];

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="flex items-center justify-between px-4 md:px-8 py-3 max-w-7xl mx-auto">
                    <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMenuOpen(false)}>
                        <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                            <span className="text-white italic font-bold text-xl">O!</span>
                        </div>
                        <span className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">Oohpoint</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {links.map(link => (
                            <NavLink key={link.label} href={link.href} icon={link.icon} active={pathname === link.href}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 bg-primary bg-primary-hover text-white rounded-md font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                            Plan a Campaign
                        </button>
                        <button className="md:hidden text-text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <div className={`md:hidden bg-gray-50 border-t transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 py-4 flex flex-col gap-4" onClick={() => setIsMenuOpen(false)}>
                        {links.map(link => (
                            <NavLink key={link.label} href={link.href} icon={link.icon} active={pathname === link.href}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>

            {isMenuOpen && <div className="fixed inset-0 z-40 md:hidden " onClick={() => setIsMenuOpen(false)} />}
        </>
    );
}