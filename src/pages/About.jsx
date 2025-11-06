import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Heart, BookOpen, Award, Target, Globe } from "lucide-react";
import StatCard from "../components/common/StatCard";
import SplashScreen from "../components/loader/SplashScreen";
import HeroSection from "../components/common/HeroSection";

const About = () => {
  const milestones = [
    { year: "2005", title: "Foundation", description: "Started with 50 members in a small rented space" },
    { year: "2010", title: "Expansion", description: "Launched Quran classes and youth programs" },
    { year: "2015", title: "New Facility", description: "Inaugurated our current comprehensive center" },
    { year: "2020", title: "Digital Era", description: "Introduced online programs and virtual services" },
    { year: "2025", title: "Growing Strong", description: "Serving 2,000+ community members with 15+ programs" }
  ]; 


  const values = [
    {
      icon: BookOpen,
      title: "Knowledge",
      description: "Promoting Islamic education and continuous learning"
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Serving our community with love and dedication"
    },
    {
      icon: Users,
      title: "Unity",
      description: "Building bridges and fostering togetherness"
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "Welcoming all backgrounds and cultures"
    }
  ]; 


  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <HeroSection heading={"About Our Center"} subheading={"Building a Strong Community Rooted in Faith and Service"}/>

      {/* ================= INTRO QUOTE ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p 
              className="text-xl md:text-2xl max-w-3xl mx-auto italic mb-6"
              style={{
                fontFamily: "var(--font-playfairDisplay)",
                color: "var(--color-primaryCustom)"
              }}
            >
              "A journey of faith, growth, and community service since 2005"
            </p>
            <div 
              className="w-24 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "var(--color-secondaryCustom)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= STATS CARDS ================= */}
      <section 
        className="py-16 -mt-8"
        style={{ backgroundColor: "#FFF8F0" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StatCard
                icon={<Calendar className="w-10 h-10 mx-auto mb-3 text-[#C79732]" />}
                title="Year Founded"
                value="2005"
                description="Beginning our spiritual journey"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StatCard
                icon={<Users className="w-10 h-10 mx-auto mb-3 text-[#C79732]" />}
                title="Community Served"
                value="2,000+"
                description="Growing together in faith"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <StatCard
                icon={<Heart className="w-10 h-10 mx-auto mb-3 text-[#C79732]" />}
                title="Active Programs"
                value="15+"
                description="Enriching lives daily"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            style={{
              backgroundColor: "var(--color-white)",
              boxShadow: "0 8px 32px rgba(122, 89, 51, 0.12)"
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative corner accents */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 opacity-10"
              style={{
                background: `radial-gradient(circle at top right, var(--color-secondaryCustom), transparent)`
              }}
            />
            <div 
              className="absolute bottom-0 left-0 w-32 h-32 opacity-10"
              style={{
                background: `radial-gradient(circle at bottom left, var(--color-secondaryCustom), transparent)`
              }}
            />

            <div className="relative max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-playfairDisplay)",
                    color: "var(--color-primaryCustom)"
                  }}
                >
                  Our Journey
                </h2>
                <div 
                  className="w-20 h-1 mx-auto rounded-full"
                  style={{ backgroundColor: "var(--color-secondaryCustom)" }}
                />
              </div>

              <div className="space-y-6 text-center">
                <p 
                  className="text-lg md:text-xl leading-relaxed"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    color: "#4B5563"
                  }}
                >
                  <span 
                    className="font-bold"
                    style={{ color: "var(--color-primaryCustom)" }}
                  >
                    Markaz Bazil al-Khair Islamic Center
                  </span>{" "}
                  was established in 2005 by a group of dedicated community members who saw the need for a spiritual and educational hub for Muslims in our region.
                </p>

                <p 
                  className="text-lg md:text-xl leading-relaxed"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    color: "#4B5563"
                  }}
                >
                  Starting from a small rented space with just 50 worshippers, we have grown into a comprehensive Islamic center serving over 2,000 community members. Our journey has been marked by faith, perseverance, and the generous support of our community.
                </p>

                <p 
                  className="text-lg md:text-xl leading-relaxed"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    color: "#4B5563"
                  }}
                >
                  In 2015, we inaugurated our current facility, which includes a masjid, classrooms, community hall, and sports facilities.{" "}
                  <span 
                    className="font-semibold italic"
                    style={{ color: "var(--color-secondaryCustom)" }}
                  >
                    Alhamdulillah
                  </span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     

      {/* ================= OUR VALUES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                fontFamily: "var(--font-playfairDisplay)",
                color: "var(--color-primaryCustom)"
              }}
            >
              Our Core Values
            </h2>
            <div 
              className="w-20 h-1 mx-auto rounded-full mb-4"
              style={{ backgroundColor: "var(--color-secondaryCustom)" }}
            />
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: "var(--font-poppins)",
                color: "#6B7280"
              }}
            >
              Guiding principles that shape our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl"
                  style={{
                    backgroundColor: "#FFF8F0",
                    boxShadow: "0 4px 12px rgba(122, 89, 51, 0.08)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{ backgroundColor: "var(--color-light-accent)" }}
                  >
                    <Icon 
                      className="w-8 h-8"
                      style={{ color: "var(--color-primaryCustom)" }}
                      strokeWidth={2}
                    />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      color: "var(--color-primaryCustom)"
                    }}
                  >
                    {value.title}
                  </h3>
                  <p 
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      color: "#6B7280"
                    }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;