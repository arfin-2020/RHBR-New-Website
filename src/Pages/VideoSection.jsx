import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

// ─── Your Instagram Reels Data ─────────────────────────────────────────────────
// Kept exactly as provided
const reelsData = [
  {
    id: 1,
    embedUrl: "https://www.instagram.com/reel/DWVxThit4dv/embed",
    tag: "Promotional Video",
  },
  {
    id: 2,
    embedUrl: "https://www.instagram.com/reel/DWDeNLmCciv/embed",
    tag: "Customer Review",
  },
  {
    id: 3,
    embedUrl: "https://www.instagram.com/reel/DVyDYUGtRA8/embed",
    tag: "Promotional Video",
  },
  {
    id: 4,
    embedUrl: "https://www.instagram.com/reel/DU8B-38D15W/embed",
    tag: "Customer Review",
  },
  {
    id: 5,
    embedUrl: "https://www.instagram.com/reel/DU4wgXskaIL/embed",
    tag: "Customer Review",
  },
  {
    id: 6,
    embedUrl: "https://www.instagram.com/reel/DU2Q7e7DqSH/embed",
    tag: "Grand Opening",
  },
];

// ─── Single Reel Card ──────────────────────────────────────────────────────────
function ReelCard({ reel, index }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="reel-card"
    >
      {/* 9:16 iframe wrapper */}
      <div className="reel-iframe-container">
        {/* skeleton shimmer */}
        {!loaded && (
          <div className="reel-skeleton">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                stroke="#c9a98a"
                strokeWidth="1.5"
              />
              <circle cx="8.5" cy="8.5" r="1.5" fill="#c9a98a" />
              <path
                d="M7 17l3.5-4 2.5 3 2-2.5L19 17"
                stroke="#c9a98a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}

        <iframe
          src={reel.embedUrl}
          onLoad={() => setLoaded(true)}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          scrolling="no"
          frameBorder="0"
        />
      </div>

      {/* Label & Title below card */}
      <div className="reel-info">
        <span className="reel-tag">{reel.tag}</span>
        <p className="reel-title">{reel.title}</p>
      </div>
    </motion.div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function VideoSection({
  instagramHandle = "Royal Hyderabadi",
  instagramUrl = "https://www.instagram.com/royal.hyderabadi.biryani.oman/",
}) {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const brandColor = "#26140a";

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < max - 10);
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
    if (!trackRef.current) return;
    const scrollAmount = trackRef.current.clientWidth * 0.8 * dir;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="video-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&display=swap');

        .video-section {
          background: #faf5f0;
          padding: 80px 0 100px;
          font-family: 'Lato', sans-serif;
          overflow: hidden;
        }

        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* ── Responsive Track ── */
        .reels-track {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding: 20px 24px 40px;
          scroll-snap-type: x mandatory;
        }
        .reels-track::-webkit-scrollbar { display: none; }

        /* ── Grid Logic: 1 (Mobile), 2 (Laptop), 3 (Desktop) ── */
        .reel-card {
          flex: 0 0 100%; /* Default Mobile: 1 view */
          scroll-snap-align: center;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.3s ease;
        }

        @media (min-width: 768px) {
          .reel-card { flex: 0 0 calc(50% - 10px); } /* Laptop: 2 views */
          .reels-track { padding: 20px 40px 40px; }
        }

        @media (min-width: 1024px) {
          .reel-card { flex: 0 0 calc(33.333% - 14px); } /* Desktop: 3 views */
          .reels-track { padding: 20px 60px 40px; }
        }

        .reel-iframe-container {
          position: relative;
          width: 100%;
          aspect-ratio: 9 / 16;
          border-radius: 24px;
          overflow: hidden;
          background: #f0e8df;
          box-shadow: 0 12px 40px rgba(38,20,10,0.12);
          border: 1px solid #ecdfd4;
        }

        .reel-iframe-container iframe {
          width: 100%;
          height: 100%;
          border: none;
          transition: opacity 0.5s ease;
        }

        .reel-skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, #f0e8df 30%, #faf5f0 50%, #f0e8df 70%);
          backgroundSize: 200% 100%;
          animation: shimmer 1.4s infinite linear;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .reel-tag {
          display: inline-block;
          background: #f5e8d8;
          color: #8b5e3c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 8px;
        }

        .reel-title {
          margin: 0;
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 700;
          color: #26140a;
          line-height: 1.4;
        }

        /* ── Controls ── */
        .reels-arrow {
          width: 48px; height: 48px;
          border-radius: 50%;
          border: 1.5px solid #e0cfc2;
          background: #fff;
          color: #26140a;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(38,20,10,0.06);
        }
        .reels-arrow:hover:not(:disabled) {
          background: #26140a;
          color: #fff;
          border-color: #26140a;
        }
        .reels-arrow:disabled { opacity: 0.3; cursor: default; }

        .insta-follow-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          border: 2px solid #26140a;
          color: #26140a;
          border-radius: 14px;
          padding: 16px 36px;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .insta-follow-btn:hover {
          background: #26140a;
          color: #fff;
          box-shadow: 0 12px 30px rgba(38,20,10,0.2);
          transform: translateY(-3px);
        }
      `}</style>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              color: "#26140a",
              margin: "0 0 16px",
              lineHeight: 1.2,
            }}
          >
            Promotions & Reviews
          </motion.h2>

          <div
            style={{
              width: "60px",
              height: "3px",
              background: brandColor,
              margin: "0 auto 24px",
            }}
          />

          <p
            style={{
              fontSize: "16px",
              color: "#4a3b33",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Behind the scenes, signature dishes & customer stories — catch it
            all on Instagram.
          </p>
        </div>

        {/* Desktop Navigation Arrows */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <button
            className="reels-arrow"
            onClick={() => scrollBy(-1)}
            disabled={!canLeft}
          >
            ←
          </button>
          <button
            className="reels-arrow"
            onClick={() => scrollBy(1)}
            disabled={!canRight}
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="reels-track-outer" style={{ position: "relative" }}>
        <div className="reels-track" ref={trackRef}>
          {reelsData.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i} />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            height: "3px",
            background: "#ecdfd4",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              height: "100%",
              background: brandColor,
              width: `${progress}%`,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        style={{ textAlign: "center", marginTop: "64px", padding: "0 24px" }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "16px",
            color: "#26140a",
            marginBottom: "24px",
          }}
        >
          Explore more moments on our profile
        </p>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="insta-follow-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          FOLLOW on Instagram
        </a>
      </div>
    </section>
  );
}
