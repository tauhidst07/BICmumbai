import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const ActivityCard = ({ activity }) => {
    return (
        <div
            className="group bg-white rounded-2xl overflow-hidden relative flex flex-col"
            style={{
                boxShadow: "0 4px 12px rgba(122, 89, 51, 0.08)",
            }}
        >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <motion.img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                />

                {/* Category badge */}
                <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                        backgroundColor: "var(--color-secondaryCustom)",
                        color: "var(--color-white)",
                        fontFamily: "var(--font-poppins)",
                    }}
                >
                    {activity.category}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className='min-h-[70px]'>
                    <h3
                        className="text-xl font-bold mb-2 text-primaryCustom leading-[1.3] line-clamp-2"
                    >
                        {activity.title}
                    </h3>

                    <p
                        className="text-sm italic line-clamp-1 text-secondaryCustom"
                    >
                        {activity.tagline}
                    </p>
                </div>

                {/* Fixed height for info badges */}
                <div className="flex flex-wrap gap-2 mb-4 min-h-[40px]">
                    <div className="flex items-center gap-1 text-xs">
                        <MapPin className="w-3 h-3 text-secondaryCustom" />
                        <span className='text-[#6B7280]'>
                            {activity.location}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                        <Calendar className="w-3 h-3" style={{ color: "var(--color-secondaryCustom)" }} />
                        <span style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                            {activity.schedule}
                        </span>
                    </div>
                </div>

                <p
                    className="text-sm mb-6 line-clamp-4 text-[#6B7280] leading-[1.6] min-h-[90px]"
                    style={{
                        fontFamily: "var(--font-poppins)",
                        color: "#6B7280",
                        lineHeight: "1.6",
                        minHeight: "90px",
                    }}
                >
                    {activity.description}
                </p>

                {/* Learn More Button (now perfectly aligned) */}
                <motion.button
                    onClick={() => navigate(`/activities/${activity.id}`)}
                    className="cursor-pointer w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 mt-auto"
                    style={{
                        fontFamily: "var(--font-poppins)",
                        backgroundColor: "var(--color-secondaryCustom)",
                        color: "var(--color-white)",
                    }}
                    whileHover={{
                        boxShadow: "0 6px 20px rgba(199, 151, 50, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>Learn More</span>
                    <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <ArrowRight className="w-5 h-5" />
                    </motion.div>
                </motion.button>
            </div>
        </div>
    );
};

export default ActivityCard;