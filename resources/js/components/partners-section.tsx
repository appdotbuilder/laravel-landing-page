import React from 'react';

export function PartnersSection() {
    const partners = [
        { name: "TechCorp", logo: "🏢", description: "Enterprise Solutions" },
        { name: "InnovateHub", logo: "💡", description: "Startup Incubator" },
        { name: "CloudFirst", logo: "☁️", description: "Cloud Services" },
        { name: "DataDrive", logo: "📊", description: "Analytics Platform" },
        { name: "SecureNet", logo: "🛡️", description: "Cybersecurity" },
        { name: "MobileTech", logo: "📱", description: "Mobile Solutions" },
    ];

    const testimonials = [
        {
            quote: "CorpLanding transformed our business with their innovative solutions. The team's expertise and dedication exceeded our expectations.",
            author: "Sarah Johnson",
            company: "TechCorp",
            role: "CEO",
            avatar: "👩‍💼"
        },
        {
            quote: "Working with CorpLanding was a game-changer. They delivered a robust platform that scaled with our rapid growth.",
            author: "Michael Chen",
            company: "InnovateHub",
            role: "CTO",
            avatar: "👨‍💻"
        },
        {
            quote: "The cloud migration project was executed flawlessly. Our performance improved by 300% while reducing costs.",
            author: "Emily Rodriguez",
            company: "CloudFirst",
            role: "Tech Director",
            avatar: "👩‍🔧"
        }
    ];

    return (
        <section id="partners" className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Partners Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                        🤝 Our Partners
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 dark:text-gray-300">
                        Trusted by leading companies across various industries
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 dark:bg-gray-900 dark:border dark:border-gray-700"
                            >
                                <div className="text-center">
                                    <div className="text-4xl mb-3">{partner.logo}</div>
                                    <h3 className="font-semibold text-gray-900 mb-1 dark:text-white">
                                        {partner.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {partner.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 dark:text-white">
                            💬 What Our Clients Say
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Real feedback from real businesses
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-900 dark:border dark:border-gray-700"
                            >
                                <div className="flex items-start space-x-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl">⭐</span>
                                    ))}
                                </div>
                                
                                <blockquote className="text-gray-700 mb-6 italic leading-relaxed dark:text-gray-300">
                                    "{testimonial.quote}"
                                </blockquote>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="text-3xl">{testimonial.avatar}</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">
                                            {testimonial.author}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {testimonial.role} at {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">
                        🎯 Ready to Join Our Success Stories?
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                        Let's discuss how we can help transform your business
                    </p>
                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg shadow-lg"
                    >
                        🚀 Start Your Project
                    </button>
                </div>
            </div>
        </section>
    );
}