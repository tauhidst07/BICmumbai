import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, Users, Heart, MessageCircle, GraduationCap, HandHeart, HelpCircle, ArrowRight, MapPin, Clock, Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaMosque } from "react-icons/fa"
import HeroSection from '../components/common/HeroSection';
import AppContext from '../context/AppContext';
import Spinner from '../components/common/Spinner';
import ActivityCard from '../components/common/ActivityCard';

const ActivitiesPage = () => {
  const navigate = useNavigate();
  const { loading, activities, setActivities } = useContext(AppContext);

  const act = [
    {
      id: 1,
      title: "Madrasa Khair Ummat",
      category: "Educational Activities",
      tagline: "Nurturing young minds with Islamic knowledge",
      image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=800",
      location: "Shivaji Nagar & Nala Sopara",
      schedule: "Monday - Friday",
      students: "300+",
      description: "Our flagship educational institution providing comprehensive Islamic education to children from underprivileged backgrounds. Students learn Quran, Noorani Qaida, and foundational Deeni taleem.",
      highlights: ["Free Education", "Qualified Teachers", "Character Building"]
    },
    {
      id: 2,
      title: "Bazilul Khair Islamic Classes",
      category: "Educational Activities",
      tagline: "Foundation in Quranic education",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800",
      location: "Vasai East",
      schedule: "Daily Evening Classes",
      students: "150+",
      description: "Dedicated to teaching Quranic recitation and Islamic principles to young learners, with special focus on Tajweed, Noorani Qaida, and moral development.",
      highlights: ["Tajweed Training", "Islamic Values", "Small Batch Size"]
    },
    {
      id: 3,
      title: "Ma'had al-Itqan li Tahfeedh al-Qur'an",
      category: "Educational Activities",
      tagline: "Complete memorization of the Holy Quran",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800",
      location: "Main Center Campus",
      schedule: "Full-time Program",
      students: "50+",
      description: "A specialized institute for memorization of the Holy Quran (Hifz), providing systematic training under qualified Huffaz with proper Tajweed and understanding.",
      highlights: ["Hifz Program", "Qualified Huffaz", "Individual Attention"]
    },
    {
      id: 4,
      title: "Weekly Islamic Gatherings",
      category: "Da'wah Programs",
      tagline: "Spreading the light of knowledge",
      image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800",
      location: "Main Prayer Hall",
      schedule: "Every Friday Evening",
      students: "200+",
      description: "Regular weekly programs featuring lectures on Tafseer, Hadith, and contemporary Islamic issues by renowned scholars, fostering community learning and spiritual growth.",
      highlights: ["Renowned Scholars", "Interactive Sessions", "Recorded Lectures"]
    },
    {
      id: 5,
      title: "Women's Monthly Majalis",
      category: "Da'wah Programs",
      tagline: "Empowering women through Islamic knowledge",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
      location: "Women's Section",
      schedule: "Every Month",
      students: "150+",
      description: "Dedicated monthly gatherings for sisters, covering topics of Islamic jurisprudence, family life, parenting, and spiritual development in a comfortable environment.",
      highlights: ["Women Scholars", "Family Topics", "Safe Space"]
    },
    {
      id: 6,
      title: "Fahm-e-Deen Series",
      category: "Da'wah Programs",
      tagline: "Understanding Islam comprehensively",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
      location: "Community Hall",
      schedule: "Bi-weekly Sessions",
      students: "100+",
      description: "A systematic program designed to provide comprehensive understanding of Islam, covering Aqeedah, Fiqh, and practical application of Islamic teachings in daily life.",
      highlights: ["Structured Curriculum", "Certificate Course", "Q&A Sessions"]
    },
    {
      id: 7,
      title: "Mini Baitul Maal Project",
      category: "Social Welfare",
      tagline: "Supporting families in need",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800",
      location: "Distribution Center",
      schedule: "Monthly Distribution",
      students: "400+ Families",
      description: "Our flagship welfare initiative providing monthly ration kits to over 400 needy families. Each kit contains essential food items ensuring nutritional support for entire families.",
      highlights: ["Monthly Rations", "400+ Families", "Regular Support"]
    },
    {
      id: 8,
      title: "Medical Aid Program",
      category: "Social Welfare",
      tagline: "Healthcare support for the needy",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
      location: "Healthcare Desk",
      schedule: "Year-round Support",
      students: "100+ Cases",
      description: "Financial assistance for medical treatments, medicines, and hospital expenses for families unable to afford healthcare. We facilitate connections with charitable hospitals and doctors.",
      highlights: ["Medical Financial Aid", "Hospital Support", "Medicine Provision"]
    },
    {
      id: 9,
      title: "Legal Guidance Center",
      category: "Social Welfare",
      tagline: "Justice and support for the vulnerable",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
      location: "Counseling Room",
      schedule: "By Appointment",
      students: "50+ Cases",
      description: "Free legal consultation and guidance for poor families facing legal challenges. Our network of volunteer lawyers provides support in various legal matters.",
      highlights: ["Free Consultation", "Volunteer Lawyers", "Court Support"]
    },
    {
      id: 10,
      title: "Daily Guidance Desk",
      category: "Street Da'wah",
      tagline: "Islamic guidance at your doorstep",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      location: "Center Reception",
      schedule: "Morning till 10 AM",
      students: "20+ Daily",
      description: "A qualified scholar is available every morning till 10 AM to answer religious queries, provide guidance on Islamic matters, and offer spiritual counseling to community members.",
      highlights: ["Daily Availability", "Free Consultation", "Qualified Scholar"]
    },
    {
      id: 11,
      title: "Mohalla Da'wah Programs",
      category: "Street Da'wah",
      tagline: "Bringing Islam to neighborhoods",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",
      location: "Local Neighborhoods",
      schedule: "15+ Programs/Month",
      students: "Varies",
      description: "Our volunteers conduct regular Da'wah programs in residential areas (mohallas), establishing personal connections and bringing Islamic knowledge directly to people's doorsteps.",
      highlights: ["Door-to-door", "Personal Touch", "Community Building"]
    },
    {
      id: 12,
      title: "Bazaar Da'wah Initiative",
      category: "Street Da'wah",
      tagline: "Meeting people where they are",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800",
      location: "Local Markets",
      schedule: "Weekly",
      students: "10,000+ Reached",
      description: "Active presence in local markets and public spaces, distributing Islamic literature, answering questions, and inviting people to good through wisdom and beautiful preaching.",
      highlights: ["Literature Distribution", "Public Engagement", "Wisdom & Kindness"]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      {/* Hero Section */}
      <HeroSection heading={"Our Activities"} subheading={"Markaz Bazilul Khair serves the community through comprehensive programs in education, Da'wah, social welfare, and moral training. "} />

      {/* Activities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? <div className='h-100 flex justify-center items-center'> <Spinner /> </div> : activities.map((activity, index) => (
           <ActivityCard activity={activity} key={activity.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, var(--color-primaryCustom) 0%, var(--color-secondaryCustom) 100%)"
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center mb-6">
              <Heart
                className="w-16 h-16"
                style={{ color: "var(--color-white)" }}
                fill="currentColor"
              />
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-playfairDisplay)",
                color: "var(--color-white)"
              }}
            >
              Our Mission
            </h2>

            <p
              className="text-lg md:text-xl leading-relaxed mb-6"
              style={{
                fontFamily: "var(--font-poppins)",
                color: "var(--color-light-accent)"
              }}
            >
              At Markaz Bazilul Khair, we believe that the true essence of Islam lies in combining
              faith with service to humanity. Through our educational programs, we nurture young minds
              with Islamic knowledge. Through our Da'wah initiatives, we spread the message of peace
              and wisdom. Through our social welfare projects, we serve those in need with compassion
              and dignity.
            </p>

            <p
              className="text-lg md:text-xl leading-relaxed italic mb-8"
              style={{
                fontFamily: "var(--font-poppins)",
                color: "var(--color-white)"
              }}
            >
              Join us in building a community where Deen and service to humanity walk hand in hand,
              creating a society rooted in Islamic values, moral excellence, and compassionate action.
            </p>

            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-xl font-semibold text-lg"
              style={{
                fontFamily: "var(--font-poppins)",
                backgroundColor: "var(--color-white)",
                color: "var(--color-primaryCustom)"
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 24px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Involved Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;