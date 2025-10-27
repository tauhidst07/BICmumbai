import { motion } from "framer-motion";
import Divider from "../common/Divider";

const Welcome = () => {
    return (
        <section 
            className="py-20 md:py-28 relative overflow-hidden"
            style={{ backgroundColor: "var(--color-white)" }}
        >
            {/* Decorative background elements */}
            <div 
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5"
                style={{ backgroundColor: "var(--color-secondaryCustom)" }}
            />
            <div 
                className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-5"
                style={{ backgroundColor: "var(--color-primaryCustom)" }}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <motion.h2 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                        style={{
                            fontFamily: "var(--font-playfairDisplay)",
                            color: "var(--color-primaryCustom)",
                            letterSpacing: "-0.02em"
                        }}
                    >
                        Welcome to Our Center
                    </motion.h2>
                    
                    {/* Elegant decorative divider */}
                    <Divider/>
                    <motion.p
                        className="text-base md:text-lg max-w-2xl mx-auto"
                        style={{
                            fontFamily: "var(--font-poppins)",
                            color: "var(--color-secondaryCustom)",
                            fontWeight: 500
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        A Beacon of Faith, Knowledge, and Community
                    </motion.p>
                </motion.div>

                {/* Content Container with Side Accents */}
                <div className="relative">
                    {/* Left accent bar */}
                    <motion.div
                        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 rounded-full"
                        style={{ backgroundColor: "var(--color-light-accent)" }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    />
                    
                    {/* Right accent bar */}
                    <motion.div
                        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 rounded-full"
                        style={{ backgroundColor: "var(--color-light-accent)" }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    />

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-center px-4 md:px-12"
                    >
                        <div className="space-y-6 mb-12">
                            <p 
                                className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto"
                                style={{
                                    fontFamily: "var(--font-poppins)",
                                    color: "#4B5563",
                                    fontWeight: 400,
                                    lineHeight: "1.8"
                                }}
                            >
                                Markaz Bazil al-Khair Islamic Center is a beacon of faith, knowledge, and community service. 
                                Established to serve the Muslim community and beyond, we strive to promote Islamic values, 
                                education, and social harmony.
                            </p>
                            <p 
                                className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto"
                                style={{
                                    fontFamily: "var(--font-poppins)",
                                    color: "#4B5563",
                                    fontWeight: 400,
                                    lineHeight: "1.8"
                                }}
                            >
                                Our center offers daily prayers, Quran classes, educational programs, and community outreach 
                                initiatives. We welcome people from all backgrounds to learn, grow, and connect in a peaceful 
                                and inclusive environment.
                            </p>
                        </div>

                        {/* Feature Highlights */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-14 max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            {[
                                { number: "5", label: "Daily Prayers" },
                                { number: "100+", label: "Students" },
                                { number: "15+", label: "Programs" },
                                { number: "24/7", label: "Open Access" }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                                >
                                    <div 
                                        className="text-3xl md:text-4xl font-bold mb-2"
                                        style={{
                                            fontFamily: "var(--font-playfairDisplay)",
                                            color: "var(--color-secondaryCustom)"
                                        }}
                                    >
                                        {stat.number}
                                    </div>
                                    <div 
                                        className="text-sm md:text-base font-medium"
                                        style={{
                                            fontFamily: "var(--font-poppins)",
                                            color: "var(--color-primaryCustom)"
                                        }}
                                    >
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                        >
                            <motion.button
                                className="px-8 py-4 rounded-xl font-semibold text-base shadow-lg w-full sm:w-auto transition-all duration-300"
                                style={{
                                    fontFamily: "var(--font-poppins)",
                                    backgroundColor: "var(--color-secondaryCustom)",
                                    color: "var(--color-white)",
                                    boxShadow: "0 4px 20px rgba(199, 151, 50, 0.3)"
                                }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    boxShadow: "0 8px 30px rgba(199, 151, 50, 0.4)" 
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Learn About Us
                            </motion.button>
                            
                            <motion.button
                                className="px-8 py-4 rounded-xl font-semibold text-base border-2 w-full sm:w-auto transition-all duration-300"
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
                                Plan Your Visit
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;