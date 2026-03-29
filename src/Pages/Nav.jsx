import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Utensils, Globe, Menu, X } from "lucide-react";

import { Link } from "react-router-dom";

// Reliable language switch from your reference
function switchLanguage(langCode) {
  const host = window.location.hostname;
  sessionStorage.setItem("restoreScroll", String(window.scrollY));
  localStorage.setItem("siteLang", langCode);

  if (langCode === "en") {
    document.cookie =
      "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`;
  } else {
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${host};`;
  }
  window.location.reload();
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = localStorage.getItem("siteLang") || "en";
  const isArabic = currentLang === "ar";
  const brandColor = "#26140a";

  const handleWhatsApp = () => {
    // Access the number from the .env file
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

    if (!phoneNumber) {
      console.error("WhatsApp number not found in environment variables!");
      return;
    }

    const msg = encodeURIComponent(
      "Hello Royal Hyderabadi! I'd like to place an order.",
    );
    window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${msg}`;
  };

  return (
    <nav
      style={{ backgroundColor: brandColor }}
      className="fixed top-0 w-full z-100 text-white shadow-xl px-6 py-4 mb-20"
      dir="ltr" /* FORCES Logo on Left even in Arabic */
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <img
            src="./src/assets/logo.png"
            style={{ width: "80px", height: "80px" }}
          />
          <div className="leading-tight">
            <h1 className="font-bold text-lg text-white tracking-tight uppercase">
              Royal Hyderabadi Biryani Restaurant
            </h1>
            <p className="text-amber-500 text-[10px] uppercase tracking-widest font-bold">
              We ensure Customer Satisfaction
            </p>
          </div>
        </Link>

        {/* CENTER: Navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          {["Home", "About Us", "Menu", "Offers", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-bold uppercase tracking-widest hover:text-amber-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* RIGHT: Buttons */}
        <div className="flex items-center gap-3">
          {/* Toggle Button: Shows 'AR' when in English, 'EN' when in Arabic */}
          <button
            onClick={() => switchLanguage(isArabic ? "en" : "ar")}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-white/30 hover:bg-white/10 transition-all font-bold text-sm"
          >
            <Globe size={16} />
            <span>{isArabic ? "EN" : "AR"}</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-500 px-5 py-2 rounded-full font-bold text-sm shadow-lg active:scale-95 transition-all"
          >
            <MessageCircle size={18} />
            Order Now
          </button>

          {/* Mobile Hamburger */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#2a1b15] border-t border-white/10 flex flex-col p-6 gap-5 overflow-hidden shadow-2xl"
          >
            {["Home", "About Us", "Menu", "Offers", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold border-b border-white/5 pb-2"
              >
                {item}
              </a>
            ))}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-600 py-4 rounded-xl font-bold flex justify-center items-center gap-2"
            >
              <MessageCircle size={20} /> Order on WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
