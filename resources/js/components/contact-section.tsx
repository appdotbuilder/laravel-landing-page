import React from 'react';
import { useForm } from '@inertiajs/react';

export function ContactSection() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('contact.store'), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const contactInfo = [
        { icon: "📧", title: "Email", value: "hello@corplanding.com", link: "mailto:hello@corplanding.com" },
        { icon: "📞", title: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
        { icon: "📍", title: "Address", value: "123 Business Ave, Tech City, TC 12345", link: null },
        { icon: "🕒", title: "Hours", value: "Mon-Fri: 9AM-6PM PST", link: null },
    ];

    return (
        <section id="contact" className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                        📞 Contact Us
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
                        Ready to start your project? Get in touch with our team for a free consultation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-50 rounded-xl p-8 dark:bg-gray-800">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-white">
                            💬 Send us a message
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        placeholder="Your full name"
                                        required
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                    )}
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        placeholder="your.email@company.com"
                                        required
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                                    )}
                                </div>
                                
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        value={data.company}
                                        onChange={(e) => setData('company', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        placeholder="Your company name"
                                    />
                                    {errors.company && (
                                        <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                                    )}
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                )}
                            </div>
                            
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full px-6 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processing ? '📤 Sending...' : '🚀 Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-white">
                            📍 Get in Touch
                        </h3>
                        
                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="text-2xl">{info.icon}</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">
                                            {info.title}
                                        </h4>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="text-blue-600 hover:text-blue-700 transition-colors duration-200 dark:text-blue-400 dark:hover:text-blue-300"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg p-8 text-center dark:from-blue-900/30 dark:to-indigo-900/30">
                            <div className="text-6xl mb-4">🗺️</div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">
                                Visit Our Office
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Located in the heart of Tech City's business district
                            </p>
                            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
                                📍 View on Maps
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">
                                🌐 Follow Us
                            </h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-2xl hover:scale-110 transition-transform duration-200">
                                    📘
                                </a>
                                <a href="#" className="text-2xl hover:scale-110 transition-transform duration-200">
                                    🐦
                                </a>
                                <a href="#" className="text-2xl hover:scale-110 transition-transform duration-200">
                                    📷
                                </a>
                                <a href="#" className="text-2xl hover:scale-110 transition-transform duration-200">
                                    💼
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}