import React, { useContext, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Users, Heart, MessageCircle, GraduationCap,  HandHeart, HelpCircle, ArrowLeft, MapPin, Clock, 
  Calendar, Star, CheckCircle, Phone, Mail, ExternalLink,
  User, Award, Clock4, BookText, Users2
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { FaMosque } from "react-icons/fa"
import AppContext from '../context/AppContext';
import { Spinner } from 'flowbite-react';
import MyIcon from '../components/common/MyIcon';

const ActivityDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 

  

  // Detailed content for top 5 activities
  const activityDetails = {
    1: {
      id: 1,
      title: "Madrasa Khair Ummat",
      category: "Educational Activities",
      tagline: "Nurturing young minds with Islamic knowledge",
      image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=800",
      location: "Shivaji Nagar & Nala Sopara",
      schedule: "Monday - Friday, 4:00 PM - 7:00 PM",
      students: "300+",
      contact: "+91-9876543210",
      email: "madrasa@markazbazilulkhair.org",
      
      description: "Madrasa Khair Ummat is our flagship educational institution dedicated to providing comprehensive Islamic education to children from underprivileged backgrounds. Established with the vision of creating a generation grounded in Islamic principles.",
      
      detailedDescription: [
        "Our madrasa operates in two locations - Shivaji Nagar and Nala Sopara - serving over 300 students from diverse backgrounds. We believe that every child deserves access to quality Islamic education regardless of their financial situation.",
        "The curriculum is carefully designed to build strong foundations in Quranic studies, Islamic jurisprudence, and moral ethics. Students progress through systematic levels, starting from basic Arabic alphabet recognition to advanced Quranic studies.",
        "Beyond academic excellence, we focus on character building, instilling values of compassion, honesty, and community service. Our students participate in regular community service activities, applying their learning in practical ways."
      ],
      
      curriculum: [
        "Noorani Qaida & Arabic Alphabet",
        "Quran Recitation with Tajweed",
        "Memorization of Selected Surahs",
        "Basic Islamic Beliefs (Aqeedah)",
        "Islamic Manners & Ethics",
        "Prophet's Life (Seerah)",
        "Daily Duas & Supplications"
      ],
      
      highlights: [
        "Completely Free Education",
        "Qualified & Experienced Teachers",
        "Character Building Programs",
        "Regular Parent-Teacher Meetings",
        "Annual Competitions & Events",
        "Educational Trips & Activities"
      ],
      
      requirements: [
        "Age: 5-15 years",
        "Basic registration form",
        "Parent/guardian consent",
        "Commitment to regular attendance"
      ],
      
      impact: "Over 300 students currently enrolled, with 50+ students completing full Quran reading annually. Many alumni have gone on to pursue higher Islamic studies and serve their communities.",
      
      stats: [
        { icon: Users, label: "Students", value: "300+" },
        { icon: Award, label: "Completion Rate", value: "95%" },
        { icon: User, label: "Qualified Teachers", value: "15+" },
        { icon: Clock4, label: "Years Running", value: "8+" }
      ]
    },

    2: {
      id: 2,
      title: "Bazilul Khair Islamic Classes",
      category: "Educational Activities",
      tagline: "Foundation in Quranic education",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800",
      location: "Vasai East",
      schedule: "Daily Evening Classes, 5:00 PM - 8:00 PM",
      students: "150+",
      contact: "+91-9876543211",
      email: "islamicclasses@markazbazilulkhair.org",
      
      description: "Bazilul Khair Islamic Classes provide specialized Quranic education with emphasis on proper recitation and understanding. Our dedicated teachers work with small groups to ensure personalized attention.",
      
      detailedDescription: [
        "Located in Vasai East, our Islamic classes serve 150+ students through structured evening programs. We maintain small batch sizes (8-10 students per teacher) to ensure each student receives individual attention and guidance.",
        "The program focuses on developing strong foundations in Quranic Arabic, proper Tajweed rules, and practical application of Islamic teachings. Students learn through interactive methods including group recitation and individual practice.",
        "We incorporate modern teaching methodologies while preserving traditional Islamic educational values. Regular progress reports and parent consultations help track student development and address any challenges promptly."
      ],
      
      curriculum: [
        "Advanced Tajweed Rules",
        "Quran Memorization (Selected Parts)",
        "Arabic Language Basics",
        "Islamic Jurisprudence (Fiqh)",
        "Hadith Studies",
        "Islamic History",
        "Contemporary Islamic Issues"
      ],
      
      highlights: [
        "Small Batch Sizes (8-10 students)",
        "Focus on Tajweed & Proper Recitation",
        "Interactive Learning Methods",
        "Regular Progress Assessments",
        "Qualified Arabic Teachers",
        "Modern Teaching Aids"
      ],
      
      requirements: [
        "Age: 6-18 years",
        "Basic reading skills",
        "Regular attendance commitment",
        "Parent involvement encouraged"
      ],
      
      impact: "150+ active students with 95% showing significant improvement in Quranic recitation. 30+ students complete memorization of Juz Amma annually.",
      
      stats: [
        { icon: Users, label: "Students", value: "150+" },
        { icon: Award, label: "Improvement Rate", value: "95%" },
        { icon: BookText, label: "Batches", value: "15+" },
        { icon: Clock4, label: "Daily Hours", value: "3" }
      ]
    },

    3: {
      id: 3,
      title: "Ma'had al-Itqan li Tahfeedh al-Qur'an",
      category: "Educational Activities",
      tagline: "Complete memorization of the Holy Quran",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800",
      location: "Main Center Campus",
      schedule: "Full-time Program, 7:00 AM - 2:00 PM",
      students: "50+",
      contact: "+91-9876543212",
      email: "hifz@markazbazilulkhair.org",
      
      description: "A specialized institute dedicated to the complete memorization of the Holy Quran (Hifz) under the guidance of qualified Huffaz. Our program combines traditional Hifz methodology with modern educational techniques.",
      
      detailedDescription: [
        "Ma'had al-Itqan represents our commitment to preserving the Quran through memorization. The full-time program is designed for dedicated students who wish to become Huffaz while maintaining their regular education.",
        "Our qualified teachers, all Huffaz themselves, provide individual attention to each student. The program follows a systematic approach, starting with shorter surahs and progressing to longer ones with regular revision cycles.",
        "Beyond memorization, students learn the meanings and explanations of the verses, Tajweed rules, and the context of revelation. This comprehensive approach ensures they become not just memorizers but understanders of the Quran."
      ],
      
      curriculum: [
        "Complete Quran Memorization",
        "Advanced Tajweed Science",
        "Quranic Arabic Understanding",
        "Memorization Techniques",
        "Revision Methodology",
        "Quranic Sciences (Ulum al-Quran)",
        "Teaching Methodology for Future Huffaz"
      ],
      
      highlights: [
        "Full-time Hifz Program",
        "One-on-One Attention",
        "Qualified Huffaz Teachers",
        "Systematic Revision Schedule",
        "Academic Education Support",
        "Ijazah Certification"
      ],
      
      requirements: [
        "Age: 8-16 years",
        "Basic Quran reading ability",
        "Memorization aptitude test",
        "Parent commitment for 3+ years",
        "Good academic standing"
      ],
      
      impact: "50+ students in various stages of Hifz completion. 15+ students have completed full Quran memorization in the past 3 years, with Ijazah certification.",
      
      stats: [
        { icon: Users, label: "Hifz Students", value: "50+" },
        { icon: Award, label: "Completed Hifz", value: "15+" },
        { icon: User, label: "Huffaz Teachers", value: "8" },
        { icon: Clock4, label: "Program Duration", value: "3-4 Years" }
      ]
    },

    4: {
      id: 4,
      title: "Weekly Islamic Gatherings",
      category: "Da'wah Programs",
      tagline: "Spreading the light of knowledge",
      image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800",
      location: "Main Prayer Hall",
      schedule: "Every Friday, 7:00 PM - 9:00 PM",
      students: "200+",
      contact: "+91-9876543213",
      email: "gatherings@markazbazilulkhair.org",
      
      description: "Regular weekly programs featuring comprehensive lectures on Islamic sciences, contemporary issues, and spiritual development by renowned scholars and guest speakers.",
      
      detailedDescription: [
        "Our Weekly Islamic Gatherings have become a cornerstone of community learning and spiritual growth. Every Friday evening, community members gather to benefit from scholarly lectures, interactive discussions, and collective prayers.",
        "The program covers diverse topics including Tafseer (Quranic explanation), Hadith studies, Fiqh (Islamic jurisprudence), Seerah (Prophet's biography), and contemporary Islamic issues. Each session is designed to be both educational and spiritually uplifting.",
        "We invite renowned scholars from across the country and local knowledgeable speakers to share their insights. The interactive Q&A sessions allow attendees to seek guidance on personal and community matters."
      ],
      
      curriculum: [
        "Quranic Tafseer Series",
        "Hadith Explanation",
        "Islamic History",
        "Contemporary Fiqh Issues",
        "Family & Social Matters",
        "Spiritual Purification",
        "Community Development"
      ],
      
      highlights: [
        "Renowned Guest Scholars",
        "Interactive Q&A Sessions",
        "Recorded & Live-streamed",
        "Multi-lingual Programs",
        "Family-friendly Environment",
        "Regular Attendance Certificates"
      ],
      
      requirements: [
        "Open to all community members",
        "No registration required",
        "Family participation encouraged",
        "Respectful conduct expected"
      ],
      
      impact: "Regular attendance of 200+ community members. 50+ lectures conducted annually, with thousands benefiting through live streams and recordings.",
      
      stats: [
        { icon: Users2, label: "Weekly Attendees", value: "200+" },
        { icon: Award, label: "Lectures/Year", value: "50+" },
        { icon: User, label: "Guest Scholars", value: "25+" },
        { icon: Clock4, label: "Duration", value: "2 Hours" }
      ]
    },

    5: {
      id: 5,
      title: "Women's Monthly Majalis",
      category: "Da'wah Programs",
      tagline: "Empowering women through Islamic knowledge",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
      location: "Women's Section",
      schedule: "First Sunday of Every Month, 10:00 AM - 1:00 PM",
      students: "150+",
      contact: "+91-9876543214",
      email: "womensmajalis@markazbazilulkhair.org",
      
      description: "Dedicated monthly gatherings for sisters, providing a comfortable and secure environment to learn about Islam, discuss family matters, and strengthen spiritual bonds.",
      
      detailedDescription: [
        "The Women's Monthly Majalis create a safe and welcoming space for sisters to learn, share, and grow together in their Islamic journey. These gatherings address topics specifically relevant to women's roles in family and society.",
        "Conducted by qualified female scholars and knowledgeable speakers, the sessions cover practical aspects of Islamic living, parenting guidance, marital relationships, and personal development from an Islamic perspective.",
        "The program includes educational lectures, group discussions, workshops, and networking opportunities. Childcare facilities are provided to enable mothers with young children to participate fully."
      ],
      
      curriculum: [
        "Women in Islam - Rights & Responsibilities",
        "Islamic Parenting & Child Education",
        "Marital Harmony & Family Life",
        "Personal Development & Spirituality",
        "Health & Wellness in Islam",
        "Financial Management Islamic Perspective",
        "Community Service & Social Work"
      ],
      
      highlights: [
        "Female Scholars & Speakers",
        "Childcare Facilities Available",
        "Interactive Workshops",
        "Networking Opportunities",
        "Resource Materials Provided",
        "Private & Secure Environment"
      ],
      
      requirements: [
        "Open to all women",
        "No age restrictions",
        "Pre-registration appreciated",
        "Modest dress code"
      ],
      
      impact: "150+ regular attendees with growing participation. Successful launch of sister support groups and community service initiatives led by participants.",
      
      stats: [
        { icon: Users2, label: "Monthly Attendees", value: "150+" },
        { icon: Award, label: "Programs/Year", value: "12" },
        { icon: User, label: "Female Scholars", value: "10+" },
        { icon: Clock4, label: "Session Duration", value: "3 Hours" }
      ]
    }, 
  
    6: {
      id: 6,
      title: "Fahm-e-Deen Series",
      category: "Da'wah Programs",
      tagline: "Understanding Islam comprehensively",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
      location: "Community Hall",
      schedule: "Bi-weekly Sundays, 3:00 PM - 5:00 PM",
      students: "100+",
      contact: "+91-9876543215",
      email: "fahmedeen@markazbazilulkhair.org",
      
      description: "A systematic educational program designed to provide comprehensive understanding of Islamic teachings, covering foundational beliefs, jurisprudence, and practical application in modern life.",
      
      detailedDescription: [
        "Fahm-e-Deen Series is our flagship comprehensive Islamic education program for adults seeking deeper understanding of their faith. The structured curriculum progresses from basic beliefs to advanced Islamic sciences.",
        "Each module is taught by qualified scholars with expertise in their respective fields. The program combines traditional Islamic knowledge with contemporary applications, making it relevant to modern challenges.",
        "Participants receive course materials, reference books, and access to online resources. The interactive format encourages questions, discussions, and practical implementation of learned concepts."
      ],
      
      curriculum: [
        "Islamic Beliefs (Aqeedah) & Theology",
        "Principles of Islamic Jurisprudence",
        "Quranic Sciences & Tafseer Methodology",
        "Hadith Sciences & Authentication",
        "Islamic History & Civilization",
        "Contemporary Fiqh Issues",
        "Spiritual Development & Character Building"
      ],
      
      highlights: [
        "Structured Certificate Course",
        "Qualified Islamic Scholars",
        "Comprehensive Study Materials",
        "Interactive Q&A Sessions",
        "Practical Application Guidance",
        "Graduation Certification"
      ],
      
      requirements: [
        "Age: 18+ years",
        "Basic understanding of Islam",
        "Commitment to full course duration",
        "Regular attendance expected",
        "Willingness to participate in discussions"
      ],
      
      impact: "100+ students enrolled across multiple batches. 45+ students have completed the full certificate course, demonstrating significant improvement in Islamic knowledge and practice.",
      
      stats: [
        { icon: Users, label: "Enrolled Students", value: "100+" },
        { icon: Award, label: "Course Completion", value: "45+" },
        { icon: BookText, label: "Course Modules", value: "7" },
        { icon: Clock4, label: "Program Duration", value: "6 Months" }
      ]
    },

    7: {
      id: 7,
      title: "Mini Baitul Maal Project",
      category: "Social Welfare",
      tagline: "Supporting families in need",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800",
      location: "Distribution Center",
      schedule: "Monthly Distribution, First Weekend",
      students: "400+ Families",
      contact: "+91-9876543216",
      email: "baitulmaal@markazbazilulkhair.org",
      
      description: "Our comprehensive welfare initiative providing essential food supplies and financial support to underprivileged families, ensuring their basic needs are met with dignity and compassion.",
      
      detailedDescription: [
        "Mini Baitul Maal Project serves as the backbone of our social welfare efforts, supporting over 400 families monthly with essential ration kits. Each kit is carefully designed to provide nutritional support for an average family.",
        "Our team conducts thorough needs assessment to identify the most deserving families. We maintain strict transparency in distribution and regularly review beneficiary lists to ensure help reaches those who need it most.",
        "Beyond monthly rations, the project provides emergency financial assistance for medical needs, educational expenses, and household emergencies. We also offer vocational training to help families become self-sufficient."
      ],
      
      curriculum: [
        "Monthly Ration Kits (Rice, Wheat, Pulses, Oil)",
        "Seasonal Clothing Distribution",
        "Educational Support for Children",
        "Medical Emergency Assistance",
        "Eid Gift Packages",
        "Winter Relief Packages",
        "Vocational Training Programs"
      ],
      
      highlights: [
        "400+ Families Supported Monthly",
        "Transparent Distribution System",
        "Needs-based Assessment",
        "Dignity-focused Approach",
        "Emergency Response Team",
        "Long-term Rehabilitation"
      ],
      
      requirements: [
        "Financial need verification",
        "Resident of local community",
        "Family income below threshold",
        "Willingness for needs assessment",
        "Commitment to self-improvement"
      ],
      
      impact: "400+ families receive regular support. 50+ families transitioned to self-sufficiency through vocational training. 200+ children supported with educational expenses annually.",
      
      stats: [
        { icon: Users, label: "Families Supported", value: "400+" },
        { icon: Award, label: "Monthly Distribution", value: "100%" },
        { icon: Heart, label: "Volunteers", value: "30+" },
        { icon: Clock4, label: "Years Running", value: "5+" }
      ]
    },

    8: {
      id: 8,
      title: "Medical Aid Program",
      category: "Social Welfare",
      tagline: "Healthcare support for the needy",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
      location: "Healthcare Desk & Partner Hospitals",
      schedule: "24/7 Emergency Support",
      students: "100+ Cases Annually",
      contact: "+91-9876543217",
      email: "medicalaid@markazbazilulkhair.org",
      
      description: "Comprehensive healthcare assistance program providing financial support, medical consultations, and hospital coordination for underprivileged community members.",
      
      detailedDescription: [
        "Our Medical Aid Program addresses the critical healthcare needs of community members who cannot afford medical treatment. We provide financial assistance for surgeries, medications, diagnostic tests, and hospital stays.",
        "We have established partnerships with several charitable hospitals and healthcare providers who offer discounted services to our beneficiaries. Our medical desk coordinates appointments, treatments, and follow-up care.",
        "The program also includes health awareness camps, preventive healthcare workshops, and regular medical check-up camps in underserved areas. We focus on both treatment and prevention to improve overall community health."
      ],
      
      curriculum: [
        "Financial Assistance for Medical Treatment",
        "Medicine Distribution",
        "Hospital Bill Payments",
        "Medical Equipment Provision",
        "Health Awareness Camps",
        "Doctor Consultation Camps",
        "Emergency Medical Response"
      ],
      
      highlights: [
        "24/7 Emergency Support",
        "Network of Partner Hospitals",
        "Expert Medical Advisory",
        "Transparent Fund Utilization",
        "Regular Health Camps",
        "Follow-up Care System"
      ],
      
      requirements: [
        "Financial need verification",
        "Medical reports and prescriptions",
        "Resident of service area",
        "Hospital estimates and bills",
        "Commitment to follow treatment"
      ],
      
      impact: "100+ critical medical cases supported annually. 500+ beneficiaries served through health camps. 1,000+ medicine kits distributed to needy patients.",
      
      stats: [
        { icon: Users, label: "Cases/Year", value: "100+" },
        { icon: Award, label: "Success Rate", value: "85%" },
        { icon: Heart, label: "Partner Hospitals", value: "12" },
        { icon: Clock4, label: "Response Time", value: "<24 Hours" }
      ]
    },

    9: {
      id: 9,
      title: "Legal Guidance Center",
      category: "Social Welfare",
      tagline: "Justice and support for the vulnerable",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
      location: "Counseling Room & Court Support",
      schedule: "By Appointment, Monday-Saturday",
      students: "50+ Cases",
      contact: "+91-9876543218",
      email: "legalguidance@markazbazilulkhair.org",
      
      description: "Free legal assistance and guidance service providing support to underprivileged individuals facing legal challenges, ensuring access to justice for all community members.",
      
      detailedDescription: [
        "The Legal Guidance Center bridges the gap between underprivileged community members and the justice system. Our network of volunteer lawyers provides free consultations, document preparation, and court representation.",
        "We specialize in family law, property disputes, consumer rights, and civil matters that commonly affect our community. Our team helps navigate complex legal procedures and ensures clients understand their rights and options.",
        "Beyond individual cases, we conduct legal literacy workshops to educate community members about their legal rights and responsibilities. We also mediate disputes to achieve amicable settlements whenever possible."
      ],
      
      curriculum: [
        "Free Legal Consultations",
        "Document Preparation Assistance",
        "Court Representation Support",
        "Legal Awareness Workshops",
        "Dispute Mediation Services",
        "Rights Education Programs",
        "Referral to Legal Aid"
      ],
      
      highlights: [
        "Volunteer Lawyer Network",
        "Completely Free Service",
        "Confidential Consultations",
        "Multilingual Support",
        "Community Legal Education",
        "Follow-up Support"
      ],
      
      requirements: [
        "Financial need verification",
        "Resident of service area",
        "Relevant case documents",
        "Willingness to follow legal advice",
        "Commitment to truthful disclosure"
      ],
      
      impact: "50+ legal cases supported annually. 200+ community members educated through legal workshops. 30+ successful dispute mediations conducted.",
      
      stats: [
        { icon: Users, label: "Cases Handled", value: "50+" },
        { icon: Award, label: "Success Rate", value: "75%" },
        { icon: User, label: "Volunteer Lawyers", value: "15" },
        { icon: Clock4, label: "Consultation Hours", value: "20/Week" }
      ]
    },

    10: {
      id: 10,
      title: "Daily Guidance Desk",
      category: "Street Da'wah",
      tagline: "Islamic guidance at your doorstep",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      location: "Center Reception",
      schedule: "Daily, 8:00 AM - 10:00 AM",
      students: "20+ Daily",
      contact: "+91-9876543219",
      email: "guidance@markazbazilulkhair.org",
      
      description: "Daily open-door service providing immediate Islamic guidance, counseling, and answers to religious questions from qualified scholars and trained counselors.",
      
      detailedDescription: [
        "The Daily Guidance Desk serves as the first point of contact for community members seeking Islamic knowledge and spiritual direction. Every morning, our qualified scholars are available to answer questions, provide counseling, and offer religious guidance.",
        "This service addresses a wide range of topics including daily worship practices, family matters, ethical dilemmas, and spiritual development. The informal setting encourages open discussion and personalized advice.",
        "We maintain complete confidentiality and provide non-judgmental support. For complex issues requiring specialized attention, we refer individuals to appropriate scholars or counseling services within our network."
      ],
      
      curriculum: [
        "Islamic Q&A Sessions",
        "Personal Counseling",
        "Family Guidance",
        "Spiritual Direction",
        "Crisis Support",
        "Referral Services",
        "Resource Distribution"
      ],
      
      highlights: [
        "Qualified Scholars Available",
        "Daily Morning Service",
        "Completely Free",
        "Confidential Discussions",
        "Multilingual Support",
        "Immediate Assistance"
      ],
      
      requirements: [
        "Open to all community members",
        "No appointment needed",
        "Respectful conduct",
        "Genuine seeking of guidance",
        "Willingness to listen"
      ],
      
      impact: "20+ individuals served daily. 500+ guidance sessions monthly. 95% satisfaction rate reported by visitors. Numerous family issues resolved through timely intervention.",
      
      stats: [
        { icon: Users, label: "Daily Visitors", value: "20+" },
        { icon: Award, label: "Satisfaction Rate", value: "95%" },
        { icon: User, label: "Qualified Scholars", value: "5" },
        { icon: Clock4, label: "Daily Hours", value: "2" }
      ]
    },

    11: {
      id: 11,
      title: "Mohalla Da'wah Programs",
      category: "Street Da'wah",
      tagline: "Bringing Islam to neighborhoods",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",
      location: "Local Neighborhoods & Residential Areas",
      schedule: "15+ Programs Monthly",
      students: "Varies by Location",
      contact: "+91-9876543220",
      email: "mohalladawah@markazbazilulkhair.org",
      
      description: "Community outreach program taking Islamic education and Dawah directly to residential neighborhoods through home visits, small gatherings, and personal interactions.",
      
      detailedDescription: [
        "Mohalla Da'wah Programs represent our commitment to taking Islamic knowledge directly to people's doorsteps. Our trained volunteers visit different neighborhoods monthly, establishing personal connections and addressing local community needs.",
        "These programs are conducted in intimate settings like homes, community centers, or local mosques. The personal approach allows for deeper engagement, individual attention, and building lasting relationships with community members.",
        "We focus on addressing specific concerns and questions relevant to each neighborhood. The programs include Quranic reminders, Islamic teachings, and practical guidance for daily life, delivered in a warm, welcoming manner."
      ],
      
      curriculum: [
        "Home Visits & Personal Meetings",
        "Small Group Gatherings",
        "Quran Study Circles",
        "Islamic Book Distribution",
        "One-on-One Counseling",
        "Community Issue Resolution",
        "Follow-up Support"
      ],
      
      highlights: [
        "Personal Door-to-door Approach",
        "Local Community Focus",
        "Trained Volunteer Teams",
        "Cultural Sensitivity",
        "Long-term Relationship Building",
        "Practical Life Guidance"
      ],
      
      requirements: [
        "Open to all residents",
        "Respect for local customs",
        "Advance neighborhood coordination",
        "Volunteer background verification",
        "Community consent"
      ],
      
      impact: "15+ neighborhoods covered monthly. 500+ homes visited annually. 200+ individuals engaged in regular follow-up. Significant increase in Islamic awareness in covered areas.",
      
      stats: [
        { icon: Users, label: "Monthly Programs", value: "15+" },
        { icon: Award, label: "Neighborhoods Covered", value: "30+" },
        { icon: User, label: "Trained Volunteers", value: "25" },
        { icon: Clock4, label: "Programs/Year", value: "180+" }
      ]
    },

    12: {
      id: 12,
      title: "Bazaar Da'wah Initiative",
      category: "Street Da'wah",
      tagline: "Meeting people where they are",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800",
      location: "Local Markets & Public Spaces",
      schedule: "Weekly Market Visits",
      students: "10,000+ Reached",
      contact: "+91-9876543221",
      email: "bazaardawah@markazbazilulkhair.org",
      
      description: "Active public outreach program engaging people in markets, shopping areas, and public spaces through literature distribution, friendly conversations, and Islamic information stalls.",
      
      detailedDescription: [
        "Bazaar Da'wah Initiative takes Islamic message to the bustling heart of community life - the local markets and public spaces. Our volunteers set up information stalls and engage shoppers, vendors, and passersby in meaningful conversations about Islam.",
        "We focus on presenting Islam through wisdom, beautiful preaching, and practical demonstrations of Islamic manners. Our approach is non-confrontational, educational, and focused on clearing misconceptions about Islam.",
        "The initiative includes distributing authentic Islamic literature, answering questions about Islam, and inviting people to learn more through our regular programs. We maintain high standards of etiquette and respect in all interactions."
      ],
      
      curriculum: [
        "Islamic Literature Distribution",
        "Information Stalls & Displays",
        "One-on-One Conversations",
        "Question & Answer Sessions",
        "Free Quran Distribution",
        "Misconception Clarification",
        "Program Invitations"
      ],
      
      highlights: [
        "High-traffic Public Locations",
        "Professional Presentation",
        "Multilingual Literature",
        "Trained Dawah Volunteers",
        "Respectful Engagement",
        "Follow-up System"
      ],
      
      requirements: [
        "Trained volunteer team",
        "Appropriate public location",
        "Local permissions obtained",
        "Professional conduct maintained",
        "Authentic materials used"
      ],
      
      impact: "10,000+ people reached annually. 5,000+ Islamic books distributed. 200+ individuals connected to regular Islamic programs. Significant improvement in community perception of Islam.",
      
      stats: [
        { icon: Users, label: "People Reached", value: "10,000+" },
        { icon: Award, label: "Weekly Programs", value: "4+" },
        { icon: BookText, label: "Books Distributed", value: "5,000+" },
        { icon: Clock4, label: "Years Active", value: "3+" }
      ]
    }
  };

  const {loading,activities} = useContext(AppContext);  
  const [activity,setActivity] = useState(null);  
  const statIcons = {
    "User":User, 
    "Award":Award, 
    "Clock4":Clock4, 
    "BookText":BookText, 
    "Users2":Users2
  } 
  function getIcon(iconName){
    return statIcons[iconName];
  }

  useEffect(()=>{
   if(activities.length>0){
    setActivity(activities[2]);  
    console.log("current activity: ",activities[2])
   } 
  },[activities.length])


  return ( 
    !activity? <div className='min-h-screen w-full flex justify-center items-center'><Spinner/> </div>:
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${activity.image})`,
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div 
              className="inline-block px-4 py-1 rounded-full mb-6 text-sm font-semibold text-white bg-secondaryCustom"
            >
              {activity.category}
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-playfairDisplay text-white"
            >
              {activity.title}
            </h1>
            
            <p 
              className="text-xl md:text-2xl mb-8 italic text-light-accent"
            >
              {activity.tagline}
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-bright-accent" />
                <span className='text-white'>
                  {activity.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-bright-accent"/>
                <span className='text-white'>
                  {activity.schedule}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-bright-accent" />
                <span className='text-white'>
                  {activity.students} Participants
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 
                  className="text-3xl font-bold mb-6 font-playfairDisplay text-primaryCustom" >
                  About This Program
                </h2>
                
                <p 
                  className="text-lg mb-6 leading-[1.8] text-[#6B7280]">
                  {activity.description}
                </p>

                {activity.detailedDescription.split("\n\n").map((paragraph, index) => (
                  <p 
                    key={index}
                    className="text-lg mb-4 leading-[1.8] text-[#6B7280]"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Curriculum/Program Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h2 
                  className="text-3xl font-bold mb-6 font-playfairDisplay text-primaryCustom" >
                  Program Curriculum
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {activity.curriculum.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white"
                      style={{
                        boxShadow: "0 2px 8px rgba(122, 89, 51, 0.08)"
                      }}
                      whileHover={{ 
                        boxShadow: "0 4px 12px rgba(122, 89, 51, 0.12)",
                        y: -2
                      }}
                    >
                      <CheckCircle 
                        className="w-5 h-5 flex-shrink-0" 
                        style={{ color: "var(--color-secondaryCustom)" }} 
                      />
                      <span className='text-[#6B7280]'>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 
                  className="text-3xl font-bold mb-6 font-playfairDisplay text-primaryCustom"
                >
                  Impact & Achievements
                </h2>
                
                <div 
                  className="p-6 rounded-2xl bg-secondaryCustom text-white"
                >
                  <p 
                    className="text-lg leading-[1.8]" >
                    {activity.impact}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 ">
              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: "var(--color-white)",
                  boxShadow: "0 4px 12px rgba(122, 89, 51, 0.08)"
                }}
              >
                <h3 
                  className="text-xl font-bold mb-6 text-center text-primaryCustom"  >
                  Program Statistics
                </h3>
                
                <div className="space-y-4">
                  {activity.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-light-accent"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3">
                        <MyIcon iconName={stat.icon}/>
                        <span className='font-medium text-primaryCustom'>
                          {stat.label}
                        </span>
                      </div>
                      <span 
                        className="font-bold text-secondaryCustom">
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: "var(--color-white)",
                  boxShadow: "0 4px 12px rgba(122, 89, 51, 0.08)"
                }}
              >
                <h3 
                  className="text-xl font-bold mb-6 text-primaryCustom"
                >
                  Key Features
                </h3>
                
                <div className="space-y-3">
                  {activity.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Star 
                        className="w-4 h-4 flex-shrink-0 text-secondaryCustom" 
                        fill="currentColor"
                      />
                      <span className='text-[#6B7280]'
                      >
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
           
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16"
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
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-playfairDisplay)",
                color: "var(--color-white)"
              }}
            >
              Ready to Join This Program?
            </h2>

            <p 
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily: "var(--font-poppins)",
                color: "var(--color-light-accent)"
              }}
            >
              Take the first step towards spiritual growth and community service. 
              Contact us today to learn more about enrollment and participation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 rounded-xl font-semibold text-lg"
                style={{
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-primaryCustom)",
                  fontFamily: "var(--font-poppins)"
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 24px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us Today
              </motion.button>
              
              <motion.button
                onClick={() => navigate('/activities')}
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2"
                style={{
                  borderColor: "var(--color-white)",
                  color: "var(--color-white)",
                  fontFamily: "var(--font-poppins)"
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-primaryCustom)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Other Activities
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ActivityDetailPage;