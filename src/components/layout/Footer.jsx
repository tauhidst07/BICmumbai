import React from 'react'
import navlinks from '../../static/navlinks'
import { Link } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
         <footer className="relative bg-gradient-to-br from-[#2C2416] via-[#3D3020] to-[#2C2416] text-gray-100 py-16 overflow-hidden">
        {/* Decorative Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-8 bg-repeat"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')"
          }}
          aria-hidden="true"
        ></div>

        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4A843] to-transparent"></div>

        <div className="relative w-full lg:max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            {/* Organization Info */}
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-4">
                {/* <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#D4A843] to-[#C79732] rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  ☪
                </div> */}
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Markaz Bazi-lul-khair
                </h3>
              </div>
              <p className="text-gray-100 text-sm lg:text-base leading-relaxed">
                Serving the community with faith, knowledge, and compassion since 2021.
              </p>
              <div className="mt-6 w-16 h-1 bg-[#D4A843] rounded-full"></div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 justify-self-auto sm:justify-self-end">
              <h4 className="text-base sm:text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-[#D4A843]">▸</span>
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm sm:text-base">
                {navlinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={`#${link.value.toLowerCase()}`}
                      className="text-gray-100 hover:text-[#D4A843] transition-colors duration-300 hover:translate-x-1 inline-block cursor-pointer"
                    >
                      {link.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <h4 className="text-base sm:text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-[#D4A843]">▸</span>
                Contact Info
              </h4>
              <ul className="space-y-4 text-sm lg:text-base">
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-[#D4A843] mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-100">
                    Waliv Road<br />
                    Vasai, Maharashtra 401208
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-[#D4A843] group-hover:scale-110 transition-transform" />
                  <a href="mailto:info@markazbazilalkhair.org" className="text-gray-100 hover:text-[#D4A843] transition-colors">
                    info@markazbazilalkhair.org
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-[#D4A843] group-hover:scale-110 transition-transform" />
                  <a href="tel:+919876543210" className="text-gray-100 hover:text-[#D4A843] transition-colors">
                    +91 9876543210
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="col-span-1 justify-self-auto sm:justify-self-end">
              <h4 className="text-base lg:text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-[#C79732]">▸</span>
                Follow Us
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaYoutube className="w-5 h-5" />, label: "Youtube", href: "#" },
                  { icon: <FaFacebook className="w-5 h-5" />, label: "Facebook", href: "#" },
                  { icon: <FaInstagram className="w-5 h-5" />, label: "Instagram", href: "#" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 bg-[#6B4E33] hover:bg-[#C79732] rounded-lg flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              {/* Newsletter/CTA (Optional) */}
              <div className="mt-8 p-4 bg-[#6B4E33]/30 rounded-lg border border-[#C79732]/20">
                <p className="text-sm text-gray-300 mb-2">Stay Connected</p>
                <p className="text-xs text-gray-400">
                  Join our community for updates and events
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-[#D4A843]/30">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-gray-200 text-center sm:text-left">
                &copy; {new Date().getFullYear()} Markaz Bazil al-Khair Islamic Center. All rights reserved.
              </p>
              <div className="flex gap-6 text-gray-200">
                <a href="#privacy" className="hover:text-[#D4A843] transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#terms" className="hover:text-[#D4A843] transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer