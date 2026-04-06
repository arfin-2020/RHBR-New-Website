import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Globe, Menu, X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";



// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);

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
  try {
    window.location.reload();
  } catch {
    window.location.href = window.location.href;
  }
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation(); // ✅ Track current page for active state
  
  const currentLang = typeof window !== "undefined"
    ? (localStorage.getItem("siteLang") || "en")
    : "en";
  const isArabic = currentLang === "ar";
  const brandColor = "#26140a";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Focus trap + body scroll lock for mobile drawer
  const drawerRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      const first = drawerRef.current?.querySelector("a");
      first?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleWhatsApp = () => {
    const phoneNumber = import.meta.env?.VITE_WHATSAPP_NUMBER;
    if (!phoneNumber) {
      console.error("WhatsApp number not found in environment variables!");
      return;
    }
    const msg = encodeURIComponent("Hello Royal Hyderabadi! I'd like to place an order.");
    window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${msg}`;
  };

  // ✅ Centralized navigation data
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Offers", path: "/offers" },
    { name: "Contact", path: "/contact" },
  ];

  // ✅ Check if current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      style={{ backgroundColor: brandColor }}
      className="fixed top-0 w-full z-50 text-white shadow-2xl backdrop-blur-lg bg-opacity-95 px-4 sm:px-6 py-3 transition-all duration-300"
      dir="ltr"
      aria-label="Site navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO — Responsive with hover animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300 shrink-0"
          >
            <img
              src="/assets/Logo Header.png"
              alt="Royal Hyderabadi Logo"
              className=" sm:h-12 md:h-14 lg:h-16 object-contain transition-all duration-300"
              style={{ width: "350px", height: "75.5288px" }}
            />
          </Link>
        </motion.div>

        {/* CENTER: Desktop Navigation — Premium animations */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <Link

              
                to={item.path}
                className={`relative text-sm font-semibold tracking-wide transition-all duration-300 py-2 px-3 rounded-md group ${
                  isActive(item.path)
                    ? "text-amber-300"
                    : "text-white hover:text-amber-300"
                }`}
              >
                {/* ✅ Active state background */}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-amber-400/10 rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 40 }}
                  />
                )}

                <div className="flex items-center gap-1">
                  <span>{item.name}</span>
                  {isActive(item.path) && (
                    <motion.div
                      initial={{ x: -8, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ChevronRight size={14} className="text-amber-300" />
                    </motion.div>
                  )}
                </div>

                {/* ✅ Animated underline on hover */}
                {!isActive(item.path) && (
                  <motion.span
                    className="absolute -bottom-1 left-3 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "calc(100% - 24px)" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle — Smooth rotation animation */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => switchLanguage(isArabic ? "en" : "ar")}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-white/40 hover:border-white/60 hover:bg-white/10 transition-all duration-300 font-medium text-xs sm:text-sm relative overflow-hidden group"
            aria-label={`Switch language to ${isArabic ? "English" : "Arabic"}`}
          >
            {/* ✅ Animated background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-transparent -z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              animate={{ rotate: isArabic ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Globe size={16} />
            </motion.div>
            <span className="font-bold">{isArabic ? "EN" : "AR"}</span>
          </motion.button>

          {/* Order Now — Desktop with enhanced animation */}
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm shadow-xl transition-all duration-300 relative overflow-hidden group"
            aria-label="Order via WhatsApp"
          >
            {/* ✅ Animated background shimmer */}
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />

            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageCircle size={18} />
            </motion.div>
            <span className="relative z-10">Order Now</span>
          </motion.button>

          {/* Mobile Hamburger — Smooth rotation */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-300"
            onClick={() => setIsOpen((s) => !s)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* MOBILE DRAWER — Enhanced with staggered animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={drawerRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#2a1b15] to-[#1f1410] border-t border-white/10 flex flex-col p-6 pt-4 gap-3 shadow-2xl overflow-hidden"
          >
            {/* ✅ Staggered entrance animation for nav items */}
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 300 }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center justify-between text-lg font-semibold border-b border-white/5 pb-3 last:pb-0 last:border-0 transition-all duration-300 group ${
                    isActive(item.path)
                      ? "text-amber-300"
                      : "text-white hover:text-amber-300"
                  }`}
                >
                  <span>{item.name}</span>

                  {/* ✅ Animated arrow on active */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: isActive(item.path) ? 1 : 0,
                      x: isActive(item.path) ? 0 : -10,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}

            {/* Mobile WhatsApp Button — Animated entrance */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.08 + 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setIsOpen(false); handleWhatsApp(); }}
              className="mt-4 w-full bg-gradient-to-r from-green-600 to-green-500 py-3 rounded-xl font-bold flex justify-center items-center gap-2 hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg relative overflow-hidden group"
            >
              {/* ✅ Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MessageCircle size={20} />
              </motion.div>
              <span className="relative z-10">Order on WhatsApp</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;