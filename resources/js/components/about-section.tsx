import React from 'react';

export function AboutSection() {
    return (
        <section id="about" className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                        🎯 About Us
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
                        We are passionate professionals dedicated to delivering exceptional business solutions 
                        that empower companies to achieve their goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-white">
                            Our Mission 🌟
                        </h3>
                        <p className="text-lg text-gray-600 mb-6 dark:text-gray-300">
                            To bridge the gap between ambitious business goals and technological excellence. 
                            We believe every company deserves access to world-class solutions that drive 
                            meaningful growth and lasting success.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <span className="text-green-500 text-xl">✅</span>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Innovation First</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Cutting-edge technology solutions</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-green-500 text-xl">✅</span>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Client-Centric</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Your success is our priority</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-green-500 text-xl">✅</span>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Excellence</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Quality in every detail</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 dark:from-blue-900/20 dark:to-indigo-900/20">
                        <div className="text-center">
                            <div className="text-6xl mb-6">💼</div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 dark:text-white">
                                Why Choose Us?
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                                    <p className="text-gray-600 dark:text-gray-300">Happy Clients</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">99%</div>
                                    <p className="text-gray-600 dark:text-gray-300">Success Rate</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                                    <p className="text-gray-600 dark:text-gray-300">Support</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">15+</div>
                                    <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}