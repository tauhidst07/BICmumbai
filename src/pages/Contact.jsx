import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import HeroSection from '../components/common/HeroSection';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            details: [
                "Markaz Bazil al-Khair",
                "123 Community Street",
                "Nashik, Maharashtra 422001"
            ],
            description: "Come visit us during prayer times"
        },
        {
            icon: Phone,
            title: "Call Us",
            details: [
                "+91 98765 43210",
                "+91 87654 32109"
            ],
            description: "Available 9 AM - 8 PM daily"
        },
        {
            icon: Mail,
            title: "Email Us",
            details: [
                "info@markazbazil.org",
                "admin@markazbazil.org"
            ],
            description: "We respond within 24 hours"
        },
        {
            icon: Clock,
            title: "Prayer Times",
            details: [
                "Fajr: 5:30 AM",
                "Dhuhr: 1:00 PM",
                "Asr: 4:30 PM",
                "Maghrib: 6:45 PM",
                "Isha: 8:00 PM"
            ],
            description: "Join us for daily prayers"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
            {/* Hero Section */}
            <HeroSection heading={"Get in Touch"} subheading={"Multiple ways to connect with us. We're here to help and support our community."} />

            {/* Contact Info Cards */}
            <section className="py-16 -mt-12 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="bg-white rounded-2xl shadow-lg p-6 text-center"
                                    style={{
                                        boxShadow: "0 4px 20px rgba(122, 89, 51, 0.1)"
                                    }}
                                >
                                    <motion.div
                                        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                                        style={{
                                            backgroundColor: "var(--color-light-accent)"
                                        }}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Icon 
                                            className="w-8 h-8"
                                            style={{ color: "var(--color-primaryCustom)" }}
                                            strokeWidth={2}
                                        />
                                    </motion.div>
                                    <h3 
                                        className="text-xl font-bold mb-3"
                                        style={{
                                            fontFamily: "var(--font-poppins)",
                                            color: "var(--color-primaryCustom)"
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <div className="space-y-1 mb-4">
                                        {item.details.map((detail, idx) => (
                                            <p 
                                                key={idx}
                                                className="text-sm"
                                                style={{
                                                    fontFamily: "var(--font-poppins)",
                                                    color: "#4B5563"
                                                }}
                                            >
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                    <p 
                                        className="text-xs"
                                        style={{
                                            fontFamily: "var(--font-poppins)",
                                            color: "var(--color-secondaryCustom)"
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <MessageSquare 
                                        className="w-8 h-8"
                                        style={{ color: "var(--color-secondaryCustom)" }}
                                    />
                                    <h2 
                                        className="text-3xl font-bold"
                                        style={{
                                            fontFamily: "var(--font-playfairDisplay)",
                                            color: "var(--color-primaryCustom)"
                                        }}
                                    >
                                        Send a Message
                                    </h2>
                                </div>
                                <p 
                                    className="text-base mb-8"
                                    style={{
                                        fontFamily: "var(--font-poppins)",
                                        color: "#6B7280"
                                    }}
                                >
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label 
                                            className="block text-sm font-semibold mb-2"
                                            style={{
                                                fontFamily: "var(--font-poppins)",
                                                color: "var(--color-primaryCustom)"
                                            }}
                                        >
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-opacity-100 transition-colors"
                                            style={{
                                                fontFamily: "var(--font-poppins)",
                                                borderColor: "var(--color-light-accent)",
                                                focusBorderColor: "var(--color-secondaryCustom)"
                                            }}
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label 
                                            className="block text-sm font-semibold mb-2"
                                            style={{
                                                fontFamily: "var(--font-poppins)",
                                                color: "var(--color-primaryCustom)"
                                            }}
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors"
                                            style={{
                                                fontFamily: "var(--font-poppins)",
                                                borderColor: "var(--color-light-accent)"
                                            }}
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label 
                                            className="block text-sm font-semibold mb-2"
                                            style={{
                                                fontFamily: "var(--font-poppins)",
                                                color: "var(--color-primaryCustom)"
                                            }}
                                        >
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors"
                                            style={{
                                                fontFamily: "var(--font-poppins)",
                                                borderColor: "var(--color-light-accent)"
                                            }}
                                            placeholder="What is this regarding?"
                                        />
                                    </div>

                                    <div>
                                        <label 
                                            className="block text-sm font-semibold mb-2"
                                            style={{
                                                fontFamily: "var(--font-poppins)",
                                                color: "var(--color-primaryCustom)"
                                            }}
                                        >
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors resize-none"
                                            style={{
                                                fontFamily: "var(--font-poppins)",
                                                borderColor: "var(--color-light-accent)"
                                            }}
                                            placeholder="Tell us more about your inquiry..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="w-full py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2"
                                        style={{
                                            fontFamily: "var(--font-poppins)",
                                            backgroundColor: "var(--color-secondaryCustom)",
                                            color: "var(--color-white)"
                                        }}
                                        whileHover={{ 
                                            scale: 1.02,
                                            boxShadow: "0 8px 24px rgba(199, 151, 50, 0.3)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                                <h2 
                                    className="text-3xl font-bold mb-6"
                                    style={{
                                        fontFamily: "var(--font-playfairDisplay)",
                                        color: "var(--color-primaryCustom)"
                                    }}
                                >
                                    Find Us Here
                                </h2>
                                
                                {/* Map placeholder */}
                                <div 
                                    className="w-full h-[400px] rounded-xl overflow-hidden mb-6"
                                    style={{
                                        backgroundColor: "var(--color-light-accent)"
                                    }}
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.4444444444444!2d73.7777777!3d19.9999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzU5LjkiTiA3M8KwNDYnNDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Markaz Location"
                                    />
                                </div>

                                {/* Quick info */}
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin 
                                            className="w-5 h-5 mt-1 flex-shrink-0"
                                            style={{ color: "var(--color-secondaryCustom)" }}
                                        />
                                        <div>
                                            <p 
                                                className="font-semibold"
                                                style={{
                                                    fontFamily: "var(--font-poppins)",
                                                    color: "var(--color-primaryCustom)"
                                                }}
                                            >
                                                Address
                                            </p>
                                            <p 
                                                className="text-sm"
                                                style={{
                                                    fontFamily: "var(--font-poppins)",
                                                    color: "#6B7280"
                                                }}
                                            >
                                                123 Community Street, Nashik, Maharashtra 422001
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Clock 
                                            className="w-5 h-5 mt-1 flex-shrink-0"
                                            style={{ color: "var(--color-secondaryCustom)" }}
                                        />
                                        <div>
                                            <p 
                                                className="font-semibold"
                                                style={{
                                                    fontFamily: "var(--font-poppins)",
                                                    color: "var(--color-primaryCustom)"
                                                }}
                                            >
                                                Open Hours
                                            </p>
                                            <p 
                                                className="text-sm"
                                                style={{
                                                    fontFamily: "var(--font-poppins)",
                                                    color: "#6B7280"
                                                }}
                                            >
                                                Open 24/7 for prayers. Office hours: 9 AM - 8 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;