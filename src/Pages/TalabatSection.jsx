import React, { useState, useEffect, useCallback } from "react";

/* ─────────────────────────────────────────
   CONFIGURATION — swap these values
───────────────────────────────────────── */
const PLATFORMS = [
  {
    id: "talabat",
    name: "Talabat",
    tagline: "Order on Talabat",
    // ↓ Replace with your actual poster image path
    poster: "./assets/Talabat Poster Design copy.jpg",
    // ↓ Paste your Talabat restaurant link here
    orderLink: "https://www.talabat.com/oman/rhbr",
    // Brand colours
    brandColor: "#ff6600",
    brandColorDark: "#e55a00",
    brandColorSoft: "rgba(255,102,0,0.1)",
    brandBorder: "rgba(255,102,0,0.25)",
   
    
  },
  {
    id: "khedmah",
    name: "Khedmah",
    tagline: "Order on Khedmah",
    // ↓ Replace with your actual poster image path
    poster: "./assets/Khedma Poster Design copy.jpg",
    // ↓ Paste your Khedmah restaurant link here
    orderLink: "https://khedmahdelivery.com/",
    // Brand colours
    brandColor: "#692c5a",
    brandColorDark: "#1557b0",
    brandColorSoft: "rgba(26,115,232,0.1)",
    brandBorder: "rgba(26,115,232,0.25)",
    
  },
];

/* ─────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────── */
function Lightbox({ platform, onClose }) {
  // Close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(10,5,2,0.88)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        animation: "lbFadeIn 0.25s ease both",
        cursor: "zoom-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "min(560px, 92vw)",
          width: "100%",
          animation: "lbScaleIn 0.38s cubic-bezier(0.22,1,0.36,1) both",
          cursor: "default",
        }}
      >
        {/* Image */}
        <div style={{
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: `0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px ${platform.brandBorder}`,
          aspectRatio: "1/1",
          background: "#1a0f08",
        }}>
          <img
            src={platform.poster}
            alt={`${platform.name} offer poster`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            onError={(e) => {
              // Elegant placeholder if image not found
              e.target.style.display = "none";
              e.target.parentNode.style.display = "flex";
              e.target.parentNode.style.alignItems = "center";
              e.target.parentNode.style.justifyContent = "center";
              e.target.parentNode.style.fontSize = "5rem";
              e.target.parentNode.innerHTML = `<div style="text-align:center;padding:3rem"><div style="font-size:4rem;margin-bottom:1rem">🖼️</div><div style="font-family:'Lato',sans-serif;font-size:0.9rem;color:rgba(245,232,216,0.5)">Add your poster image to:<br/>${platform.poster}</div></div>`;
            }}
          />
        </div>

        {/* Order button inside lightbox */}
        <div style={{
          marginTop: "1.25rem",
          display: "flex",
          justifyContent: "center",
          gap: "0.85rem",
          flexWrap: "wrap",
        }}>
          <a
            href={platform.orderLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: platform.brandColor,
              color: "#fff",
              padding: "0.85rem 2rem",
              borderRadius: 50,
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: "0.92rem",
              letterSpacing: "0.04em",
              textDecoration: "none",
              boxShadow: `0 8px 28px ${platform.brandColor}55`,
              transition: "all 0.3s ease",
              border: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = platform.brandColorDark;
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 12px 34px ${platform.brandColor}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = platform.brandColor;
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = `0 8px 28px ${platform.brandColor}55`;
            }}
          >
            {platform.logo}
            <span>Order on {platform.name}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7,7 17,7 17,17"/>
            </svg>
          </a>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "-14px",
            right: "-14px",
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(26,11,5,0.9)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${platform.brandBorder}`,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s",
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = platform.brandColor;
            e.currentTarget.style.transform = "scale(1.1) rotate(90deg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(26,11,5,0.9)";
            e.currentTarget.style.transform = "scale(1) rotate(0deg)";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Hint text */}
      <div style={{
        position: "absolute",
        bottom: "1.25rem",
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "'Lato', sans-serif",
        fontSize: "0.72rem",
        color: "rgba(255,255,255,0.3)",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}>
        Click outside or press ESC to close
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   POSTER CARD
───────────────────────────────────────── */
function PosterCard({ platform, onOpen, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
        animation: `cardReveal 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 0.15}s both`,
      }}
    >
      {/* Poster */}
      <div
        onClick={() => onOpen(platform)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          borderRadius: 18,
          overflow: "hidden",
          aspectRatio: "1/1",
          cursor: "zoom-in",
          boxShadow: hovered
            ? `0 30px 70px rgba(0,0,0,0.28), 0 0 0 2px ${platform.brandColor}88`
            : "0 8px 32px rgba(38,20,10,0.14)",
          transition: "box-shadow 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)",
          transform: hovered ? "translateY(-5px) scale(1.01)" : "none",
          background: "#1a0f08",
        }}
      >
        {/* Image */}
        <img
          src={platform.poster}
          alt={`${platform.name} poster`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.display = "flex";
            e.target.parentNode.style.alignItems = "center";
            e.target.parentNode.style.justifyContent = "center";
            e.target.parentNode.style.flexDirection = "column";
            e.target.parentNode.style.gap = "0.75rem";
            e.target.parentNode.style.background = `linear-gradient(145deg, #26140a, #1a0f08)`;
            e.target.parentNode.innerHTML = `
              <div style="font-size:3.5rem">🖼️</div>
              <div style="font-family:'Lato',sans-serif;font-size:0.78rem;color:rgba(245,232,216,0.45);text-align:center;padding:0 1.5rem;line-height:1.6">
                Place your <strong style="color:rgba(245,232,216,0.7)">${platform.name}</strong> poster at:<br/>
                <code style="font-size:0.7rem;color:${platform.brandColor};background:rgba(255,255,255,0.05);padding:0.2rem 0.5rem;border-radius:4px;margin-top:0.4rem;display:inline-block">${platform.poster}</code>
              </div>`;
          }}
        />

        {/* Hover overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.42)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(255,255,255,0.14)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#fff",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700,
            fontSize: "0.82rem",
            letterSpacing: "0.08em",
            padding: "0.65rem 1.4rem",
            borderRadius: 50,
            transform: hovered ? "scale(1)" : "scale(0.82)",
            transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
            View Full Poster
          </div>
        </div>

        

        {/* Bottom gradient */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "40%",
          background: "linear-gradient(to top, rgba(10,5,2,0.55), transparent)",
          pointerEvents: "none",
        }} />
      </div>

      {/* Order button */}
      <a
        href={platform.orderLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.6rem",
          background: platform.brandColorSoft,
          border: `1.5px solid ${platform.brandBorder}`,
          borderRadius: 14,
          padding: "0.9rem 1.5rem",
          fontFamily: "'Lato', sans-serif",
          fontWeight: 700,
          fontSize: "0.9rem",
          color: platform.brandColor,
          textDecoration: "none",
          letterSpacing: "0.03em",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = platform.brandColor;
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.borderColor = platform.brandColor;
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = `0 10px 28px ${platform.brandColor}44`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = platform.brandColorSoft;
          e.currentTarget.style.color = platform.brandColor;
          e.currentTarget.style.borderColor = platform.brandBorder;
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {platform.logo}
        <span>Order Now on {platform.name}</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7,7 17,7 17,17" />
        </svg>
      </a>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────── */
export default function DeliverySection() {
  const [activePlatform, setActivePlatform] = useState(null);

  const handleOpen = useCallback((platform) => setActivePlatform(platform), []);
  const handleClose = useCallback(() => setActivePlatform(null), []);

  return (
    <>
      <section style={{
        background: "#f5e8d8",
        padding: "6rem 0 7rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Subtle bg texture */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(184,137,58,0.07) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>

          {/* Section header */}
          <div style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            animation: "cardReveal 0.7s cubic-bezier(0.22,1,0.36,1) both",
          }}>
            <span style={{
              display: "inline-block",
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#b8893a",
              background: "rgba(184,137,58,0.1)",
              padding: "0.38rem 1.1rem",
              borderRadius: 50,
              border: "1px solid rgba(184,137,58,0.25)",
              marginBottom: "1.1rem",
            }}>
              Now Available On
            </span>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              color: "#26140a",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "0.85rem",
            }}>
              Order at Your{" "}
              <em style={{ color: "#b8893a", fontStyle: "italic" }}>Doorstep</em>
            </h2>

            {/* Gold ornament line */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", maxWidth: 320, margin: "0 auto 1rem" }}>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, rgba(184,137,58,0.55))" }} />
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#b8893a">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, rgba(184,137,58,0.55))" }} />
            </div>

            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              color: "rgba(38,20,10,0.58)",
              maxWidth: 460,
              margin: "0 auto",
              lineHeight: 1.78,
            }}>
              Royal Hyderabadi Biryani is now available for delivery. Click a poster to see the full offer, then order with one tap.
            </p>
          </div>

          {/* Two posters grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: 780,
            margin: "0 auto",
          }}>
            {PLATFORMS.map((p, i) => (
              <PosterCard
                key={p.id}
                platform={p}
                onOpen={handleOpen}
                index={i}
              />
            ))}
          </div>

          {/* Info strip */}
          <div style={{
            textAlign: "center",
            marginTop: "2.75rem",
            animation: "cardReveal 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both",
          }}>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(38,20,10,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(184,137,58,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Click any poster to view full size · Delivery times may vary by location
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activePlatform && (
        <Lightbox platform={activePlatform} onClose={handleClose} />
      )}

      {/* Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Lato:wght@400;700&display=swap');
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lbScaleIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </>
  );
}