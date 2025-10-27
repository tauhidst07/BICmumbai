import React from 'react'
import { motion } from "framer-motion";
const Divider = () => {
    return (
        <div className="flex items-center justify-center gap-3 mb-5">
            <motion.div
                className="h-[2px] w-16"
                style={{
                    background: "linear-gradient(to right, transparent, var(--color-secondaryCustom))"
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--color-secondaryCustom)" }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
            />
            <motion.div
                className="h-[2px] w-16"
                style={{
                    background: "linear-gradient(to left, transparent, var(--color-secondaryCustom))"
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            />
        </div>
    )
}

export default Divider