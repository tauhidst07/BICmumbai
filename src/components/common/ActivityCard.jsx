import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ActivityCard = ({ activity }) => {
    return (
        <motion.div
            className="group bg-white rounded-2xl overflow-hidden cursor-pointer relative"
            style={{
                boxShadow: "0 4px 12px rgba(122, 89, 51, 0.08)"
            }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Top accent line */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-1 z-20"
                style={{ backgroundColor: "var(--color-secondaryCustom)" }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
            />

            {/* Image Section with Overlay */}
            <div className="relative h-56 overflow-hidden">
                {/* Image with zoom effect */}
                <motion.img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Gradient overlay */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: "linear-gradient(to top, rgba(122, 89, 51, 0.7) 0%, transparent 50%)"
                    }}
                />

                {/* Icon badge overlay */}
                <motion.div
                    className="absolute top-4 right-4 rounded-full p-3 backdrop-blur-sm"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)"
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.5, 
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200
                    }}
                >
                    <activity.icon 
                        className="w-6 h-6"
                        style={{ color: "var(--color-primaryCustom)" }}
                        strokeWidth={2}
                    />
                </motion.div>

                {/* Participants badge */}
                <div 
                    className="absolute bottom-4 left-4 px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                    }}
                >
                    <div 
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: "var(--color-secondaryCustom)" }}
                    />
                    <span 
                        className="text-sm font-semibold"
                        style={{
                            fontFamily: "var(--font-poppins)",
                            color: "var(--color-primaryCustom)"
                        }}
                    >
                        {activity.participants}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Title with decorative element */}
                <div className="mb-4">
                    <h3 
                        className="text-xl md:text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300"
                        style={{
                            fontFamily: "var(--font-playfairDisplay)",
                            color: "var(--color-primaryCustom)",
                            lineHeight: "1.3"
                        }}
                    >
                        {activity.title}
                    </h3>
                    
                    {/* Decorative underline */}
                    <motion.div
                        className="h-0.5 rounded-full"
                        style={{ backgroundColor: "var(--color-secondaryCustom)" }}
                        initial={{ width: "2rem" }}
                        whileHover={{ width: "4rem" }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                {/* Description */}
                <p 
                    className="text-base mb-6 line-clamp-3"
                    style={{
                        fontFamily: "var(--font-poppins)",
                        color: "#6B7280",
                        lineHeight: "1.7"
                    }}
                >
                    {activity.description}
                </p>

                {/* CTA Button */}
                <motion.button
                    className="w-full py-3 px-6 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300 group/btn relative overflow-hidden"
                    style={{
                        fontFamily: "var(--font-poppins)",
                        backgroundColor: "var(--color-secondaryCustom)",
                        color: "var(--color-white)"
                    }}
                    whileHover={{ 
                        boxShadow: "0 8px 20px rgba(199, 151, 50, 0.3)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    {/* Button shine effect */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover/btn:opacity-100"
                        style={{
                            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)"
                        }}
                        animate={{
                            x: ["-100%", "100%"]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    />
                    
                    <span className="relative z-10">Learn More</span>
                    <motion.div
                        className="relative z-10"
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <ArrowRight className="w-5 h-5" />
                    </motion.div>
                </motion.button>
            </div>

            {/* Bottom shadow enhancement on hover */}
            <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ boxShadow: "0 0 0 rgba(122, 89, 51, 0)" }}
                whileHover={{ boxShadow: "0 12px 32px rgba(122, 89, 51, 0.15)" }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
};

export default ActivityCard;