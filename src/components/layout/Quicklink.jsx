import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Handshake, Heart, Phone } from "lucide-react"
import { FaMosque } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import AppContext from "../../context/AppContext"
import { useNavigate } from "react-router-dom"


const Quicklink = () => {

    const { t } = useTranslation();
    const links = t("quickLinks", { returnObjects: true });
    const icons = [BookOpen, FaMosque, Handshake, Heart, Phone];
    const { language } = useContext(AppContext); 
    const navigate=useNavigate();
    return (
        <section className="py-16 bg-gradient-to-b from-[#FFE6C8] to-[#FFCB98]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-wrap justify-center gap-4 ${language==="URD"?"flex-row-reverse":""}`}>
                    {links.map((link, i) => {
                        const Icon = icons[i];
                        return (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -4 }}
                                className="cursor-pointer flex-grow basis-[calc(50%-0.75rem)] md:basis-[calc(33%-0.9rem)] lg:basis-[calc(20%-0.9rem)]" 
                                onClick={()=>navigate(link.path)}
                            >
                                <Card className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300  h-[150px] sm:h-[180px] ">
                                    <CardContent className="text-center p-4 sm:p-6">
                                        <div className="flex justify-center mb-2 ">
                                            <motion.div
                                                whileHover={{ rotate: 8, scale: 1.1 }}
                                                transition={{ type: 'spring', stiffness: 200 }}
                                            >
                                                <Icon className="w-6 h-6  text-[#7A5933]" strokeWidth={1.6} />
                                            </motion.div>
                                        </div>
                                        <h3
                                            className={`font-semibold text-[#7A5933] ${language === 'ENG'
                                                    ? 'font-poppins text-base sm:text-lg pb-2'
                                                    : 'font-noto text-sm sm:text-base pb-3'
                                                }`}
                                        >
                                            {link.name}
                                        </h3>
                                        <p
                                            className={`text-gray-600 ${language === 'ENG'
                                                    ? 'font-poppins text-xs sm:text-sm'
                                                    : 'font-noto text-xs'
                                                }`}
                                        >
                                            {link.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>

    )
}

export default Quicklink