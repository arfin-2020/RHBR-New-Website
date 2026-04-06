import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
    OFFERS DATA
───────────────────────────────────────────── */
const OFFERS = [
  {
    id: 1,
    title: "Chicken Sorba",
    tagline: "Friday Special",
    shortDesc: "Chicken Shorba (Sorba) is a comforting spiced chicken soup made with tender chicken, aromatic spices, and herbs. It’s light yet flavorful, often enjoyed with bread or rice, and is perfect for cooler evenings.",
    price: "OMR 0.600",
    originalPrice: "OMR 1.200",
    saving: "Save 22%",
    validity: "Friday Only · 08:00 AM – 1:00 PM",
    image: "./assets/Chicken Sorba.jpg",
  },
  {
    id: 2,
    title: "3 Options of Daily Meal",
    tagline: "Complete Meal",
    shortDesc: "3 Meals 45 RO, 2 Meals 40 RO, 1 Meal 25 RO. Enjoy a complete meal with our daily meal offers.",
    price: "OMR 45, 40, 25",
    originalPrice: "OMR 50, 45, 30",
    saving: "Save 25%",
    validity: "Everyday",
    image: "./assets/Monthly Mess.jpg",
  },
  {
    id: 3,
    title: "Nihari Paya with 1 Paratha",
    tagline: "Friday Special",
    shortDesc: "Nihari Paya is a rich, slow-cooked South Asian delicacy that combines two iconic dishes: Nihari (a spicy, aromatic stew usually made with beef or mutton shank) and Paya (trotters, usually goat or cow).",
    price: "OMR 1.200",
    originalPrice: "OMR 2.00",
    saving: "Full Menu",
    validity: "All day Friday",
    image: "./assets/Nehari Paya Come wih 1 Paratha.jpg",
  },
  {
    id: 4,
    title: "Fresh Hyderabadi Chicken Biryani (Regular)",
    tagline: "All You Can Eat",
    shortDesc: "Every Friday & Saturday morning, indulge in our unlimited Hyderabadi brunch spread with live cooking stations.",
    price: "OMR 0.990",
    originalPrice: "OMR 1.800",
    saving: "Per Person",
    validity: "Everyday",
    image: "./assets/Ramadan Biryani Poster.jpg",
  },
  {
    id: 5,
    title: "We are on Talabat",
    tagline: "First Order get 20% Off",
    shortDesc: "You can now order from your comfort zone and enjoy our delicious meals with just a few clicks. Get 20% off on your first order through Talabat.",
    price: "",
    originalPrice: null,
    saving: "+ 10% OFF",
    // validity: "On your birthday · Valid ID required",
    image: "./assets/Talabat Poster Design copy.jpg",
  },
  {
    id: 6,
    title: "Aloo Capsicum",
    tagline: "Breakfast Special",
    shortDesc: "Vegetarian delight! Aloo Capsicum is a flavorful Indian dish made with tender potatoes and vibrant bell peppers, cooked in a blend of aromatic spices. Perfect for breakfast or as a side dish.",
    price: "0.400 Bz",
    originalPrice: null,
    saving: "Groups of 8+",
    validity: "Mon – Thu · Groups of 8+",
    image: "./assets/Aloo Capsicum 3copy.jpg",
  },
  {
    id: 7,
    title: "Special Karak Chai",
    tagline: "Special Tea",
    shortDesc: "Charak Tea is a flavorful and aromatic tea blend that combines strong black tea with a mix of traditional spices like cardamom, cinnamon, ginger, and cloves. It’s a comforting and invigorating beverage enjoyed across the Middle East and South Asia.",
    price: "0.100 Bz",
    originalPrice: null,
    saving: "Groups of 8+",
    validity: "Everyday",
    image: "./assets/Charak Tea.jpg",
  },
];

/* ─────────────────────────────────────────────
    COMPONENTS
───────────────────────────────────────────── */

const GoldLine = ({ style = {} }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", ...style }}>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(184,137,58,0.3))" }} />
    <svg width="8" height="8" viewBox="0 0 24 24" fill="#b8893a">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(184,137,58,0.3))" }} />
  </div>
);

function OfferCard({ offer, index, onClick }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => onClick(offer)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        background: "#fff",
        border: "1px solid rgba(59,39,30,0.08)",
        boxShadow: "0 4px 20px rgba(38,20,10,0.06)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", width: "100%", paddingTop: "100%", overflow: "hidden", background: "#f0e8dd" }}>
        {!imgLoaded && <div className="shimmer-effect" style={{ position: "absolute", inset: 0 }} />}
        <motion.img
          src={offer.image}
          alt={offer.title}
          onLoad={() => setImgLoaded(true)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            opacity: imgLoaded ? 1 : 0,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)" }} />
      </div>

      <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#b8893a", marginBottom: "0.4rem" }}>
          {offer.tagline}
        </span>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "#26140a", marginBottom: "0.6rem" }}>
          {offer.title}
        </h3>
        <p style={{ fontSize: "0.85rem", color: "rgba(38,20,10,0.6)", lineHeight: 1.6, marginBottom: "1.2rem", flex: 1 }}>
          {offer.shortDesc}
        </p>
        
        <div style={{ height: "1px", background: "rgba(0,0,0,0.05)", marginBottom: "1rem" }} />
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            {offer.originalPrice && (
              <span style={{ fontSize: "0.75rem", textDecoration: "line-through", color: "rgba(0,0,0,0.3)", display: "block" }}>
                {offer.originalPrice}
              </span>
            )}
            <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#26140a" }}>{offer.price}</span>
          </div>
          <span style={{ fontSize: "0.7rem", color: "#b8893a", fontWeight: 700 }}>{offer.validity}</span>
        </div>
      </div>
    </motion.article>
  );
}

function ImageModal({ offer, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(10px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
      }}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        style={{
          position: "absolute", top: "2rem", right: "2rem",
          background: "white", border: "none", borderRadius: "50%",
          width: 40, height: 40, cursor: "pointer", zIndex: 10001,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#26140a" strokeWidth="3">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </motion.button>

      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        src={offer.image}
        alt={offer.title}
        style={{
          maxWidth: "100%", maxHeight: "90vh",
          borderRadius: 12, objectFit: "contain",
          boxShadow: "0 30px 100px rgba(0,0,0,0.8)"
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
    MAIN PAGE
───────────────────────────────────────────── */
export default function OffersPage() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <div style={{ background: "#faf5f0", minHeight: "100vh" }}>
      <section style={{
        background: "linear-gradient(135deg, #26140a 0%, #3d1a0b 100%)",
        padding: "10rem 0 8rem", textAlign: "center", color: "#f5e8d8"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ padding: "0 1rem" }}
        >
          <span style={{ textTransform: "uppercase", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.3em", color: "#c9a24e", border: "1px solid rgba(201,162,78,0.3)", padding: "0.5rem 1.2rem", borderRadius: 50 }}>
            Limited Time
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", margin: "1.5rem 0", fontWeight: 700 }}>
            Royal <em style={{ color: "#c9a24e", fontStyle: "italic" }}>Offers</em>
          </h1>
        
         
        </motion.div>
      </section>

      <section style={{ padding: "6rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="offers-grid">
            {OFFERS.map((offer, i) => (
              <OfferCard key={offer.id} offer={offer} index={i} onClick={setSelectedOffer} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedOffer && (
          <ImageModal offer={selectedOffer} onClose={() => setSelectedOffer(null)} />
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;700;800&display=swap');
        
        body { margin: 0; font-family: 'Lato', sans-serif; }
        
        .offers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .shimmer-effect {
          background: linear-gradient(90deg, #f0e8dd 25%, #e8ddd0 50%, #f0e8dd 75%);
          background-size: 200% 100%;
          animation: shimmer-anim 1.5s infinite;
        }

        @keyframes shimmer-anim {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @media (max-width: 600px) {
          .offers-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}