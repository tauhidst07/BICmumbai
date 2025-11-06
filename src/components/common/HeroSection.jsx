import React from 'react'
import { motion } from 'framer-motion'
const HeroSection = ({heading,subheading}) => {
    return (
        <div
            className="relative py-18  overflow-hidden"
            style={{
                background: "linear-gradient(135deg, var(--color-primaryCustom) 0%, var(--color-secondaryCustom) 100%)"
            }}
        >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: "var(--color-bright-accent)" }}
            />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
                style={{ backgroundColor: "var(--color-light-accent)" }}
            />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1
                        className="text-4xl md:text-5xl font-bold mb-6"
                        style={{
                            fontFamily: "var(--font-playfairDisplay)",
                            color: "var(--color-white)"
                        }}
                    >
                       {heading}
                    </h1>

                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[2px] w-16" style={{ backgroundColor: "var(--color-bright-accent)" }} />
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-bright-accent)" }} />
                        <div className="h-[2px] w-16" style={{ backgroundColor: "var(--color-bright-accent)" }} />
                    </div>

                    <p
                        className="text-lg md:text-xl  max-w-3xl mx-auto leading-relaxed"
                        style={{
                            fontFamily: "var(--font-poppins)",
                            color: "var(--color-light-accent)"
                        }}
                    >
                       {subheading}
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection