import { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n";
import client from "../utility/contentfulClient";


const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [language, setLanguage] = useState(localStorage.getItem("language") ? localStorage.getItem("language") : "ENG");
  const [loading, setLoading] = useState(false);
  const [showSplash, setShowSplash] = useState(false); 
  const [activities,setActivities] = useState([]);

  async function fetchActivities() { 
    setLoading(true)
    try {
      const res = await client.getEntries({content_type: "activities", locale: "en-US" });  
      const final = res.items.map((activity)=>({
        id:activity.sys.id, 
        title:activity.fields.title, 
        category:activity.fields.category,  
        contact:activity.fields.contact, 
        curriculum:activity.fields.curriculum, 
        description:activity.fields.description, 
        detailedDescription:activity.fields.detailedDescription, 
        email:activity.fields.email, 
        highlights:activity.fields.highlights, 
        image:activity.fields.image.fields.file.url, 
        impact:activity.fields.impact, 
        location:activity.fields.location, 
        schedule:activity.fields.schedule, 
        students:activity.fields.students, 
        tagline:activity.fields.tagline, 
        stats:activity.fields.stats.map((stat)=>({label:stat.fields.label,value:stat.fields.value,icon:stat.fields.icon}))
      })); 
     console.log("final activity:",final); 
     setActivities(final);
    }
    catch (err) {
      console.log("Err in fetching activities..",err);
    } 
    setLoading(false);
  }

  useEffect(() => {
    console.log("user effect working ");
    fetchActivities();
  }, [])


  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        loading,
        setLoading,
        showSplash,
        setShowSplash, 
        activities, 
        setActivities
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
