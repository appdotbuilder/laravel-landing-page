import React from 'react';
import { Link } from '@inertiajs/react';

interface HeroSectionProps {
    auth: {
        user?: {
            name: string;
            email: string;
        };
    };
}

export function HeroSection({ auth }: HeroSectionProps) {
    return (
        <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 dark:text-white">
                        🚀 Welcome to{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            CorpLanding
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto dark:text-gray-300">
                        Professional business solutions that drive growth and innovation. 
                        Transform your vision into reality with our comprehensive services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                🎯 Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('register')}
                                    className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    🚀 Get Started Free
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold text-lg"
                                >
                                    👋 Welcome Back
                                </Link>
                            </>
                        )}
                    </div>
                </div>
                
                {/* Hero Image/Mockup */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-2xl p-8 dark:bg-gray-800">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-6 bg-blue-50 rounded-lg dark:bg-blue-900/20">
                                <div className="text-4xl mb-4">📊</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Analytics</h3>
                                <p className="text-gray-600 dark:text-gray-300">Real-time insights</p>
                            </div>
                            <div className="text-center p-6 bg-green-50 rounded-lg dark:bg-green-900/20">
                                <div className="text-4xl mb-4">🛡️</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Security</h3>
                                <p className="text-gray-600 dark:text-gray-300">Enterprise-grade</p>
                            </div>
                            <div className="text-center p-6 bg-purple-50 rounded-lg dark:bg-purple-900/20">
                                <div className="text-4xl mb-4">⚡</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">Performance</h3>
                                <p className="text-gray-600 dark:text-gray-300">Lightning fast</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}