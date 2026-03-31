import { Link } from "react-router-dom";
import Developer from "./Developer";

// ── SVG Icons ────────────────────────────────────────────────────
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    width="15"
    height="15"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
    />
  </svg>
);
const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    width="15"
    height="15"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
    />
  </svg>
);
const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    width="15"
    height="15"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
);
const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="16"
    height="16"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────
const socialLinks = [
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/royal.hyderabadi.biryani.oman/",
    label: "Instagram",
    hoverColor: "#E1306C",
  },
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/royal.hyderabadi.biryani.restaurant/",
    label: "Facebook",
    hoverColor: "#1877F2",
  },
  {
    icon: <TikTokIcon />,
    href: "https://www.tiktok.com/@royal.hyderabadi.biryani",
    label: "TikTok",
    hoverColor: "#ffffff",
  },
  {
    icon: <YouTubeIcon />,
    href: "https://www.youtube.com/@RoyalHyderabadiBiryani",
    label: "YouTube",
    hoverColor: "#FF0000",
  },
];

const quickLinks = [
  { label: "About Restaurant", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Reservation", to: "/reservation" },
  { label: "Blog", to: "/blog" },
  { label: "Career", to: "/career" },
  { label: "Contact", to: "/contact" },
];

const hours = [
  { day: "Mon – Thu", time: "08:00 AM – 02:00 AM" },
  { day: "Friday", time: "08:00 AM – 02:00 AM" },
  { day: "Sat – Sun", time: "08:00 AM – 02:00 AM" },
];

// ── Footer Component ──────────────────────────────────────────────
export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --f-dark:   #26140a;
          --f-mid:    #311708;
          --f-gold:   #c88a2e;
          --f-gold-l: #e8b860;
          --f-gold-d: rgba(200,138,46,0.15);
          --f-white:  #ffffff;
          --f-muted:  rgba(255,255,255,0.58);
          --f-faint:  rgba(255,255,255,0.25);
          --f-border: rgba(200,138,46,0.16);
          --f-serif:  'Playfair Display', Georgia, serif;
          --f-sans:   'Outfit', sans-serif;
        }

        /* ───── wrapper ───── */
        .ft {
          background: var(--f-dark);
          color: var(--f-white);
          font-family: var(--f-sans);
          position: relative;
        }

        /* shimmer top line */
        .ft-topline {
          height: 3px;
          background: linear-gradient(90deg,
            transparent 0%, var(--f-gold) 25%,
            var(--f-gold-l) 50%, var(--f-gold) 75%, transparent 100%);
        }

        /* ───── CTA banner ───── */
        .ft-cta {
          background: linear-gradient(135deg, #341a09 0%, #26140a 60%, #341a09 100%);
          border-bottom: 1px solid var(--f-border);
        }

        .ft-cta-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 34px 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .ft-cta-text h2 {
          font-family: var(--f-serif);
          font-size: 24px;
          font-weight: 600;
          color: var(--f-white);
          margin: 0 0 5px;
        }
        .ft-cta-text p {
          font-size: 14px;
          color: var(--f-muted);
          margin: 0;
          font-weight: 300;
          letter-spacing: 0.2px;
        }

        /* ── PRIMARY reservation button ── */
        .ft-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 34px;
          background: linear-gradient(135deg, #e09830 0%, #b87220 55%, #e09830 100%);
          background-size: 200% 200%;
          color: #fff;
          font-family: var(--f-sans);
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 8px;
          border: 1px solid rgba(255,210,120,0.45);
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          cursor: pointer;
          box-shadow:
            0 0 0 0   rgba(200,138,46,0.55),
            0 8px 30px rgba(160,90,10,0.6),
            inset 0 1px 0 rgba(255,220,130,0.35);
          animation: btnGlow 2.8s ease-in-out infinite;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.3s ease;
        }

        @keyframes btnGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(200,138,46,0.5), 0 8px 30px rgba(160,90,10,0.6), inset 0 1px 0 rgba(255,220,130,0.35); }
          50%      { box-shadow: 0 0 0 9px rgba(200,138,46,0), 0 8px 30px rgba(160,90,10,0.6), inset 0 1px 0 rgba(255,220,130,0.35); }
        }

        .ft-btn-primary::before {
          content: '';
          position: absolute;
          top: -50%; left: -80%;
          width: 50%; height: 200%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.28), transparent);
          transform: skewX(-18deg);
          transition: left 0.55s ease;
        }
        .ft-btn-primary:hover::before { left: 130%; }
        .ft-btn-primary:hover {
          transform: translateY(-3px) scale(1.04);
          animation: none;
          box-shadow:
            0 0 0 4px rgba(200,138,46,0.3),
            0 18px 42px rgba(160,90,10,0.7),
            inset 0 1px 0 rgba(255,220,130,0.4);
        }

        /* ───── main 3-col grid ───── */
        .ft-main {
          max-width: 1240px;
          margin: 0 auto;
          padding: 56px 44px 48px;
          display: grid;
          grid-template-columns: 1.55fr 1fr 1.15fr;
          gap: 60px;
        }

        /* ── brand col ── */
        .ft-logo {
          width: 115px;
          height: 115px;
          object-fit: contain;
          filter: drop-shadow(0 6px 28px rgba(200,138,46,0.5));
          margin-bottom: 16px;
          display: block;
        }

        .ft-brand-ar {
          font-size: 16px;
          color: var(--f-gold-l);
          direction: rtl;
          line-height: 1.5;
          margin-bottom: 3px;
          font-weight: 400;
        }

        .ft-brand-en {
          font-family: var(--f-serif);
          font-size: 17px;
          font-weight: 600;
          color: var(--f-gold);
          letter-spacing: 0.3px;
          margin-bottom: 22px;
        }

        .ft-rule {
          width: 52px;
          height: 2px;
          background: linear-gradient(90deg, var(--f-gold), transparent);
          border-radius: 2px;
          margin-bottom: 22px;
        }

        .ft-ci {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 13px;
          font-size: 14px;
          font-weight: 300;
          color: var(--f-muted);
          line-height: 1.65;
        }
        .ft-ci svg { color: var(--f-gold); flex-shrink: 0; margin-top: 2px; }
        .ft-ci a   { color: var(--f-muted); text-decoration: none; transition: color .2s; }
        .ft-ci a:hover { color: var(--f-gold-l); }

        /* social */
        .ft-social { display: flex; gap: 10px; margin-top: 28px; }

        .ft-soc-btn {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 1px solid var(--f-border);
          background: var(--f-gold-d);
          color: var(--f-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition:
            transform 0.32s cubic-bezier(0.34,1.56,0.64,1),
            border-color .3s,
            color .3s,
            box-shadow .3s;
        }
        .ft-soc-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--sc, var(--f-gold));
          opacity: 0;
          transition: opacity .3s;
        }
        .ft-soc-btn svg { position: relative; z-index: 1; transition: transform .3s; }
        .ft-soc-btn:hover {
          color: #fff;
          border-color: var(--sc, var(--f-gold));
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 26px rgba(0,0,0,0.45), 0 0 0 1px var(--sc, var(--f-gold));
        }
        .ft-soc-btn:hover::after { opacity: 0.28; }
        .ft-soc-btn:hover svg    { transform: scale(1.18); }

        /* ── links col ── */
        .ft-col-h {
          font-family: var(--f-serif);
          font-size: 21px;
          font-weight: 600;
          color: var(--f-white);
          margin: 0 0 6px;
        }

        .ft-col-bar {
          width: 38px;
          height: 2px;
          background: linear-gradient(90deg, var(--f-gold), rgba(200,138,46,0.25));
          border-radius: 2px;
          margin-bottom: 26px;
        }

        .ft-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--f-muted);
          font-size: 14.5px;
          font-weight: 300;
          padding: 9px 0;
          border-bottom: 1px solid var(--f-border);
          transition: color .25s, padding-left .25s;
          position: relative;
          overflow: hidden;
        }
        .ft-link::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          height: 1px;
          width: 0;
          background: var(--f-gold);
          transition: width .3s ease;
        }
        .ft-link-arrow {
          color: var(--f-gold);
          font-size: 14px;
          width: 0;
          overflow: hidden;
          opacity: 0;
          transition: width .25s, opacity .25s, transform .25s;
          transform: translateX(-6px);
          display: inline-block;
        }
        .ft-link:hover {
          color: var(--f-white);
          padding-left: 12px;
        }
        .ft-link:hover .ft-link-arrow {
          width: 14px;
          opacity: 1;
          transform: translateX(0);
        }
        .ft-link:hover::after { width: 100%; }

        /* ── hours col ── */
        .ft-hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid var(--f-border);
          font-size: 13.5px;
        }
        .ft-hours-day  { color: var(--f-muted); font-weight: 300; }
        .ft-hours-time { color: var(--f-gold-l); font-weight: 500; font-size: 13px; text-align: right; }

        /* reserve card */
        .ft-res-card {
          margin-top: 28px;
          padding: 22px 18px;
          border-radius: 12px;
          border: 1px solid rgba(200,138,46,0.3);
          background: linear-gradient(135deg,
            rgba(200,138,46,0.12) 0%,
            rgba(160,90,15,0.07) 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ft-res-card::before {
          content: '';
          position: absolute;
          top: -35px; right: -35px;
          width: 110px; height: 110px;
          border-radius: 50%;
          background: rgba(200,138,46,0.08);
          pointer-events: none;
        }

        .ft-res-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--f-gold);
          margin-bottom: 6px;
        }
        .ft-res-sub {
          font-size: 13px;
          color: var(--f-muted);
          font-weight: 300;
          margin-bottom: 18px;
          line-height: 1.55;
        }

        /* ── SECONDARY reserve button (in card) ── */
        .ft-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 26px;
          background: linear-gradient(135deg, #d4922a 0%, #a06820 100%);
          color: #fff;
          font-family: var(--f-sans);
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.7px;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 7px;
          border: 1px solid rgba(255,200,100,0.35);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 22px rgba(160,90,10,0.55), inset 0 1px 0 rgba(255,220,130,0.25);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
        }
        .ft-btn-secondary::before {
          content: '';
          position: absolute;
          top: -50%; left: -80%;
          width: 50%; height: 200%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: skewX(-18deg);
          transition: left .5s ease;
        }
        .ft-btn-secondary:hover::before { left: 130%; }
        .ft-btn-secondary:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow:
            0 0 0 3px rgba(200,138,46,0.28),
            0 12px 32px rgba(160,90,10,0.65),
            inset 0 1px 0 rgba(255,220,130,0.3);
        }

        /* ───── bottom bar ───── */
        .ft-bottom-wrap { border-top: 1px solid var(--f-border); }

        .ft-bottom {
          max-width: 1240px;
          margin: 0 auto;
          padding: 18px 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .ft-bottom-copy { font-size: 12.5px; color: var(--f-faint); font-weight: 300; }
        .ft-bottom-links { display: flex; gap: 22px; }
        .ft-bottom-links a {
          font-size: 12.5px;
          color: var(--f-faint);
          text-decoration: none;
          font-weight: 300;
          transition: color .2s;
        }
        .ft-bottom-links a:hover { color: var(--f-gold); }

        /* ───── responsive ───── */
        @media (max-width: 960px) {
          .ft-main        { grid-template-columns: 1fr 1fr; gap: 40px; padding: 44px 28px 40px; }
          .ft-cta-inner   { padding: 28px; }
        }
        @media (max-width: 600px) {
          .ft-main        { grid-template-columns: 1fr; padding: 36px 20px 30px; }
          .ft-cta-inner   { flex-direction: column; align-items: flex-start; padding: 22px 20px; }
          .ft-bottom      { flex-direction: column; text-align: center; padding: 16px 20px; }
        }
      `}</style>

      <footer className="ft">
        {/* Gold shimmer top border */}
        <div className="ft-topline" />

        {/* ── CTA Banner with primary Reservation button ── */}
        <div className="ft-cta">
          <div className="ft-cta-inner">
            <div className="ft-cta-text">
              <h2>Experience Authentic Hyderabadi Flavours</h2>
              <p>
                Reserve your table today &amp; savour the royal taste of biryani
              </p>
            </div>
            <Link to="/reservation" className="ft-btn-primary">
              <CalendarIcon />
              Book a Table
            </Link>
          </div>
        </div>

        {/* ── 3-column grid ── */}
        <div className="ft-main">
          {/* ── Col 1 · Brand ── */}
          <div>
            {/* Place your logo file at /public/logo.png or update src to match your project */}
            <Link
              to="/"
              className="mb-10 flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <img
                src="./src/assets/Logo Header.png"
                style={{ width: "370px", height: "82.5288px" }}
              />
            </Link>

            <div className="ft-ci">
              <MapPinIcon />
              <span>
                Near Oman Oil Petrol Pump, Beside Bukhari Masjid, MBD South,
                Ruwi, Muscat.
              </span>
            </div>
            <div className="ft-ci">
              <PhoneIcon />
              <span>+968 72606555, +968 72607444</span>
            </div>
            <div className="ft-ci">
              <EmailIcon />
              <a href="mailto:royal.hydbiryani@gmail.com">
                royal.hydbiryani@gmail.com
              </a>
            </div>

            <div className="ft-social">
              {socialLinks.map(({ icon, href, label, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-soc-btn"
                  aria-label={label}
                  style={{ "--sc": hoverColor }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2 · Quick Links ── */}
          <div>
            <h3 className="ft-col-h">Quick Links</h3>
            <div className="ft-col-bar" />
            <nav>
              {quickLinks.map(({ label, to }) => (
                <Link key={label} to={to} className="ft-link">
                  <span className="ft-link-arrow">›</span>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Col 3 · Hours ── */}
          <div>
            <h3 className="ft-col-h">Opening Hours</h3>
            <div className="ft-col-bar" />

            {hours.map(({ day, time }) => (
              <div key={day} className="ft-hours-row">
                <span className="ft-hours-day">{day}</span>
                <span className="ft-hours-time">{time}</span>
              </div>
            ))}
          </div>
        </div>
              <Developer/>
        {/* ── Bottom bar ── */}
        <div className="ft-bottom-wrap">
          <div className="ft-bottom">
            
            <span className="ft-bottom-copy">
              © {new Date().getFullYear()} Royal Hyderabadi Biryani Restaurant ·
              All rights reserved.
            </span>
            <div className="ft-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
