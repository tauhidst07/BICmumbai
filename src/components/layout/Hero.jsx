import React, { useContext, useEffect, useState } from "react";
import fallbackImage from "../../assets/background.jpg";
import useImages from "../../hooks/useImages";
import { motion, AnimatePresence } from "framer-motion";
import Divider from "../common/Divider";
import AppContext from "../../context/AppContext";

const Hero = () => {
  const { images } = useImages();
  const [background, setBackground] = useState(fallbackImage);
  const { language } = useContext(AppContext);

  useEffect(() => {
    if (!images || images.length === 0) return;

    // Randomly rotate between images every 5s
    const interval = setInterval(() => {
      setBackground((prev) => {
        let next;
        do {
          next = images[Math.floor(Math.random() * images.length)];
        } while (next === prev && images.length > 1);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className="relative h-[500px] lg:h-[600px] overflow-hidden flex items-center justify-center"
      style={{
        backgroundColor: "#3b240b",
      }}
    >
      {/* Animated background with subtle zoom effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={background}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        />
      </AnimatePresence>

      {/* Sophisticated gradient overlay - darker for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(61,36,11,0.3)] via-[rgba(61,36,11,0.5)] to-[rgba(61,36,11,0.75)]" />

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Content with staggered animation */}
      <div className="relative text-center px-6 md:px-12 z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl  font-bold mb-6 tracking-wide ${language === "ENG" ? "font-playfairDisplay lg:text-7xl" : "font-noto lg:text-6xl"} text-white`}
            style={{
              textShadow: "0 4px 12px rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            {language === "ENG" ? "Markaz Bazi-lul-khair" : "مرکز باذل الخیر"}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p
            className={`text-xl sm:text-2xl font-light mb-10 text-secondaryCustom ${language==="ENG"?"font-poppins  md:text-3xl ":"font-noto pt-8 md:text-2xl"} `}
          >
            {language === "ENG"? "Come to Knowledge, Come to Khair": "علم کی طرف آؤ، خیر کی طرف آؤ"}
          </p>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div
            className="h-[2px] w-16 md:w-24"
            style={{ backgroundColor: "var(--color-secondaryCustom)" }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--color-secondaryCustom)" }}
          />
          <div
            className="h-[2px] w-16 md:w-24"
            style={{ backgroundColor: "var(--color-secondaryCustom)" }}
          />
        </motion.div>

        {/* Optional CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            className="px-8 py-3 rounded-full bg-secondaryCustom text-white font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              boxShadow: "0 4px 20px rgba(199, 151, 50, 0.4)"
            }}
          >
            Explore Our Programs
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
          style={{ borderColor: "var(--color-light-accent)" }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--color-light-accent)" }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;