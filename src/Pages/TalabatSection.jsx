import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// ── Paste your SVG as an inline component ─────────────────────────────────────
function TalabatLogo({ width = 160 }) {
  return (
    <svg
      width={width}
      height={width * (76 / 224)}
      viewBox="0 0 224 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.0917969 10.8644L11.429 75.5L88.5423 66.4483C88.5423 66.4483 133.465 67.5803 148.443 67.9505C168.768 68.4498 223.908 68.4498 223.908 68.4498L223.211 2.75107C223.211 2.75107 173.549 2.87159 153.978 2.38522C136.422 1.94619 83.9239 0.5 83.9239 0.5L0.0917969 10.8644Z"
        fill="#FF5900"
      />
      <path
        d="M86.3733 53.2905L86.3432 34.1714L86.3303 26.325C86.3303 25.8601 86.3216 20.4799 86.3216 20.4799C86.3216 20.4799 86.3173 16.6707 86.313 15.6894C83.8037 15.6894 80.9587 15.6076 78.798 17.7769C76.7363 19.8558 77.0978 22.4813 77.1021 26.3336C77.1021 28.7267 77.1151 34.1843 77.1151 34.1843L77.1237 38.8199L77.1882 53.3077L86.3776 53.2948L86.3733 53.2905Z"
        fill="#F4EDE3"
      />
      <path
        d="M149.889 33.8486C148.779 31.8257 147.225 30.2633 145.232 29.1571C143.239 28.0552 140.928 27.5043 138.298 27.5086C136.637 27.5086 135.053 27.7669 133.546 28.2704C132.044 28.774 130.787 29.4584 129.789 30.3235C129.789 29.0194 129.784 27.5559 129.784 26.2561C129.784 25.7912 129.776 20.411 129.776 20.411C129.776 20.411 129.772 16.6019 129.767 15.6205C127.284 15.6205 124.469 15.5387 122.325 17.708C120.285 19.7869 120.642 22.4125 120.647 26.2647C120.647 28.6578 120.66 34.1155 120.66 34.1155L120.668 38.7511L120.685 53.2389L129.462 53.226L129.509 50.7338C131.829 52.9117 134.777 53.9964 138.341 53.9921C140.937 53.9921 143.239 53.4412 145.245 52.3436C147.251 51.2503 148.805 49.7094 149.911 47.7166C151.017 45.7238 151.563 43.4125 151.559 40.7826C151.559 38.1872 151 35.8759 149.885 33.8529L149.889 33.8486ZM140.459 45.2848C139.318 46.378 137.812 46.9247 135.944 46.9247C134.558 46.9247 133.31 46.576 132.203 45.8658C131.093 45.16 130.297 44.2001 129.81 42.9864L129.802 38.5746C130.284 37.3608 131.08 36.401 132.186 35.6908C133.292 34.9806 134.536 34.6234 135.922 34.6191C137.79 34.6191 139.297 35.1657 140.442 36.2719C141.586 37.378 142.159 38.8845 142.163 40.7869C142.163 42.6894 141.599 44.1872 140.459 45.2805V45.2848Z"
        fill="#F4EDE3"
      />
      <path
        d="M62.3723 47.8632C63.3063 47.4284 64.0122 46.8646 64.4985 46.1716V43.9894C63.005 42.9866 61.3091 42.4873 59.4024 42.4916C58.1886 42.4916 57.2546 42.7541 56.6004 43.2749C55.9419 43.7957 55.6147 44.5576 55.619 45.5605C55.619 46.4945 55.9419 47.2219 56.5832 47.7384C57.2245 48.2592 58.1499 48.5174 59.3637 48.5131C60.4354 48.5131 61.4383 48.2936 62.3766 47.8589M49.1112 51.8833C47.1872 50.3811 46.2231 48.2807 46.2188 45.5777C46.2145 42.7757 47.1356 40.6193 48.9863 39.1085C50.8371 37.6021 53.4928 36.8445 56.9533 36.8359C58.3048 36.8359 59.6564 36.978 61.0036 37.2706C62.3551 37.5633 63.5172 37.9851 64.4856 38.4328C64.4985 37.163 64.4211 36.328 63.4225 35.5834C61.4813 33.879 54.9648 33.427 50.5315 35.0239L50.4756 35.0411C50.4756 32.3295 50.3723 30.8833 51.5129 29.734C53.0064 28.2362 54.7367 27.6896 59.8888 27.681C64.5287 27.6724 67.6793 28.5547 70.0552 30.4012C72.4268 32.2477 73.619 34.8345 73.6233 38.1573L73.6406 49.5547C73.6449 52.6107 72.5817 53.3208 70.0509 53.3251L64.4469 53.3338V51.2032C64.4555 51.2764 64.1413 51.5777 64.081 51.6336C62.9232 52.7441 61.533 53.4543 59.9663 53.7986C58.2274 54.1817 56.3594 54.2204 54.5947 54.0052C53.0925 53.8244 51.6119 53.4069 50.2905 52.6623C49.8773 52.4299 49.4856 52.1673 49.1112 51.879"
        fill="#F4EDE3"
      />
      <path
        d="M37.9003 34.2446L44.391 34.236V31.1671C44.3823 29.269 42.8415 27.8228 40.939 27.8271H37.8874C37.8874 26.9448 37.8788 22.0036 37.8788 22.0036C37.8788 22.0036 37.8745 18.1944 37.8702 17.213C35.3608 17.213 32.5158 17.1313 30.3551 19.3006C28.2934 21.3795 28.655 23.9921 28.6593 27.8486L22.1514 27.8572V30.8314C22.16 32.7295 23.7009 34.2704 25.599 34.2661H28.6679L28.6765 38.8974L28.7281 44.3551C28.7669 49.8343 33.226 54.2589 38.7095 54.2503C40.6593 54.2503 42.4756 53.6822 44.0079 52.7138L43.9993 46.7353C40.3364 48.0523 37.9132 45.3924 37.9089 42.0997C37.9089 41.6564 37.896 34.2489 37.896 34.2489L37.9003 34.2446Z"
        fill="#F4EDE3"
      />
      <path
        d="M196.37 33.9949L202.861 33.9862V30.9174C202.852 29.0192 201.311 27.573 199.409 27.5774H196.357C196.357 26.695 196.348 21.7538 196.348 21.7538C196.348 21.7538 196.344 17.9446 196.34 16.9633C193.831 16.9633 190.986 16.8815 188.825 19.0508C186.763 21.1297 187.125 23.7423 187.129 27.5989L180.621 27.6075V30.5816C180.63 32.4798 182.171 34.0207 184.069 34.0164H187.138L187.146 38.6477L187.198 44.1053C187.237 49.5845 191.696 54.0092 197.179 54.0006C199.129 54.0006 200.945 53.4324 202.478 52.464L202.469 46.4855C198.806 47.8026 196.383 45.1426 196.379 41.8499C196.379 41.4066 196.366 33.9992 196.366 33.9992L196.37 33.9949Z"
        fill="#F4EDE3"
      />
      <path
        d="M105.754 47.7948C106.688 47.3601 107.394 46.7962 107.88 46.1033V43.9211C106.387 42.9182 104.691 42.4189 102.784 42.4232C101.57 42.4232 100.636 42.6858 99.9822 43.2066C99.3237 43.7274 98.9966 44.4892 99.0009 45.4921C99.0009 46.4261 99.3237 47.1535 99.965 47.67C100.606 48.1908 101.532 48.449 102.746 48.4447C103.817 48.4447 104.82 48.2252 105.758 47.7905M92.493 51.8149C90.569 50.3127 89.6049 48.2123 89.6006 45.5093C89.5963 42.8063 90.5174 40.5509 92.3682 39.0401C94.219 37.5337 96.8746 36.7762 100.335 36.7676C101.687 36.7676 103.038 36.9096 104.385 37.2023C105.737 37.495 106.899 37.9168 107.867 38.3644C107.88 37.0947 107.803 36.2597 106.804 35.5151C104.863 33.8106 98.3466 33.3587 93.9134 34.9555L93.8574 34.9727C93.8574 32.2611 93.7541 30.8149 94.8947 29.6657C96.3883 28.1678 98.1185 27.6212 103.271 27.6126C107.91 27.604 111.061 28.4864 113.437 30.3328C115.809 32.1793 117.001 34.7661 117.005 38.0889L117.022 49.4864C117.027 52.5423 115.964 53.2525 113.433 53.2568L107.829 53.2654V51.1348C107.837 51.208 107.523 51.5093 107.463 51.5653C106.305 52.6757 104.915 53.3859 103.348 53.7302C101.609 54.1133 99.7412 54.1521 97.9765 53.9368C96.4743 53.7561 94.9937 53.3386 93.6723 52.594C93.2591 52.3615 92.8675 52.099 92.493 51.8106"
        fill="#F4EDE3"
      />
      <path
        d="M169.06 47.6955C169.994 47.2607 170.7 46.6969 171.186 46.0039V43.8217C169.692 42.8188 167.997 42.3196 166.09 42.3239C164.876 42.3239 163.942 42.5864 163.288 43.1072C162.629 43.628 162.302 44.3899 162.307 45.3927C162.307 46.3267 162.629 47.0541 163.271 47.5706C163.912 48.0914 164.837 48.3497 166.051 48.3454C167.123 48.3454 168.126 48.1259 169.064 47.6911M155.799 51.7155C153.875 50.2134 152.911 48.113 152.906 45.4099C152.902 42.7069 153.823 40.4516 155.674 38.9408C157.525 37.4343 160.18 36.6768 163.641 36.6682C164.992 36.6682 166.344 36.8102 167.691 37.1029C169.043 37.3956 170.205 37.8174 171.173 38.265C171.186 36.9953 171.109 36.1603 170.11 35.4157C168.169 33.7112 161.652 33.2593 157.219 34.8562L157.163 34.8734C157.163 32.1617 157.06 30.7155 158.2 29.5663C159.694 28.0685 161.424 27.5219 166.576 27.5132C171.216 27.5046 174.367 28.387 176.743 30.2335C179.114 32.08 180.307 34.6668 180.311 37.9896L180.328 49.387C180.332 52.4429 179.269 53.1531 176.738 53.1574L171.134 53.166V51.0355C171.143 51.1087 170.829 51.4099 170.769 51.4659C169.611 52.5764 168.22 53.2866 166.654 53.6309C164.915 54.014 163.047 54.0527 161.282 53.8375C159.78 53.6567 158.299 53.2392 156.978 52.4946C156.565 52.2622 156.173 51.9996 155.799 51.7112"
        fill="#F4EDE3"
      />
    </svg>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function TalabatSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        background: "#fdf6ef" /* warm cream — matches your site */,
        overflow: "hidden",
        padding: "96px 0 88px",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Lato:wght@300;400;700;900&display=swap');

        @keyframes tl-pulseRing {
          0%   { transform: translate(-50%,-50%) scale(1);   opacity: .5; }
          100% { transform: translate(-50%,-50%) scale(1.9); opacity: 0;  }
        }
        @keyframes tl-liveBlink {
          0%,100% { opacity:1 } 50% { opacity:.35 }
        }
        @keyframes tl-badgePop {
          0%   { transform: scale(0) rotate(-14deg); opacity:0 }
          70%  { transform: scale(1.12) rotate(3deg) }
          100% { transform: scale(1)   rotate(0deg); opacity:1 }
        }
        @keyframes tl-chipIn {
          from { opacity:0; transform: translateX(20px) }
          to   { opacity:1; transform: translateX(0) }
        }

        .tl-layout {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .tl-layout {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
          .tl-feat { justify-content: flex-start !important; text-align: left; }
          .tl-sub  { margin: 0 auto 28px !important; }
        }

        .tl-feat {
          display: flex;
          align-items: center;
          gap: 14px;
          background: #fff;
          border: 1px solid #f0e0d0;
          border-radius: 14px;
          padding: 14px 18px;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          cursor: default;
        }
        .tl-feat:hover {
          transform: translateX(5px);
          box-shadow: 0 4px 20px rgba(38,20,10,.07);
          border-color: rgba(255,89,0,.3);
        }

        .tl-stat {
          background: #fff;
          border: 1px solid #f0e0d0;
          border-radius: 14px;
          padding: 18px 14px;
          text-align: center;
          transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
          cursor: default;
        }
        .tl-stat:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(255,89,0,.12);
          border-color: rgba(255,89,0,.3);
        }

        .tl-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FF5900;
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 15px 34px;
          font-family: 'Lato', sans-serif;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: .07em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background .22s, transform .18s, box-shadow .22s;
          box-shadow: 0 8px 28px rgba(255,89,0,.28);
        }
        .tl-cta-btn:hover {
          background: #e64e00;
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(255,89,0,.4);
        }
        .tl-cta-btn:active { transform: scale(.97); }

        .tl-step {
          flex: 1;
          background: #fdf6ef;
          border: 1px solid #f0e0d0;
          border-radius: 999px;
          padding: 8px 10px;
          font-size: 10px;
          font-weight: 700;
          color: #b08060;
          letter-spacing: .05em;
          text-align: center;
          white-space: nowrap;
        }
        .tl-step.active {
          background: #FF5900;
          border-color: #FF5900;
          color: #fff;
        }
      `}</style>

      {/* ── Subtle background pattern ─────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(rgba(38,20,10,.045) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* warm glow top-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-80px",
          right: "-60px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,89,0,.09) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="tl-layout">
        {/* ── LEFT — copy ───────────────────────────────────────────────────── */}
        <div>
          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "2px",
                background: "#FF5900",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "#FF5900",
              }}
            >
              Now Delivering Via
            </span>
          </motion.div>

          {/* Real talabat logo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{ marginBottom: "4px" }}
          >
            <TalabatLogo width={170} />
          </motion.div>

          {/* headline */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 700,
              color: "#26140a",
              lineHeight: 1.2,
              margin: "20px 0 12px",
            }}
          >
            Royal Biryani,
            <br />
            <em style={{ color: "#FF5900", fontStyle: "italic" }}>
              Delivered to Your Door.
            </em>
          </motion.h2>

          {/* sub-copy */}
          <motion.p
            className="tl-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.22 }}
            style={{
              fontSize: "15px",
              color: "#7a5c47",
              lineHeight: 1.75,
              maxWidth: "400px",
              margin: "0 0 28px",
            }}
          >
            Skip the queue — order the authentic taste of Hyderabad straight
            from your phone. Hot, fresh, and at your door in 15–25 minutes.
            Because royalty shouldn't have to wait.
          </motion.p>

          {/* 3 feature rows */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            {[
              {
                icon: "⚡",
                title: "15–25 Min Delivery",
                sub: "Hot & fresh, every single time",
              },
              {
                icon: "🎁",
                title: "20% Off Your First Order",
                sub: "New to Talabat? You're very welcome",
              },
              {
                icon: "🚚",
                title: "Free Delivery Available",
                sub: "On select orders with Talabat Pro",
              },
            ].map((feat, i) => (
              <motion.div
                key={i}
                className="tl-feat"
                initial={{ opacity: 0, x: -18 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.48, delay: 0.3 + i * 0.1 }}
              >
                <span style={{ fontSize: "22px", flexShrink: 0 }}>
                  {feat.icon}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#26140a",
                      marginBottom: "2px",
                    }}
                  >
                    {feat.title}
                  </div>
                  <div style={{ fontSize: "12px", color: "#9e7a5f" }}>
                    {feat.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.62 }}
          >
            <a
              href="https://www.talabat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tl-cta-btn"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="8" stroke="white" strokeWidth="1.5" />
                <path
                  d="M6 9h6M9 6l3 3-3 3"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Order on Talabat
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT — card ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 28 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative" }}
        >
          {/* pulse rings */}
          {[0, 1].map((i) => (
            <div
              key={i}
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "300px",
                height: "300px",
                marginLeft: "-150px",
                marginTop: "-150px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,89,0,.2)",
                animation: `tl-pulseRing 3.2s ${i * 1.6}s ease-out infinite`,
                pointerEvents: "none",
              }}
            />
          ))}

          {/* card */}
          <div
            style={{
              position: "relative",
              background: "#fff",
              border: "1px solid #f0e0d0",
              borderRadius: "28px",
              padding: "36px 30px",
              boxShadow:
                "0 20px 64px rgba(38,20,10,.1), 0 2px 8px rgba(38,20,10,.05)",
            }}
          >
            {/* card top — logo + live badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "24px",
              }}
            >
              <TalabatLogo width={110} />
              {/* Live badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(34,197,94,.08)",
                  border: "1px solid rgba(34,197,94,.28)",
                  borderRadius: "999px",
                  padding: "6px 14px",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 6px #22c55e",
                    display: "inline-block",
                    animation: "tl-liveBlink 1.8s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#16a34a",
                    letterSpacing: ".07em",
                    textTransform: "uppercase",
                  }}
                >
                  Live Now
                </span>
              </div>
            </div>

            {/* divider */}
            <div
              style={{
                height: "1px",
                background: "linear-gradient(to right, #f0ddd0, transparent)",
                marginBottom: "22px",
              }}
            />

            {/* 4 stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "22px",
              }}
            >
              {[
                { val: "15–25", lbl: "Min Delivery" },
                { val: "20% Off", lbl: "First Order" },
                { val: "4.8 ★", lbl: "App Rating" },
                { val: "1M+", lbl: "Users in Oman" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="tl-stat"
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.42, delay: 0.44 + i * 0.08 }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 900,
                      color: "#FF5900",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#b08060",
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    {s.lbl}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 3-step journey */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {["Open App", "Find RHBR", "Order & Enjoy"].map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    flex: 1,
                  }}
                >
                  <div className={`tl-step${i === 1 ? " active" : ""}`}>
                    {step}
                  </div>
                  {i < 2 && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <path
                        d="M2 5h6M5.5 2.5L8 5l-2.5 2.5"
                        stroke="#c8a898"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* floating 20% OFF badge */}
          <motion.div
            initial={{ scale: 0, rotate: -14, opacity: 0 }}
            animate={inView ? { scale: 1, rotate: -8, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.72,
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            style={{
              position: "absolute",
              top: "-16px",
              right: "-16px",
              background: "#FF5900",
              borderRadius: "50%",
              width: "76px",
              height: "76px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(255,89,0,.4)",
              border: "3px solid #fff",
            }}
          >
            <span
              style={{
                fontSize: "17px",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1,
              }}
            >
              20%
            </span>
            <span
              style={{
                fontSize: "8px",
                fontWeight: 700,
                color: "rgba(255,255,255,.9)",
                letterSpacing: ".07em",
                textTransform: "uppercase",
              }}
            >
              OFF
            </span>
          </motion.div>

          {/* floating delivery chip */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.52, delay: 0.84 }}
            style={{
              position: "absolute",
              bottom: "-14px",
              left: "-14px",
              background: "#fff",
              border: "1px solid #f0e0d0",
              borderRadius: "999px",
              padding: "10px 18px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 8px 24px rgba(38,20,10,.1)",
            }}
          >
            <span style={{ fontSize: "18px" }}>⏱️</span>
            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 900,
                  color: "#26140a",
                  lineHeight: 1,
                }}
              >
                15–25 min
              </div>
              <div
                style={{ fontSize: "10px", color: "#9e7a5f", fontWeight: 600 }}
              >
                avg. delivery
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
