import quran from "../assets/quran.jpg" 
import classes from "../assets/classes.jpg"
import charity from "../assets/charity.jpg" 
import { BiDonateHeart } from "react-icons/bi"; 
import { FaMosque } from "react-icons/fa6"; 
import { FaQuran } from "react-icons/fa";
const activities=[ {
          icon: FaQuran,
          title: "Quran Classes",
          description: "Daily Quran memorization and recitation classes for all ages",
          participants: "150+ students",
          image: quran
}, 
{
          icon: FaMosque,
          title: "Islamic Studies",
          description: "Comprehensive Islamic education covering fiqh, aqeedah, and seerah",
          participants: "200+ enrolled",
          image: classes
}, 
 {
          icon: BiDonateHeart,
          title: "Charity Work",
          description: "Food drives, homeless outreach, and community support",
          participants: "75+ volunteers",
          image: charity
}

] 

export default activities;