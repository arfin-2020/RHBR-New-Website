import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Reviews Data ─────────────────────────────────────────────────────────────
// Replace with your real Google reviews
const reviews = [
  {
    id: 1,
    name: "Ahmed Al Balushi",
    location: "Muscat, Oman",
    avatar: "A",
    rating: 5,
    date: "2 weeks ago",
    review:
      "A new addition to the very competitive food scene of Hyderabadi cuisine in this part of Muscat, my review is solely based on the Biryani ( mutton) and Haleem that I tried from this place,although I am being magnanimous in awarding this place 4 stars just because it is a new place and maybe it happened to be the chef’s bad day.",
    dish: "Mutton Dum Biryani",
    avatarBg: "#7c4a2d",
  },
  {
    id: 2,
    name: "Fatima Al Rashdi",
    location: "Muscat, Oman",
    avatar: "F",
    rating: 5,
    date: "1 month ago",
    review:
      "Royal Hyderabadi is our go-to restaurant for special occasions. The Nihari Paya is slow-cooked to perfection rich, warming, and deeply flavorful. The service is always warm and the ambiance is royal. Highly recommended!",
    dish: "Nihari Paya",
    avatarBg: "#4a3728",
  },
  {
    id: 3,
    name: "Mohammed Al Harthi",
    location: "Muscat, Oman",
    avatar: "M",
    rating: 5,
    date: "3 weeks ago",
    review:
      "Drive here, eat the delicious food. Must try all dishes esp the mango keer.",
    dish: "Hyderabadi Haleem",
    avatarBg: "#2d4a3e",
  },
  {
    id: 4,
    name: "Sara Al Amri",
    location: "Muscat, Oman",
    avatar: "S",
    rating: 5,
    date: "1 month ago",
    review:
      "Tried the breakfast menu for the first time — the Kheema with Hyderabadi Paratha was outstanding. Light, crispy paratha paired with bold, spiced mince. Perfect start to the day. Gem of a place!",
    dish: "Kheema & Paratha",
    avatarBg: "#4a2d4a",
  },
  {
    id: 5,
    name: "Khalid Al Maqbali",
    location: "Muscat, Oman",
    avatar: "K",
    rating: 5,
    date: "2 months ago",
    review:
      "Went to Royal Hyderabadi in Ruwi recently. The chicken biryani tastes really good — proper masala and nice aroma. Last time it was sold out, so I waited around 45 minutes because I really wanted to eat it. Chai was the best part for me — strong and perfect after the meal. Will go again. 👍",
    dish: "Mutton Marag",
    avatarBg: "#3a4a2d",
  },
  {
    id: 6,
    name: "Noor Al Hinai",
    location: "Muscat, Oman",
    avatar: "N",
    rating: 5,
    date: "3 months ago",
    review:
      "Royal Hyderabadi Biryani truly lives up to its name! The biryani was rich, flavorful, and perfectly spiced. The meat was tender and well-marinated, and the portion size was generous. Great ambiance and friendly service too. Will definitely visit again!",
    dish: "Dum ka Chicken",
    avatarBg: "#2d3d4a",
  },
];

// ─── Star Rating ───────────────────────────────────────────────────────────────
function Stars({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill={i < count ? "#e8a020" : "#e0d4c8"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Google G Icon ─────────────────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

// ─── Single Review Card ────────────────────────────────────────────────────────
function ReviewCard({ review, index, cardWidth }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        flex: `0 0 ${cardWidth}`,
        width: cardWidth,
        height: "100%", // ✅ ADD
        background: "#ffffff",
        borderRadius: "20px",
        padding: "28px 28px 24px",
        boxShadow: "0 4px 28px rgba(38,20,10,0.08)",
        border: "1px solid #ecdfd4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // ✅ FIX
        gap: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* Top row: avatar + name + google badge */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "13px" }}>
          {/* Avatar circle */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: review.avatarBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f5e8d8",
              fontFamily: "'Playfair Display', serif",
              fontSize: "20px",
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            {review.avatar}
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontFamily: "'Playfair Display', serif",
                fontSize: "16px",
                fontWeight: 700,
                color: "#26140a",
                lineHeight: 1.2,
              }}
            >
              {review.name}
            </p>
            <p
              style={{
                margin: "3px 0 0",
                fontFamily: "'Lato', sans-serif",
                fontSize: "12px",
                color: "#9e7a5f",
                letterSpacing: "0.02em",
              }}
            >
              {review.location}
            </p>
          </div>
        </div>

        {/* Google badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            background: "#f8f4f0",
            border: "1px solid #ecdfd4",
            borderRadius: "8px",
            padding: "5px 9px",
            flexShrink: 0,
          }}
        >
          <GoogleIcon />
          <span
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              color: "#5f5f5f",
              letterSpacing: "0.04em",
            }}
          >
            Google
          </span>
        </div>
      </div>

      {/* Stars + date */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stars count={review.rating} />
        <span
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "11px",
            color: "#b8a090",
            letterSpacing: "0.03em",
          }}
        >
          {review.date}
        </span>
      </div>

      {/* Decorative quote mark */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "52px",
          color: "#f0e0d0",
          lineHeight: 0.6,
          userSelect: "none",
          marginBottom: "-8px",
        }}
      >
        "
      </div>

      {/* Review text */}
      <p
        style={{
          margin: 0,
          fontFamily: "'Lato', sans-serif",
          fontSize: "14px",
          color: "#5a3e2e",
          lineHeight: 1.75,
          flex: 1,
        }}
      >
        {review.review}
      </p>

      {/* Dish tag */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          alignSelf: "flex-start",
          background: "#faf5f0",
          border: "1px solid #ecdfd4",
          borderRadius: "999px",
          padding: "5px 13px",
          marginTop: "4px",
        }}
      >
        <span style={{ fontSize: "12px" }}>🍽️</span>
        <span
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            color: "#8b5e3c",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {review.dish}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main Reviews Section ──────────────────────────────────────────────────────
export default function ReviewsSection() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [cardWidth, setCardWidth] = useState("calc(33.333% - 16px)");

  // Responsive card width
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        setCardWidth("calc(100vw - 64px)");
      } else {
        setCardWidth("calc(33.333% - 16px)");
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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

  // drag-to-scroll
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftVal.current = trackRef.current.scrollLeft;
    trackRef.current.style.scrollBehavior = "auto";
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const walk = (e.pageX - trackRef.current.offsetLeft - startX.current) * 1.3;
    trackRef.current.scrollLeft = scrollLeftVal.current - walk;
  };
  const endDrag = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.scrollBehavior = "smooth";
  };

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.88;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // average rating
  const avgRating = (
    reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
  ).toFixed(1);

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

        .rv-track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overflow-y: visible;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  padding: 16px 32px 32px;
  cursor: grab;

  align-items: stretch; /* ✅ ADD THIS */
}

        .rv-track:active { cursor: grabbing; }
        .rv-track::-webkit-scrollbar { display: none; }

        @media (min-width: 1024px) {
          .rv-track { padding-left: 60px; padding-right: 60px; }
        }

        .rv-arrow {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e0cfc2;
          background: #fff;
          color: #26140a;
          font-size: 18px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.22s, background 0.22s, transform 0.22s, opacity 0.22s;
          box-shadow: 0 2px 12px rgba(38,20,10,0.07);
        }
        .rv-arrow:hover:not(:disabled) {
          border-color: #23100B;
          background: #23100B;
          color: #f5e8d8;
          transform: scale(1.07);
        }
        .rv-arrow:disabled { opacity: 0.28; cursor: default; }

        .rv-track-outer {
          position: relative;
        }
        .rv-track-outer::before,
        .rv-track-outer::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 60px;
          pointer-events: none;
          z-index: 2;
        }
        .rv-track-outer::before {
          left: 0;
          background: linear-gradient(to right, #faf5f0, transparent);
        }
        .rv-track-outer::after {
          right: 0;
          background: linear-gradient(to left, #faf5f0, transparent);
        }

        .write-review-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #23100B;
          color: #f5e8d8;
          border: 2px solid #23100B;
          border-radius: 12px;
          padding: 14px 36px;
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
        .write-review-btn:hover {
          background: transparent;
          color: #23100B;
          box-shadow: 0 10px 32px rgba(35,16,11,0.15);
          transform: translateY(-2px);
        }
        .write-review-btn:active { transform: scale(0.97); }

        /* Mobile: show only 1 card at a time via snap */
        @media (max-width: 767px) {
          .rv-track {
            scroll-snap-type: x mandatory;
          }
          .rv-snap-child {
            scroll-snap-align: center;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "17px",
              color: "#23100B",
              marginBottom: "10px",
            }}
          >
            What our guests say
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
            Customer Reviews
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
              margin: "0 auto 28px",
              transformOrigin: "center",
            }}
          />
        </div>
      </div>

      {/* ── Arrow controls ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          padding: "32px 32px 0",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <button
          className="rv-arrow"
          onClick={() => scrollBy(-1)}
          disabled={!canLeft}
          aria-label="Previous reviews"
        >
          ←
        </button>
        <button
          className="rv-arrow"
          onClick={() => scrollBy(1)}
          disabled={!canRight}
          aria-label="Next reviews"
        >
          →
        </button>
      </div>

      {/* ── Scrollable Track ── */}
      <div className="rv-track-outer">
        <div
          className="rv-track"
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
        >
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className="rv-snap-child"
              style={{
                flex: `0 0 ${cardWidth}`,
                width: cardWidth,
                display: "flex", // ✅ ADD
              }}
            >
              <ReviewCard review={review} index={i} cardWidth="100%" />
            </div>
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
          }}
        >
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
            style={{
              height: "100%",
              background: "#23100B",
              borderRadius: "2px",
            }}
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
          Enjoyed your meal? Share your experience with others
        </p>

        <a
          href="https://g.page/r/Cdi8-0A8BywxEAE/review"
          target="_blank"
          rel="noopener noreferrer"
          className="write-review-btn"
        >
          {/* Pencil icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          Write a Review
        </a>
      </motion.div>
    </section>
  );
}
