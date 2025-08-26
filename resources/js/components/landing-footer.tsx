import React from 'react';

export function LandingFooter() {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Company",
            links: [
                { name: "About Us", href: "#about" },
                { name: "Our Team", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Press", href: "#" },
            ]
        },
        {
            title: "Services",
            links: [
                { name: "Web Development", href: "#services" },
                { name: "Mobile Apps", href: "#services" },
                { name: "Cloud Solutions", href: "#services" },
                { name: "Consulting", href: "#services" },
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Blog", href: "#" },
                { name: "Case Studies", href: "#" },
                { name: "Documentation", href: "#" },
                { name: "Support", href: "#" },
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Cookie Policy", href: "#" },
                { name: "GDPR", href: "#" },
            ]
        }
    ];

    const scrollToSection = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="bg-gray-900 text-white dark:bg-black">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-3xl">🏢</span>
                            <span className="text-2xl font-bold">CorpLanding</span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Professional business solutions that drive growth and innovation. 
                            We transform visions into reality with comprehensive services and 
                            cutting-edge technology.
                        </p>
                        
                        {/* Social Media */}
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
                            <a href="#" className="text-2xl hover:scale-110 transition-transform duration-200">
                                📺
                            </a>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        {link.href.startsWith('#') ? (
                                            <button
                                                onClick={() => scrollToSection(link.href)}
                                                className="text-gray-300 hover:text-white transition-colors duration-200"
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="text-gray-300 hover:text-white transition-colors duration-200"
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
                        <div className="lg:flex-1">
                            <h3 className="text-xl font-semibold mb-2">📧 Stay Updated</h3>
                            <p className="text-gray-300">
                                Subscribe to our newsletter for the latest updates and insights
                            </p>
                        </div>
                        <div className="mt-6 lg:mt-0 lg:ml-8">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
                                    Subscribe 📬
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-300 text-sm">
                            © {currentYear} CorpLanding. All rights reserved. 
                            Built with ❤️ and cutting-edge technology.
                        </p>
                        <div className="mt-4 md:mt-0 flex items-center space-x-6">
                            <span className="text-gray-300 text-sm">🔒 Secure</span>
                            <span className="text-gray-300 text-sm">⚡ Fast</span>
                            <span className="text-gray-300 text-sm">🌍 Global</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}