import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

interface LandingHeaderProps {
    auth: {
        user?: {
            name: string;
            email: string;
        };
    };
}

export function LandingHeader({ auth }: LandingHeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigationItems = [
        { name: 'Home', href: '#hero', icon: '🏠' },
        { name: 'Profile', href: '#about', icon: '👤' },
        { name: 'Service', href: '#services', icon: '⚙️' },
        { name: 'Gallery', href: '#partners', icon: '🖼️' },
        { name: 'Contact', href: '#contact', icon: '📞' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-2xl">🏢</span>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                CorpLanding
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-400"
                            >
                                <span>{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                            </button>
                        ))}
                    </nav>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium dark:text-gray-300 dark:hover:text-blue-400"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        >
                            <span className="text-xl">
                                {isMobileMenuOpen ? '✕' : '☰'}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="flex items-center space-x-3 w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                                >
                                    <span>{item.icon}</span>
                                    <span className="font-medium">{item.name}</span>
                                </button>
                            ))}
                            <div className="border-t border-gray-200 pt-4 mt-4 dark:border-gray-700">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium text-center"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <div className="space-y-2">
                                        <Link
                                            href={route('login')}
                                            className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-center dark:text-gray-300 dark:hover:text-blue-400"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium text-center"
                                        >
                                            Get Started
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}