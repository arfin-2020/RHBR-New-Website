import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const brandColor = "#3b271e";

  const handleWhatsApp = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const msg = encodeURIComponent(
      "Hello Royal Hyderabadi! I'd like to place an order.",
    );
    window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${msg}`;
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen h-svh w-full overflow-hidden flex items-center justify-center font-poppins text-center"
      >
        {/* 1. Background Image with Zoom-in Animation */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="./assets/background.webp"
            alt="Authentic Hyderabadi Biryani"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay - slightly darker on mobile for better text contrast */}
          <div className="absolute inset-0 bg-black/60 md:bg-black/55" />
        </motion.div>

        {/* 2. Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-20 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-[1.1] sm:leading-tight uppercase "
          >
            Royal Taste of <br className="hidden sm:block" />
            <span className="text-amber-500 italic">Hyderabad</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-gray-200 text-sm sm:text-base md:text-xl lg:text-2xl max-w-xs sm:max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-light notranslate px-2"
          >
            Experience the most authentic Hyderabadi Biryani in Muscat. We cater
            bulk orders, buffet, engagements, parties & monthly mess.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-10 sm:mb-12 font-semibold tracking-wide"
          >
            Direct call for order : +968 7260 6555 , +968 72607444
          </motion.p>
          {/* Primary CTA Button with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              onClick={handleWhatsApp}
              className="group relative inline-flex items-center gap-2 sm:gap-3 bg-white text-black px-6 py-3.5 sm:px-10 sm:py-5 rounded-full font-black text-sm sm:text-lg md:text-xl shadow-2xl transition-all overflow-hidden"
              style={{ color: brandColor }}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 w-0 bg-amber-900 transition-all duration-300 ease-out group-hover:w-full opacity-10" />

              <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6" />
              <span>ORDER VIA WHATSAPP</span>
            </motion.button>
          </motion.div>
        </div>

        {/* 3. Scroll Down Indicator - Hidden on very small screens to save space */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden xs:flex flex-col items-center gap-1 sm:gap-2"
        >
          <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={16} className="sm:w-5 sm:h-5" />
          </motion.div>
        </motion.div>

        {/* Custom Styles for the section */}
        <style>{`
        .font-poppins { font-family: 'Poppins', sans-serif; }
        @media (max-height: 500px) {
          #home h1 { font-size: 2.5rem; }
          #home p { margin-bottom: 1rem; }
        }
      `}</style>
      </section>
    </>
  );
};

export default HeroSection;
