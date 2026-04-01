import React from "react";
import { motion } from "framer-motion";
import { Flame, Clock, Users, Star } from "lucide-react";

// 1) Bring in your WhatsApp helper
const handleWhatsApp = () => {
  const phoneNumber = import.meta.env?.VITE_WHATSAPP_NUMBER;
  if (!phoneNumber) {
    console.error("WhatsApp number not found in environment variables!");
    return;
  }
  const msg = encodeURIComponent("Hello Royal Hyderabadi! I'd like to place an order.");
  window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${msg}`;
};

const BiryaniIntroSection = () => {
  const brandColor = "#3b271e";

  // 2) Feature highlights data
  const features = [
    { icon: Flame, label: "Authentic Spice", description: "Traditional Hyderabadi blend" },
    { icon: Clock, label: "Fresh Daily", description: "Made to order, never stale" },
    { icon: Users, label: "Family Favorite", description: "Trusted for 25+ years" },
    { icon: Star, label: "5-Star Quality", description: "Premium ingredients always" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-white w-full overflow-hidden px-4 py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            <span style={{ color: brandColor }}>The Royal Hyderabadi Experience</span> 
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the true flavor of Hyderabadi biryani, made with high-quality ingredients and age-old cooking techniques that have been handed down through the generations.
          </p>
        </motion.div>

        {/* MAIN LAYOUT — single image + content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          
          {/* SINGLE IMAGE (no box, no second floating image) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            // className="h-96 sm:h-500px md:h-600px"
          >
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              src="./src/assets/Chicken Biryani .png"
              alt="Premium Chicken Biryani"
              style={{width: "500px"}}
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=2020&auto=format&fit=crop";
              }}
            />
          </motion.div>

          {/* RIGHT: Content section with staggered animations */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 md:gap-8"
          >
            {/* Section title */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Perfection in Every Grain
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                Our biryani is not merely a dish; it is a celebration of flavors. Every grain of basmati rice is marinated in the flavors of aromatic spices, tender meat, and a hint of royal heritage. From the slow-cooked dum pukht method to the precise layering of ingredients, every aspect of our biryani is designed to provide an unforgettable experience.
              </motion.p>
            </div>

            {/* Feature highlights grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 39, 30, 0.15)" }}
                    className="bg-linear-to-br from-amber-50 to-orange-50 p-4 md:p-6 rounded-xl border border-amber-200/50 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="mb-3"
                    >
                      <Icon
                        size={28}
                        style={{ color: brandColor }}
                        className="font-bold"
                      />
                    </motion.div>
                    <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                      {feature.label}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button -> WhatsApp */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${brandColor}40` }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: brandColor,cursor: "pointer" }}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
              onClick={handleWhatsApp} // ← integrated your .env phone logic
            >
              Order Your Biryani Now
            </motion.button>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-3 text-sm text-gray-600"
            >
             
            
            </motion.div>
          </motion.div>
        </div>

        {/* "Why Choose Us" bottom section (unchanged, optional) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-linear-to-r from-amber-50 via-orange-50 to-red-50 rounded-2xl p-8 md:p-12 border border-amber-200/30"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Royal Hyderabadi Biryani?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Premium Ingredients",
                description: "Sourced from the finest suppliers, we use aged basmati rice, tender meat, and imported spices."
              },
              {
                title: "Traditional Recipe",
                description: "Prepared using the authentic dum pukht method, slow-cooked to perfection for maximum flavor."
              },
              {
                title: "Hygienic Preparation",
                description: "Cooked in our state-of-the-art kitchen with strict hygiene standards and quality control."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BiryaniIntroSection;