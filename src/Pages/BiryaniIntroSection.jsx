import React from "react";
import { motion } from "framer-motion";

const BiryaniIntroSection = () => {
  const brandColor = "#3b271e";

  return (
 <section className="bg-white w-full overflow-hidden px-4 py-8 md:py-16">
      <div className="max-w-1440px mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
          {/* Left Image Part */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1], 
              delay: 0.5 
            }}

            className="w-full h-300px sm:h-400px md:h-650px"
          >
            <img
              src="./src/assets/Left.png"
              alt="Biryani Left"
           
              style={{ width: "909", height: "754", }}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2070&auto=format&fit=crop";
              }}
            />
          </motion.div>

          {/* Right Image Part */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5 
            }}
            className="w-full h-300px sm:h-400px md:h-650px"
          >
            <img
              src="./src/assets/Chicken Biryani .png"
              alt="Biryani Right"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?q=80&w=2020&auto=format&fit=crop";
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BiryaniIntroSection;
