import React, { useState } from 'react';

export function QnaSection() {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We provide comprehensive business solutions including web development, mobile applications, digital transformation consulting, cloud services, and custom software development tailored to your specific needs.",
            icon: "🛠️"
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on scope and complexity. Simple projects may take 2-4 weeks, while comprehensive solutions can range from 2-6 months. We provide detailed timelines during our initial consultation.",
            icon: "⏱️"
        },
        {
            question: "Do you provide ongoing support?",
            answer: "Absolutely! We offer 24/7 support, regular maintenance, updates, and continuous optimization to ensure your solutions perform at their best. Our support packages are flexible and scalable.",
            icon: "🤝"
        },
        {
            question: "What technologies do you work with?",
            answer: "We specialize in modern technologies including Laravel, React, Node.js, Python, cloud platforms (AWS, Azure), mobile development (React Native, Flutter), and database solutions (PostgreSQL, MySQL, MongoDB).",
            icon: "💻"
        },
        {
            question: "Can you work with our existing systems?",
            answer: "Yes! We excel at integrating with existing infrastructure. Our team can assess your current systems and create seamless connections while modernizing your technology stack without disrupting operations.",
            icon: "🔗"
        },
        {
            question: "What's your pricing structure?",
            answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. We provide transparent quotes with no hidden fees and work within your budget to deliver maximum value.",
            icon: "💰"
        }
    ];

    const toggleQuestion = (index: number) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <section id="qna" className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                        ❓ Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Get answers to the most common questions about our services
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-900 dark:border dark:border-gray-700"
                        >
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 dark:hover:bg-gray-800"
                            >
                                <div className="flex items-center space-x-4">
                                    <span className="text-2xl">{faq.icon}</span>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {faq.question}
                                    </h3>
                                </div>
                                <span className="text-2xl text-gray-400 transform transition-transform duration-200 dark:text-gray-500">
                                    {openQuestion === index ? '−' : '+'}
                                </span>
                            </button>
                            
                            {openQuestion === index && (
                                <div className="px-6 pb-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                                    <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4 dark:text-gray-300">
                        Still have questions? We're here to help!
                    </p>
                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                        💬 Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}