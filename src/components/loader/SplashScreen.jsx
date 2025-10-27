import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a bit before calling onComplete
          setTimeout(() => {
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(135deg, var(--color-primaryCustom) 0%, var(--color-secondaryCustom) 100%)"
        }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative background elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "var(--color-bright-accent)" }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "var(--color-light-accent)" }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 text-center px-4">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="mb-8"
          >
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src={logo}
                alt="Markaz Logo"
                className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-2"
          >
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
              style={{
                fontFamily: "var(--font-playfairDisplay)",
                color: "var(--color-white)"
              }}
            >
              Markaz Bazi-lul-khair
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p
              className="text-lg md:text-xl mb-12"
              style={{
                fontFamily: "var(--font-poppins)",
                color: "var(--color-light-accent)",
                letterSpacing: "0.05em"
              }}
            >
              Come to Knowledge, Come to Khair
            </p>
          </motion.div>

          {/* Progress Bar Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="w-64 md:w-80 mx-auto"
          >
            {/* Progress bar background */}
            <div
              className="w-full h-2 rounded-full overflow-hidden mb-3"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              {/* Progress bar fill */}
              <motion.div
                className="h-full rounded-full relative overflow-hidden"
                style={{
                  backgroundColor: "var(--color-bright-accent)",
                  width: `${progress}%`
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)"
                  }}
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </div>

            {/* Progress text */}
            <motion.p
              className="text-sm font-medium"
              style={{
                fontFamily: "var(--font-poppins)",
                color: "var(--color-white)"
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Loading... {progress}%
            </motion.p>
          </motion.div>

          {/* Decorative dots */}
          <motion.div
            className="flex items-center justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--color-bright-accent)" }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}; 

export default SplashScreen