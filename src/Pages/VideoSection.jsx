import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

// ─── Your Instagram Reels Data ─────────────────────────────────────────────────
// Replace the embedUrl values with your actual Instagram embed URLs
// To get embed URL: Open reel on Instagram → ⋯ → Embed → copy the URL from href
const reelsData = [
  {
    id: 1,
    embedUrl: "https://www.instagram.com/reel/DWVxThit4dv/embed", // replace with your 1st reel URL
    
    tag: "Promotional Video",
  },
  {
    id: 2,
    embedUrl: "https://www.instagram.com/reel/DWDeNLmCciv/embed", // replace with your 2nd reel URL
   
    tag: "Customer Review",
  },
  {
    id: 3,
    embedUrl: "https://www.instagram.com/reel/DVyDYUGtRA8/embed", // replace with your 3rd reel URL
  
    tag: "Promotional Video",
  },
  {
    id: 4,
    embedUrl: "https://www.instagram.com/reel/DU8B-38D15W/embed", // replace with your 4th reel URL
    
    tag: "Customer Review",
  },
  {
    id: 5,
    embedUrl: "https://www.instagram.com/reel/DU4wgXskaIL/embed", // replace with your 5th reel URL
  
    tag: "Customer Review",
  },
  {
    id: 6,
    embedUrl: "https://www.instagram.com/reel/DU2Q7e7DqSH/embed", // replace with your 5th reel URL
  
    tag: "Grand Opening",
  },
];

// ─── Single Reel Card ──────────────────────────────────────────────────────────
function ReelCard({ reel, index }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        flex: "0 0 auto",
        width: "260px",           /* card width  */
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      {/* 9:16 iframe wrapper */}
      <div
        style={{
          position: "relative",
          width: "260px",
          height: "462px",        /* 260 × 16/9 ≈ 462 — true 9:16 */
          borderRadius: "20px",
          overflow: "hidden",
          background: "#f0e8df",
          boxShadow: "0 8px 36px rgba(38,20,10,0.13)",
          border: "1px solid #ecdfd4",
        }}
      >
        {/* skeleton shimmer while iframe loads */}
        {!loaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(110deg, #f0e8df 30%, #faf5f0 50%, #f0e8df 70%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.4s infinite linear",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="#c9a98a" strokeWidth="1.5"/>
              <circle cx="8.5" cy="8.5" r="1.5" fill="#c9a98a"/>
              <path d="M7 17l3.5-4 2.5 3 2-2.5L19 17" stroke="#c9a98a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}

        <iframe
          src={reel.embedUrl}
    
          onLoad={() => setLoaded(true)}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          scrolling="no"
          frameBorder="0"
        />
      </div>

      {/* label below card */}
      <div style={{ paddingLeft: "4px" }}>
        <span
          style={{
            display: "inline-block",
            background: "#f5e8d8",
            color: "#8b5e3c",
            fontSize: "11px",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "3px 10px",
            borderRadius: "999px",
            marginBottom: "6px",
          }}
        >
          {reel.tag}
        </span>
        <p
          style={{
            margin: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: "15px",
            fontWeight: 600,
            color: "#26140a",
            lineHeight: 1.3,
          }}
        >
          {reel.title}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function VideoSection({
  instagramHandle = "@royalhyderabadioman",
  instagramUrl = "https://www.instagram.com/royalhyderabadioman",
}) {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  // drag-to-scroll
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < max - 4);
    setProgress(max > 0 ? (el.scrollLeft / max) * 100 : 0);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.scrollBehavior = "auto";
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const walk = (e.pageX - trackRef.current.offsetLeft - startX.current) * 1.3;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const endDrag = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.scrollBehavior = "smooth";
  };

  return (
    <section
      style={{
        background: "#faf5f0",
        padding: "96px 0 112px",
        fontFamily: "'Lato', sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&display=swap');

        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .reels-track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          overflow-y: visible;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding: 16px 32px 28px;
          cursor: grab;
        }
        .reels-track:active { cursor: grabbing; }
        .reels-track::-webkit-scrollbar { display: none; }

        @media (min-width: 1024px) {
          .reels-track { padding-left: 60px; padding-right: 60px; }
        }

        .reels-arrow {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e0cfc2;
          background: #fff;
          color: #26140a;
          font-size: 18px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.22s, background 0.22s, transform 0.22s, opacity 0.22s;
          box-shadow: 0 2px 12px rgba(38,20,10,0.08);
        }
        .reels-arrow:hover:not(:disabled) {
          border-color: #23100B;
          background: #23100B;
          color: #f5e8d8;
          transform: scale(1.07);
        }
        .reels-arrow:disabled { opacity: 0.3; cursor: default; transform: none; }

        .insta-follow-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: 2px solid #23100B;
          color: #23100B;
          border-radius: 12px;
          padding: 13px 32px;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.28s ease, color 0.28s ease,
                      box-shadow 0.28s ease, transform 0.2s ease;
        }
        .insta-follow-btn:hover {
          background: #23100B;
          color: #f5e8d8;
          box-shadow: 0 10px 32px rgba(35,16,11,0.2);
          transform: translateY(-2px);
        }
        .insta-follow-btn:active { transform: scale(0.97); }

        /* fade edges on track container */
        .reels-track-outer {
          position: relative;
        }
        .reels-track-outer::before,
        .reels-track-outer::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 60px;
          pointer-events: none;
          z-index: 2;
        }
        .reels-track-outer::before {
          left: 0;
          background: linear-gradient(to right, #faf5f0, transparent);
        }
        .reels-track-outer::after {
          right: 0;
          background: linear-gradient(to left, #faf5f0, transparent);
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          

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
            Our Promotiona and Customer Reviews
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: "60px",
              height: "3px",
              background: "#23100B",
              borderRadius: "2px",
              margin: "0 auto 20px",
              transformOrigin: "center",
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "15px",
              color: "#26140a",
              maxWidth: "460px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Behind the scenes, signature dishes & royal moments — follow along on Instagram.
          </motion.p>
        </div>
      </div>

      {/* ── Arrow controls ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          padding: "0 32px",
          marginBottom: "20px",
          maxWidth: "1280px",
          margin: "0 auto 20px",
        }}
      >
        <button
          className="reels-arrow"
          onClick={() => scrollBy(-1)}
          disabled={!canLeft}
          aria-label="Scroll left"
        >
          ←
        </button>
        <button
          className="reels-arrow"
          onClick={() => scrollBy(1)}
          disabled={!canRight}
          aria-label="Scroll right"
        >
          →
        </button>
      </div>

      {/* ── Horizontal Scroll Track ── */}
      <div className="reels-track-outer">
        <div
          className="reels-track"
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
        >
          {reelsData.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i} />
          ))}
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            height: "2px",
            background: "#ecdfd4",
            borderRadius: "2px",
            overflow: "hidden",
            marginTop: "8px",
          }}
        >
          <motion.div
            style={{
              height: "100%",
              background: "#23100B",
              borderRadius: "2px",
              width: `${progress}%`,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ textAlign: "center", marginTop: "52px" }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            color: "#23100B",
            fontSize: "15px",
            marginBottom: "20px",
          }}
        >
          See all our recipes & stories on Instagram
        </p>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="insta-follow-btn"
        >
          {/* Instagram icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Follow {instagramHandle}
        </a>
      </motion.div>
    </section>
  );
}