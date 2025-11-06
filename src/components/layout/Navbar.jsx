import React, { useContext, useEffect, useMemo, useState } from 'react'
import logo from "../../assets/logo.png"
// import navlinks from '../../static/navlinks'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from "framer-motion"
import { X, Globe } from "lucide-react";
import i18n from "../../i18n";
import { useTranslation } from 'react-i18next'
import AppContext from '../../context/AppContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useContext(AppContext);
  const { loading, setLoading } = useContext(AppContext);
  const [showLangMenu, setShowLangMenu] = useState(false); 
  const {showSplash,setShowSplash} = useContext(AppContext); 
  const { t } = useTranslation();
  const navlinks = useMemo(() => {
    return [
      { value: t("nav.about"), path: "about" },
      { value: t("nav.activities"), path: "activities" },
      { value: t("nav.projects"), path: "projects" },
      { value: t("nav.contact"), path: "contact" },
    ]
  }, [language]);

  const selectLanguage = (lang) => { 
    setShowSplash(true);
    setLanguage(lang)
    setShowLangMenu(false) 
    // Add your language switching logic here 
    if (lang === "ENG") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ur");
    }
    localStorage.setItem("language", lang); 
  } 


  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 ">
      {/* Top accent line */}
      <div
        className="h-1 w-full"
        style={{
          background: "linear-gradient(to right, var(--color-primaryCustom), var(--color-secondaryCustom), var(--color-primaryCustom))"
        }}
      />

      <div className='max-w-7xl mx-auto px-4 flex justify-between h-20 items-center'>
        {/* Logo */}
        <Link to={"/"} className='flex gap-x-3 cursor-pointer items-center group'>
          <motion.img
            src={logo}
            alt="bic mumbai"
            className='w-[55px] h-[55px] object-contain'
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
          <div>
            <h1
              className='text-[1.1rem] lg:text-[1.4rem] font-bold leading-tight'
              style={{
                fontFamily: "var(--font-playfairDisplay)",
                color: "var(--color-primaryCustom)"
              }}
            >
              Bazi-lul-khair
            </h1>
            <p
              className='text-[0.65rem] lg:text-[0.75rem] font-medium'
              style={{
                fontFamily: "var(--font-poppins)",
                color: "var(--color-secondaryCustom)"
              }}
            >
              Islamic Center
            </p>
          </div>
        </Link>

        {/* Navigation links - Desktop */}
        <div className={`hidden md:flex space-x-1 lg:space-x-2 items-center ${language == "URD" ? 'font-noto flex-row-reverse' : 'font-poppins'} text-primaryCustom`}>
          {navlinks.map((link, i) => (
            <Link
              to={link.path}
              key={i}
              className="px-4 py-2 rounded-lg font-medium transition-colors duration-300 hover:text-secondaryCustom"
            >
              {link.value}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className='flex gap-x-2 lg:gap-x-3 items-center'>
          {/* Language Switcher - Always visible */}
          <div className="relative">
            <motion.button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg border-2 font-semibold text-sm transition-all duration-300"
              style={{
                fontFamily: "var(--font-poppins)",
                borderColor: "var(--color-primaryCustom)",
                color: "var(--color-primaryCustom)",
                backgroundColor: showLangMenu ? "var(--color-light-accent)" : "transparent"
              }}
              whileHover={{
                backgroundColor: "var(--color-light-accent)",
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{language}</span>
              <span className="sm:hidden">{language === 'ENG' ? 'EN' : 'UR'}</span>
            </motion.button>

            {/* Language dropdown */}
            <AnimatePresence>
              {showLangMenu && (
                <>
                  {/* Invisible backdrop to close menu */}
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setShowLangMenu(false)}
                  />

                  <motion.div
                    className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg overflow-hidden z-40"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      boxShadow: "0 4px 12px rgba(122, 89, 51, 0.15)"
                    }}
                  >
                    <button
                      onClick={() => selectLanguage('ENG')}
                      className="w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                      style={{
                        fontFamily: "var(--font-poppins)",
                        color: language === 'ENG' ? "var(--color-secondaryCustom)" : "var(--color-primaryCustom)",
                        backgroundColor: language === 'ENG' ? "var(--color-light-accent)" : "transparent"
                      }}
                    >
                      {language === 'ENG' && <span className="text-xs">✓</span>}
                      <span>English</span>
                    </button>
                    <button
                      onClick={() => selectLanguage('URD')}
                      className="w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                      style={{
                        fontFamily: "var(--font-poppins)",
                        color: language === 'URD' ? "var(--color-secondaryCustom)" : "var(--color-primaryCustom)",
                        backgroundColor: language === 'URD' ? "var(--color-light-accent)" : "transparent"
                      }}
                    >
                      {language === 'URD' && <span className="text-xs">✓</span>}
                      <span>اردو (Urdu)</span>
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Donate Button - Hidden on small mobile */}
          <motion.button
            className="hidden sm:flex items-center px-4 lg:px-6 py-2 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 shadow-md"
            style={{
              fontFamily: "var(--font-poppins)",
              backgroundColor: "var(--color-secondaryCustom)",
              color: "var(--color-white)"
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(199, 151, 50, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            💝 Donate
          </motion.button>

          {/* Hamburger Menu - Mobile only */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg"
              style={{
                color: "var(--color-primaryCustom)",
                backgroundColor: isOpen ? "var(--color-light-accent)" : "transparent"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="md:hidden fixed inset-0 z-50"
              style={{
                backgroundColor: "var(--color-primaryCustom)"
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <X
                  className="w-6 h-6"
                  style={{ color: "var(--color-white)" }}
                />
              </motion.button>

              {/* Navigation links */}
              <nav className="flex flex-col justify-center  h-full px-8 space-y-1">
                {navlinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + i * 0.05
                    }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        className="px-6 py-4 rounded-xl"
                        whileTap={{ scale: 0.98 }}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.05)"
                        }}
                      >
                        <span
                          className={`text-xl font-medium block text-center ${language == "ENG" ? "font-poppins" : "font-noto"} text-white`}

                        >
                          {link.value}
                        </span>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}

                {/* Donate button in mobile menu (only visible on very small screens) */}
                <motion.div
                  className="sm:hidden pt-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 + navlinks.length * 0.05
                  }}
                >
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="w-full px-6 py-4 rounded-xl font-semibold text-lg"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      backgroundColor: "var(--color-secondaryCustom)",
                      color: "var(--color-white)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    💝 Donate Now
                  </motion.button>
                </motion.div>
              </nav>

              {/* Bottom tagline */}
              <motion.div
                className="absolute bottom-8 left-0 right-0 text-center px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    color: "var(--color-secondaryCustom)"
                  }}
                >
                  Come to Knowledge, Come to Khair
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar