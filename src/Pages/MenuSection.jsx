import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// ─── Food Data ────────────────────────────────────────────────────────────────
const menuData = {
  "Today's Special": [
    {
      id: 1,
      image: "https://royalhyderabadioman.com/wp-content/uploads/2026/02/Mutton-Marag-1024x720.jpg",
      title: "Mutton Marag",
      description: "A traditional Hyderabadi delicacy, Mutton Marag is a light yet flavorful soup made with tender mutton, aromatic spices, and slow-cooked broth—warm, nourishing, and perfect to start a royal meal.",
    },
    {
      id: 2,
      image: "./src/assets/Nihari Paya.jpg",
      title: "Nihari Paya",
      description: "A classic Hyderabadi specialty, Nihari Paya is a rich, slow-cooked stew made from tender trotters simmered overnight with aromatic spices, delivering deep flavor, warmth, and a truly traditional taste.",
    },
    {
      id: 3,
      image: "https://royalhyderabadioman.com/wp-content/uploads/2026/02/Haleem-2-1-1024x720.jpg",
      title: "Hyderabadi Haleem",
      description: "Stone-baked margherita with San Marzano tomatoes & buffalo mozzarella.",
    },
    {
      id: 4,
      image: "https://royalhyderabadioman.com/wp-content/uploads/2026/02/Bheja-Fry-1024x720.jpg",
      title: "Bheja Fry",
      description: "A rich and flavorful Hyderabadi delicacy made from tender brain, slow-cooked with aromatic spices, onions, and herbs, then lightly fried to perfection for a creamy texture and bold taste. Perfect as a royal starter or lunch accompaniment.",
    },
  ],
  Breakfast: [
    {
      id: 5,
      image: "./src/assets/Kheema.jpg",
      title: "Kheema",
      description: "Finely minced meat cooked with onions, green chilies, and aromatic spices, delivering a bold, hearty flavor that makes it a popular choice for breakfast or lunch.",
    },
    {
      id: 6,
      image: "./src/assets/Hyderabadi Paratha.jpg",
      title: "Hyderabadi Special Paratha",
      description: "Crispy and soft paratha cooked with light oil made from wheat flour, oil, salt and water. A traditional hyderabadi breakfast special that is flaky and delicious.",
    },
    {
      id: 7,
      image: "./src/assets/Bindi.jpg",
      title: "Bindi Fry",
      description: "Bindi and oil cooked with light spices, a simple yet flavorful dish that pairs perfectly with paratha or rice for a satisfying breakfast ",
    },
    {
      id: 8,
      image: "./src/assets/Chana Masala.jpg",
      title: "Chana Masala",
      description: "Aromatic chickpea curry cooked with tomatoes, onions and traditional spices creating a rich flavorful gravy that is both hearty and satisfying",
    },
  ],
  Lunch: [
    {
      id: 9,
      image: "./src/assets/Chicken Dum Biryani.jpg",
      title: "Hyderabadi Special Chicken Dum Biryani",
      description: "Classic Hyderabadi biryani made with tender chicken, fragrant basmati rice, and traditional spices, slow-cooked on dum to seal in rich aroma and flavor.",
    },
    {
      id: 10,
      image: "./src/assets/Mutton Biryani.jpg",
      title: "Hyderabadi Special Mutton Biryani",
      description: "Fragrant basmati rice layered with spiced fresh mutton. Slow-cooked on dum for rich, authentic flavorHerb-marinated chicken, avocado, mixed greens & chipotle mayo.",
    },
    {
      id: 11,
      image: "./src/assets/Chicken Tikka Masala.jpg",
      title: "Chicken Masala",
      description: "chicken, onions, tomatoes, ginger, garlic, green chilies, turmeric, cumin, coriander powder, oil, salt.",
    },
    {
      id: 12,
      image: "./src/assets/Mutton Masala.jpg",
      title: "Mutton Masala",
      description: "Mutton cooked in a rich, spiced tomato-based gravy, perfect for those who love a hearty and flavorful dish.",
    },
  ],
  Dinner: [
    {
      id: 13,
      image: "./src/assets/Chicken Dum Biryani.jpg",
      title: "Hyderabadi Special Chicken Dum Biryani",
      description: "Classic Hyderabadi biryani made with tender chicken, fragrant basmati rice, and traditional spices, slow-cooked on dum to seal in rich aroma and flavor.",
    },
    {
      id: 14,
      image: "./src/assets/Mutton Biryani.jpg",
      title: "Hyderabadi Special Mutton Biryani",
      description: "Fragrant basmati rice layered with spiced fresh mutton. Slow-cooked on dum for rich, authentic flavorHerb-marinated chicken, avocado, mixed greens & chipotle mayo.",
    },
    {
      id: 15,
      image: "./src/assets/Mutton Kadhai.jpg",
      title: "Mutton Kadhai",
      description: "Tender mutton cooked in a traditional kadhai with aromatic spices, tomatoes, and bell peppers. A rich and flavorful gravy that captures authentic culinary traditions with every bite",
    },
    {
      id: 16,
      image: "./src/assets/Dum_ka_Chicken.jpg",
      title: "Dum ka Chicken",
      description: "chicken, yogurt, onions, cashews, ginger, garlic, cardamom, cloves, cinnamon, saffron, oil, salt.",
    },
  ],
  Drinks: [
    {
      id: 17,
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
      title: "Signature Cocktail",
      description: "House-crafted blend of aged rum, passion fruit, lime & aromatic bitters.",
    },
    {
      id: 18,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
      title: "Cold Brew Coffee",
      description: "12-hour steeped single origin, served over ice with oat cream swirl.",
    },
    {
      id: 19,
      image: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=600&q=80",
      title: "Mango Lassi",
      description: "Alphonso mango blended with yogurt, cardamom & a hint of rose water.",
    },
    {
      id: 20,
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80",
      title: "Fresh Pressed Juices",
      description: "Seasonal blend of cold-pressed fruits & vegetables, zero additives.",
    },
  ],
  Desserts: [
    {
      id: 21,
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80",
      title: "Chocolate Fondant",
      description: "Warm dark chocolate lava cake with salted caramel & vanilla gelato.",
    },
    {
      id: 22,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
      title: "Crème Brûlée",
      description: "Classic vanilla custard with caramelised sugar crust & fresh berries.",
    },
    {
      id: 23,
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
      title: "Berry Pavlova",
      description: "Crisp meringue with Chantilly cream, seasonal berries & passion curd.",
    },
    {
      id: 24,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
      title: "Mango Panna Cotta",
      description: "Silky Italian cream dessert with fresh mango coulis & mint sugar.",
    },
  ],
};

const tabs = Object.keys(menuData);

// ─── Tab Icons ─────────────────────────────────────────────────────────────────
const tabIcons = {
  "Today's Special": "✦",
  Breakfast: "☀",
  Lunch: "◎",
  Dinner: "◑",
  Drinks: "❧",
  Desserts: "❋",
};

// ─── Card Component ────────────────────────────────────────────────────────────
function MenuCard({ item, index }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 20px 60px rgba(38,20,10,0.18)"
          : "0 4px 24px rgba(38,20,10,0.07)",
        transition: "box-shadow 0.35s ease",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: "210px" }}>
        <motion.img
          src={item.image}
          alt={item.title}
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(38,20,10,0.55) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        {/* Badge */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            background: "#26140a",
            color: "#f5e8d8",
            fontSize: "11px",
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            letterSpacing: "0.06em",
            padding: "4px 12px",
            borderRadius: "999px",
          }}
        >
          20% OFF
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "22px 24px 24px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "10px",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: "20px",
            fontWeight: 700,
            color: "#26140a",
            lineHeight: 1.25,
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontFamily: "'Lato', sans-serif",
            fontSize: "14px",
            color: "#7a5c47",
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {item.description}
        </p>
       

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/menu")}
          style={{
            background: "#442713",
            color: "#f5e8d8",
            border: "none",
            borderRadius: "10px",
            padding: "12px 0",
            fontFamily: "'Lato', sans-serif",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          More Menu
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="#f5e8d8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}

// ─── Main Menu Section ─────────────────────────────────────────────────────────
export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("Today's Special");

  return (
    <section
      style={{
        background: "#faf5f0",
        padding: "96px 0 112px",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&display=swap');

        .menu-tab-btn {
          position: relative;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 12px 22px;
          font-family: 'Lato', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9e7a5f;
          border-radius: 10px;
          transition: color 0.25s ease;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .menu-tab-btn:hover { color: #26140a; }
        .menu-tab-btn.active { color: #26140a; }
        .menu-tab-btn .icon {
          font-size: 16px;
          line-height: 1;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        @media (max-width: 1200px) {
          .menu-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .menu-grid { grid-template-columns: 1fr; }
          .menu-tab-btn { padding: 10px 14px; font-size: 12px; }
        }

        .tabs-scroll {
          display: flex;
          overflow-x: auto;
          scrollbar-width: none;
          gap: 10px;
        }
        .tabs-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "17px",
              color: "#ffb900",
              marginBottom: "10px",
            }}
          >
            Crafted with passion
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: "#442713",
              margin: "0 0 16px",
              lineHeight: 1.15,
            }}
          >
            Our Menu
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: "60px",
              height: "3px",
              background: "#26140a",
              borderRadius: "2px",
              margin: "0 auto",
              transformOrigin: "center",
            }}
          />
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "8px",
            marginBottom: "48px",
            boxShadow: "0 2px 20px rgba(38,20,10,0.07)",
            border: "1px solid #f0e0d0",
            
          }}
        >
          <div className="tabs-scroll">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`menu-tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
                style={{ flex: "0 0 auto" }}
              >
                {/* Active pill background */}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-active-bg"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "#442713",
                      borderRadius: "10px",
                    }}
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                )}
                <span
                  className="icon"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    color: activeTab === tab ? "#f5e8d8" : "#ffb900",
                  }}
                >
                  {tabIcons[tab]}
                </span>
                <span
                  style={{
                    position: "relative",
                    zIndex: 1,
                    color: activeTab === tab ? "#f5e8d8" : undefined,
                  }}
                >
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="menu-grid"
          >
            {menuData[activeTab].map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: "56px" }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#9e7a5f",
              fontSize: "15px",
              marginBottom: "20px",
            }}
          >
            Explore our full collection of dishes
          </p>
          <motion.a
            href="/menu"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "transparent",
              border: "2px solid #26140a",
              color: "#26140a",
              borderRadius: "12px",
              padding: "14px 36px",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            View Full Menu
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="#26140a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}