import { motion } from "framer-motion";
import Divider from "../common/Divider";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Welcome = () => {
    const { t } = useTranslation();
    const { language } = useContext(AppContext);
    return (
        <section
            className="py-20 md:py-28 relative overflow-hidden bg-white"
        >
            {/* Decorative background elements */}
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 bg-secondaryCustom"
            />
            <div
                className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-5 bg-primaryCustom"

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
                        className={`text-3xl  font-bold  tracking-[-0.02em] text-primaryCustom mb-4 ${language === "ENG" ? "font-playfairDisplay md:text-5xl sm:text-4xl " : "font-noto sm:text-3xl  pb-2"}`}
                    >
                        {t("welcomeSection.heading")}
                    </motion.h2>

                    {/* Elegant decorative divider */}
                    <Divider />
                    <motion.p
                        className={`text-base md:text-lg max-w-2xl mx-auto font-medium text-secondaryCustom ${language === "ENG" ? "font-poppins" : "font-noto"}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        {t("welcomeSection.subheading")}
                    </motion.p>
                </motion.div>

                {/* Content Container with Side Accents */}
                <div className="relative">
                    {/* Left accent bar */}
                    <motion.div
                        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 rounded-full bg-light-accent"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    />

                    {/* Right accent bar */}
                    <motion.div
                        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 rounded-full bg-light-accent"
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
                                className={`text-lg sm:text-xl  max-w-4xl mx-auto text-[#4B5563] font-normal ${language === "ENG" ? "font-poppins leading-relaxed" : "font-noto leading-[2.2]"} `}
                            >
                                {t("welcomeSection.description1")}
                            </p>
                            <p
                                className={`text-lg sm:text-xl  max-w-4xl mx-auto text-[#4B5563] font-normal ${language === "ENG" ? "font-poppins leading-relaxed" : "font-noto leading-[2.2]"} `}
                            >
                                {t("welcomeSection.description2")}
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