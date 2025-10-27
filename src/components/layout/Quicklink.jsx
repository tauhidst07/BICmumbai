import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Handshake, Heart, Phone } from "lucide-react"
import { FaMosque } from "react-icons/fa"


const Quicklink = () => {
    const links = [
        { name: "About", icon: BookOpen, desc: "Learn about our mission" },
        { name: "Activities", icon: FaMosque, desc: "Daily prayers & events" },
        { name: "Projects", icon: Handshake, desc: "Community initiatives" },
        { name: "Donate", icon: Heart, desc: "Support our work" },
        { name: "Contact", icon: Phone, desc: "Get in touch" },
    ]
    return (
        <section className="py-16 bg-gradient-to-b from-[#FFE6C8] to-[#FFCB98]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {links.map((link, i) => {
                        const Icon = link.icon
                        return (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -4 }}
                            >
                                <Card className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                                    <CardContent className="text-center p-4 sm:p-6">
                                        <div className="flex justify-center mb-2 sm:mb-3">
                                            <motion.div
                                                whileHover={{ rotate: 8, scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 200 }}
                                            >
                                                <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-[#7A5933]" strokeWidth={1.6} />
                                            </motion.div>
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold text-[#7A5933] mb-1 font-poppins">
                                            {link.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 font-lato">{link.desc}</p>
                                    </CardContent>
                                </Card>

                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}

export default Quicklink