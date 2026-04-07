import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Globe, Menu, X, ChevronRight } from "lucide-react";
import { Link, useLocation, BrowserRouter } from "react-router-dom";

// ✅ FIXED: Enhanced language switch logic for live servers (Cookie Domain fix)
function switchLanguage(langCode) {
  const host = window.location.hostname;
  // Extract base domain to clear root cookies (e.g., "example.com" from "www.example.com")
  const domainParts = host.split('.');
  const baseDomain = domainParts.length > 1 ? domainParts.slice(-2).join('.') : host;
  
  sessionStorage.setItem("restoreScroll", String(window.scrollY));
  localStorage.setItem("siteLang", langCode);

  const clearCookie = (name) => {
    const domains = [host, `.${host}`, baseDomain, `.${baseDomain}`];
    domains.forEach(d => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${d};`;
    });
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  if (langCode === "en") {
    // Aggressively clear all instances of the translation cookie
    clearCookie("googtrans");
  } else {
    // Set for specific language across possible domain variations
    const cookieValue = `/en/${langCode}`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${host};`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=.${host};`;
    document.cookie = `googtrans=${cookieValue}; path=/;`;
  }

  // Small delay ensures cookies are written before reload
  setTimeout(() => {
    window.location.reload();
  }, 100);
}

// Named export for use in your existing project
export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const currentLang = typeof window !== "undefined" ? localStorage.getItem("siteLang") || "en" : "en";
  const isArabic = currentLang === "ar";
  const brandColor = "#26140a";

  // Handle scroll for professional sticky effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location]);

  const handleWhatsApp = () => {
    // Re-aligned with a safe check for the environment to prevent compilation errors
    // Direct string for stability in the environment; local project uses .env variables
    const phoneNumber = "96872606555";
      
    const msg = encodeURIComponent("Hello Royal Hyderabadi! I'd like to place an order.");
    window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${msg}`;
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Offers", path: "/offers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      style={{ 
        backgroundColor: scrolled ? brandColor : "rgba(38, 20, 10, 0.95)",
        backdropFilter: scrolled ? "blur(12px)" : "none" 
      }}
      className={`fixed top-0 w-full z-50 text-white shadow-2xl transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
      dir="ltr"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        
        {/* LOGO: Professional Responsive Sizing */}
        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/assets/Logo Header.png"
              alt="Royal Hyderabadi Logo"
              className="w-[180px] xs:w-[220px] sm:w-[280px] md:w-[320px] lg:w-[350px] h-auto object-contain transition-all duration-300"
              onError={(e) => { e.target.src = "./src/assets/Logo Header.png"; }}
            />
          </Link>
        </motion.div>

        {/* CENTER: Desktop Navigation (Professional Typography) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 py-2 px-3 rounded-md group ${
                isActive(item.path) ? "text-amber-400" : "text-white hover:text-amber-400"
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {isActive(item.path) && (
                <motion.div layoutId="activeNav" className="absolute inset-0 bg-white/5 rounded-md" />
              )}
              <motion.span 
                className="absolute bottom-1 left-3 h-0.5 bg-amber-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: isActive(item.path) ? "calc(100% - 24px)" : 0 }}
              />
            </Link>
          ))}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Toggle Pill */}
          <button
            onClick={() => switchLanguage(isArabic ? "en" : "ar")}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-all font-bold text-[10px] sm:text-xs tracking-widest cursor-pointer"
          >
            <Globe size={14} className="text-amber-500" />
            <span className="hidden xs:inline">{isArabic ? "ENGLISH" : "العربية"}</span>
            <span className="xs:hidden">{isArabic ? "EN" : "AR"}</span>
          </button>

          {/* Order Button */}
          <button
            onClick={handleWhatsApp}
            className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] px-4 py-2 rounded-full font-black text-[10px] lg:text-xs shadow-lg transition-all active:scale-95 cursor-pointer uppercase tracking-wider"
          >
            <MessageCircle size={16} />
            <span>Order Now</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed top-0 right-0 h-screen w-full sm:w-[320px] bg-[#26140a] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col pt-24 px-10 gap-5 z-[99] border-l border-white/5"
          >
            <button className="absolute top-6 right-6 p-2 text-white/50" onClick={() => setIsOpen(false)}><X size={32} /></button>
            {navItems.map((item, idx) => (
              <motion.div key={item.name} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold uppercase tracking-widest py-3 border-b border-white/5 block ${
                    isActive(item.path) ? "text-amber-500" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <button
              onClick={handleWhatsApp}
              className="mt-6 w-full bg-[#25D366] py-4 rounded-xl font-black uppercase tracking-widest flex justify-center items-center gap-3 text-sm shadow-xl active:scale-95 transition-all"
            >
              <MessageCircle size={20} /> WhatsApp Order
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Default export for the Canvas Preview (includes the required Router context)
export default function App() {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
}