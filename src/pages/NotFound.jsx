import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div 
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #FFF5E6 0%, var(--color-light-accent) 100%)"
            }}
        >
            {/* Decorative background elements */}
            <div 
                className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: "var(--color-secondaryCustom)" }}
            />
            <div 
                className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: "var(--color-primaryCustom)" }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* 404 Number */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 
                        className="text-[150px] sm:text-[200px] font-bold leading-none mb-4"
                        style={{
                            fontFamily: "var(--font-playfairDisplay)",
                            color: "var(--color-primaryCustom)",
                            textShadow: "4px 4px 0px var(--color-light-accent)"
                        }}
                    >
                        404
                    </h1>
                    
                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <motion.div 
                            className="h-[2px] w-16"
                            style={{ backgroundColor: "var(--color-secondaryCustom)" }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        />
                        <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "var(--color-secondaryCustom)" }}
                        />
                        <motion.div 
                            className="h-[2px] w-16"
                            style={{ backgroundColor: "var(--color-secondaryCustom)" }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        />
                    </div>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-12"
                >
                    <h2 
                        className="text-3xl sm:text-4xl font-bold mb-4"
                        style={{
                            fontFamily: "var(--font-playfairDisplay)",
                            color: "var(--color-primaryCustom)"
                        }}
                    >
                        Page Not Found
                    </h2>
                    <p 
                        className="text-lg sm:text-xl max-w-2xl mx-auto mb-6"
                        style={{
                            fontFamily: "var(--font-poppins)",
                            color: "#6B7280"
                        }}
                    >
                        The page you're looking for doesn't exist or has been moved. 
                        Let's get you back on track.
                    </p>
                    <p 
                        className="text-base italic"
                        style={{
                            fontFamily: "var(--font-poppins)",
                            color: "var(--color-secondaryCustom)"
                        }}
                    >
                        "Come to Knowledge, Come to Khair"
                    </p>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    {/* Go Home button */}
                    <motion.button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base shadow-lg min-w-[200px]"
                        style={{
                            fontFamily: "var(--font-poppins)",
                            backgroundColor: "var(--color-secondaryCustom)",
                            color: "var(--color-white)"
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 8px 24px rgba(199, 151, 50, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Home className="w-5 h-5" />
                        <span>Go Home</span>
                    </motion.button>

                    {/* Go Back button */}
                    <motion.button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border-2 min-w-[200px]"
                        style={{
                            fontFamily: "var(--font-poppins)",
                            borderColor: "var(--color-primaryCustom)",
                            color: "var(--color-primaryCustom)",
                            backgroundColor: "transparent"
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "var(--color-primaryCustom)",
                            color: "var(--color-white)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Go Back</span>
                    </motion.button>
                </motion.div>

                {/* Quick links suggestion */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16"
                >
                    <p 
                        className="text-sm font-medium mb-4"
                        style={{
                            fontFamily: "var(--font-poppins)",
                            color: "var(--color-primaryCustom)"
                        }}
                    >
                        You might be looking for:
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { label: 'About Us', path: '/about' },
                            { label: 'Activities', path: '/activities' },
                            { label: 'Contact', path: '/contact' }
                        ].map((link, i) => (
                            <motion.button
                                key={link.path}
                                onClick={() => navigate(link.path)}
                                className="px-6 py-2 rounded-full text-sm font-medium"
                                style={{
                                    fontFamily: "var(--font-poppins)",
                                    backgroundColor: "rgba(122, 89, 51, 0.1)",
                                    color: "var(--color-primaryCustom)"
                                }}
                                whileHover={{ 
                                    backgroundColor: "var(--color-light-accent)",
                                    scale: 1.05
                                }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                            >
                                {link.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;