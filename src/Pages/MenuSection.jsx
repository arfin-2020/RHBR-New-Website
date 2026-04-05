import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  UtensilsCrossed,
} from "lucide-react";

// ─── Brand Color ────────────────────────────────────────────────────────────
const BRAND_COLOR = "#26140a";
const BRAND_LIGHT = "#3b271e";
const BRAND_LIGHTER = "#f5e8d8";
const MotionLink = motion.create(Link);


// ─── Food Data ────────────────────────────────────────────────────────────────
const menuData = {
  "Today's Special": [
    {
      id: 1,
      image:
        "https://royalhyderabadioman.com/wp-content/uploads/2026/02/Mutton-Marag-1024x720.jpg",
      title: "Mutton Marag",
      description:
        "A traditional Hyderabadi delicacy, Mutton Marag is a light yet flavorful soup made with tender mutton, aromatic spices, and slow-cooked broth.",
      badge: "⭐ Special",
    },
    {
      id: 2,
      image: "./assets/Nihari Paya.jpg",
      title: "Nihari Paya",
      description:
        "A classic Hyderabadi specialty, Nihari Paya is a rich, slow-cooked stew made from tender trotters simmered overnight.",
      badge: "🔥 Hot",
    },
    {
      id: 3,
      image:
        "https://www.foodaholic.biz/wp-content/uploads/2013/08/aviary-image-1620742447534-768x1024.jpg",
      title: "Hyderabadi Haleem",
      description:
        "Stone-baked traditional haleem with tender meat and lentils slow-cooked to perfection with aromatic spices.",
      badge: "🏆 Signature",
    },
    {
      id: 4,
      image:
        "https://royalhyderabadioman.com/wp-content/uploads/2026/02/Bheja-Fry-1024x720.jpg",
      title: "Bheja Fry",
      description:
        "A rich and flavorful Hyderabadi delicacy made from tender brain, slow-cooked with aromatic spices and herbs.",
      badge: "⭐ Special",
    },
  ],
  Breakfast: [
    {
      id: 5,
      image: "./assets/Kheema.jpg",
      title: "Kheema",
      description:
        "Finely minced meat cooked with onions, green chilies, and aromatic spices, delivering bold, hearty flavor.",
      badge: "☀️ Fresh",
    },
    {
      id: 6,
      image: "./assets/Hyderabadi Paratha.jpg",
      title: "Hyderabadi Special Paratha",
      description:
        "Crispy and soft paratha cooked with light oil, flaky and delicious traditional breakfast special.",
      badge: "🍳 Popular",
    },
    {
      id: 7,
      image: "./assets/Bindi.jpg",
      title: "Bindi Fry",
      description:
        "Bindi cooked with light spices, a simple yet flavorful dish that pairs perfectly with paratha.",
      badge: "🥒 Light",
    },
    {
      id: 8,
      image: "./assets/Chana Masala.jpg",
      title: "Chana Masala",
      description:
        "Aromatic chickpea curry cooked with tomatoes, onions and traditional spices creating a rich gravy.",
      badge: "🌟 Vegan",
    },
  ],
  Lunch: [
    {
      id: 9,
      image: "./assets/Chicken Dum Biryani.jpg",
      title: "Hyderabadi Special Chicken Dum Biryani",
      description:
        "Classic Hyderabadi biryani made with tender chicken, fragrant basmati rice, slow-cooked on dum.",
      badge: "🏆 Best",
    },
    {
      id: 10,
      image: "./assets/Mutton Biryani.jpg",
      title: "Hyderabadi Special Mutton Biryani",
      description:
        "Fragrant basmati rice layered with spiced fresh mutton. Slow-cooked on dum for rich flavor.",
      badge: "👑 Royal",
    },
    {
      id: 11,
      image: "./assets/Chicken Tikka Masala.jpg",
      title: "Chicken Masala",
      description:
        "Tender chicken cooked in rich, spiced tomato-based gravy with traditional Hyderabadi spices.",
      badge: "🔥 Hot",
    },
    {
      id: 12,
      image: "./assets/Mutton Masala.jpg",
      title: "Mutton Masala",
      description:
        "Mutton cooked in a rich, spiced tomato-based gravy, perfect for those who love hearty dishes.",
      badge: "⭐ Favorite",
    },
  ],
  Dinner: [
    {
      id: 13,
      image: "./assets/Chicken Dum Biryani.jpg",
      title: "Hyderabadi Special Chicken Dum Biryani",
      description:
        "Classic Hyderabadi biryani made with tender chicken, fragrant basmati rice, slow-cooked on dum.",
      badge: "🏆 Best",
    },
    {
      id: 14,
      image: "./assets/Mutton Biryani.jpg",
      title: "Hyderabadi Special Mutton Biryani",
      description:
        "Fragrant basmati rice layered with spiced fresh mutton. Slow-cooked on dum for rich flavor.",
      badge: "👑 Royal",
    },
    {
      id: 15,
      image: "./assets/Mutton Kadhai.jpg",
      title: "Mutton Kadhai",
      description:
        "Tender mutton cooked in a traditional kadhai with aromatic spices, tomatoes, and bell peppers.",
      badge: "🌶️ Spicy",
    },
    {
      id: 16,
      image: "./assets/Dum_ka_Chicken.jpg",
      title: "Dum ka Chicken",
      description:
        "Chicken slow-cooked with yogurt, cashews, cardamom, cloves, and saffron for ultimate richness.",
      badge: "✨ Premium",
    },
  ],
  Drinks: [
    {
      id: 17,
      image: "./assets/Karak Tea.jpg",
      title: "Hyderabadi Special Chai",
      description:
        "Hyderabadi special chai, often called Irani Chai, is a rich, creamy, and strong tea.",
      badge: "☕ Hot",
    },
    {
      id: 18,
      image: "./assets/Kinza.jpg",
      title: "Kinza",
      description: "Refreshing soft drink, perfect to complement your meal.",
      badge: "🥤 Cool",
    },
    {
      id: 19,
      image: "./assets/Pepsi.jpg",
      title: "Pepsi",
      description: "Classic cola soft drink to refresh your palate.",
      badge: "🥤 Cool",
    },
    {
      id: 20,
      image: "./assets/Water.jpg",
      title: "Water",
      description: "Pure mineral water for your hydration.",
      badge: "💧 Pure",
    },
  ],
  Desserts: [
    {
      id: 21,
      image: "./assets/Gulab.jpg",
      title: "Gulab Jamun - 2 pcs",
      description:
        "Milk solids, flour, sugar, cardamom, rose water, ghee. A classic sweet treat.",
      badge: "🍮 Sweet",
    },
    {
      id: 22,
      image: "./assets/Kaddu Kheer.jpg",
      title: "Kaddu Kheer",
      description:
        "Bottle gourd, milk, sugar, sago pearls, nuts, cardamom, ghee.",
      badge: "🍯 Rich",
    },
    {
      id: 23,
      image: "./assets/Badam Ki Kheer.jpg",
      title: "Badam Ki Kheer Pudding",
      description:
        "Creamy almond pudding made with ground almonds, milk and rice cooked to silky perfection.",
      badge: "🥜 Premium",
    },
    {
      id: 24,
      image: "./assets/Gajar Ka Halwa.jpg",
      title: "Special Gajar Ka Halwa",
      description:
        "Fresh carrots simmered in milk and ghee. Sweet, rich, and full of classic flavor.",
      badge: "🌟 Iconic",
    },
  ],
};

const tabs = Object.keys(menuData);

const tabIcons = {
  "Today's Special": "✦",
  Breakfast: "☀",
  Lunch: "🍽️",
  Dinner: "🌙",
  Drinks: "☕",
  Desserts: "🍰",
};

// ─── Card Component ────────────────────────────────────────────────────────────
function MenuCard({ item, index }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.23, 1, 0.32, 1],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* ✅ Card container with fixed height */}
      <div
        className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
        style={{ minHeight: "520px" }}
      >
        {/* ✅ Image Container with fixed height */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-200 flex-shrink-0">
          <motion.img
            src={item.image}
            alt={item.title}
            animate={{ scale: isHovered ? 1.12 : 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/300x250?text=" + item.title;
            }}
          />

          {/* ✅ Gradient overlay */}
          <motion.div
            animate={{ opacity: isHovered ? 0.8 : 0.5 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
          />

          {/* ✅ Badge with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            className="absolute top-4 right-4 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            {item.badge}
          </motion.div>

          {/* ✅ Floating action icon on hover */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 right-4 rounded-full p-3 shadow-lg"
            style={{ backgroundColor: BRAND_LIGHTER }}
          >
            <UtensilsCrossed size={20} style={{ color: BRAND_COLOR }} />
          </motion.div>
        </div>

        {/* ✅ Content section — Fixed padding & height */}
        <div className="p-5 sm:p-6 flex flex-col gap-3 flex-grow">
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.08 + 0.2, duration: 0.4 }}
            className="text-lg sm:text-xl font-bold text-gray-900 leading-tight group-hover:text-white transition-colors duration-300"
            style={{ color: isHovered ? BRAND_COLOR : "#111827" }}
          >
            {item.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.08 + 0.25, duration: 0.4 }}
            className="text-sm text-gray-600 line-clamp-2 leading-relaxed flex-grow"
          >
            {item.description}
          </motion.p>

          {/* ✅ CTA Button with brand color */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/menu")}
            className="w-full mt-auto text-white font-bold py-3 rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            style={{
              backgroundColor: BRAND_COLOR,
              marginTop: "auto",
            }}
          >
            <span>View Details</span>
            <motion.svg
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8h10M8 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Menu Section ─────────────────────────────────────────────────────────
export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("Today's Special");
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 20);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 300;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="py-20 md:py-28 px-4 sm:px-6"
      style={{ background: "#faf5f0" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&display=swap');

        .tab-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .tab-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* ✅ Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#26140a] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Signature Menu
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Discover our exquisite selection of traditional Hyderabadi dishes
            that are made with love and high-quality ingredients.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="h-1 w-16 rounded-full mx-auto mt-6"
            style={{ background: BRAND_COLOR }}
          />
        </motion.div>

        {/* ✅ Tabs Section — CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 md:mb-20"
        >
          <div
            className="bg-white rounded-2xl p-2 shadow-lg border relative group"
            style={{ borderColor: `${BRAND_COLOR}20` }}
          >
            {/* Left scroll button */}
            <AnimatePresence>
              {canScrollLeft && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:opacity-80 transition-all"
                  style={{
                    background: `linear-gradient(to right, white, transparent)`,
                  }}
                >
                  <ChevronLeft size={24} style={{ color: BRAND_COLOR }} />
                </motion.button>
              )}
            </AnimatePresence>

            {/* ✅ Tabs scroll container — CENTERED with justify-center */}
            <div
              className="flex gap-2 overflow-x-auto tab-scroll px-4 justify-center"
              ref={scrollRef}
              style={{ scrollBehavior: "smooth" }}
            >
              {tabs.map((tab, idx) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  layout
                  className={`relative px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl shadow-lg"
                      style={{ backgroundColor: BRAND_COLOR }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 text-lg">{tabIcons[tab]}</span>
                  <span className="relative z-10">{tab}</span>
                </motion.button>
              ))}
            </div>

            {/* Right scroll button */}
            <AnimatePresence>
              {canScrollRight && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:opacity-80 transition-all"
                  style={{
                    background: `linear-gradient(to left, white, transparent)`,
                  }}
                >
                  <ChevronRight size={24} style={{ color: BRAND_COLOR }} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ✅ Cards Grid — CONSISTENT SPACING */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16"
          >
            {menuData[activeTab].map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ✅ Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center pt-8"
          style={{ borderTopColor: `${BRAND_COLOR}20`, borderTopWidth: "1px" }}
        >
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center pt-8"
            style={{
              borderTopColor: `${BRAND_COLOR}20`,
              borderTopWidth: "1px",
            }}
          >
            <p className="text-gray-600 text-lg mb-6">
              Want to explore our complete collection?
            </p>

            {/* Corrected implementation using MotionLink */}
            <MotionLink
              to="/menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // Combines styles from previous motion.a and Link
              className="inline-flex items-center gap-3 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90 shrink-0"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              <span>View Complete Menu</span>

              {/* Icon */}
              <motion.svg
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3 10h14M10 3l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </MotionLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
