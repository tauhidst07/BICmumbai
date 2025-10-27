import { useState } from "react";
import SplashScreen from "./SplashScreen";
import { AnimatePresence,motion } from "framer-motion";

const AppWithSplash = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 

export default AppWithSplash;