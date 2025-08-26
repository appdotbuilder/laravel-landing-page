import React from 'react';

export function ServicesSection() {
    const services = [
        {
            title: "Web Development",
            description: "Custom web applications built with modern frameworks like Laravel, React, and Vue.js",
            icon: "🌐",
            features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure Architecture"]
        },
        {
            title: "Mobile Apps",
            description: "Native and cross-platform mobile applications for iOS and Android",
            icon: "📱",
            features: ["React Native", "Flutter", "Native iOS/Android", "App Store Publishing"]
        },
        {
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and migration services",
            icon: "☁️",
            features: ["AWS/Azure Setup", "Auto Scaling", "Backup Solutions", "Security Monitoring"]
        },
        {
            title: "Digital Strategy",
            description: "Comprehensive digital transformation and business strategy consulting",
            icon: "💡",
            features: ["Technology Audit", "Growth Planning", "Process Optimization", "Team Training"]
        },
        {
            title: "E-commerce",
            description: "Complete e-commerce solutions with payment integration and inventory management",
            icon: "🛒",
            features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics Dashboard"]
        },
        {
            title: "API Development",
            description: "RESTful APIs and third-party integrations for seamless connectivity",
            icon: "🔗",
            features: ["REST APIs", "GraphQL", "Webhooks", "Documentation"]
        }
    ];

    return (
        <section id="services" className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                        ⚙️ Our Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
                        Comprehensive solutions designed to accelerate your business growth and 
                        digital transformation journey
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                        >
                            <div className="text-center mb-6">
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {service.description}
                                </p>
                            </div>
                            
                            <div className="space-y-3">
                                {service.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center space-x-3">
                                        <span className="text-green-500 text-sm">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Service Process */}
                <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-8 dark:from-blue-900/20 dark:to-indigo-900/20">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">
                            🚀 Our Process
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            How we deliver exceptional results
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                                1️⃣
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2 dark:text-white">Discovery</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Understanding your needs</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                                2️⃣
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2 dark:text-white">Planning</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Strategic approach</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                                3️⃣
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2 dark:text-white">Development</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Building your solution</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                                4️⃣
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2 dark:text-white">Launch</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Going live with support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}