import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRAND = "#26140a";
const BG = "#f5e8d8";
const BORDER = "#e6d6c3";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("https://formspree.io/f/xgopllew", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <section style={{ background: BG, padding: "80px 20px" }} id="contact">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap');

        .container { max-width: 1200px; margin: auto; }

        .grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .grid { gap: 30px; }
        }

        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr; }
          .container { padding: 0 10px; }
        }

        .formBox {
          background: #fff;
          padding: clamp(20px, 5vw, 40px);
          border-radius: 24px;
          border: 1px solid ${BORDER};
          box-shadow: 0 25px 60px rgba(38,20,10,0.08);
        }

        .input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid ${BORDER};
          margin-bottom: 14px;
          font-size: 14px;
          transition: 0.3s;
          box-sizing: border-box;
        }

        .input:focus {
          border-color: ${BRAND};
          box-shadow: 0 0 0 3px rgba(38,20,10,0.1);
          outline: none;
        }

        .btn {
          width: 100%;
          padding: 15px;
          border-radius: 14px;
          background: ${BRAND};
          color: #fff;
          border: 2px solid ${BRAND};
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn:hover {
          background: transparent;
          color: ${BRAND};
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .card {
          background: #fff;
          border-radius: 20px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 18px;
          border: 1px solid ${BORDER};
          margin-bottom: 20px;
          transition: 0.35s;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(38,20,10,0.12);
        }

        .icon {
          width: 55px;
          height: 55px;
          border-radius: 14px;
          background: rgba(38,20,10,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .infoText {
          overflow-wrap: break-word;
          word-break: break-word;
          font-size: clamp(13px, 4vw, 16px);
        }

        @media (max-width: 480px) {
          .card { padding: 15px; gap: 12px; }
          .icon { width: 45px; height: 45px; font-size: 18px; }
        }
      `}</style>

      <div className="container">
        {/* Title: Responsive font size */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 8vw, 44px)",
            color: BRAND,
            marginBottom: "clamp(30px, 10vw, 60px)",
            marginTop: "60px"
          }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid">
          {/* FORM */}
          <motion.div
            className="formBox"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    background: "#ecfdf5",
                    color: "#065f46",
                    padding: "14px",
                    borderRadius: "12px",
                    marginBottom: "20px",
                    fontWeight: 600,
                    fontSize: "14px",
                    textAlign: "center"
                  }}
                >
                  ✅ Message sent successfully! We’ll contact you soon.
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit}>
              <input className="input" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
              <input className="input" name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
              <input className="input" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
              <textarea className="input" name="message" rows="5" placeholder="Your Message" value={form.message} onChange={handleChange} required style={{ resize: "vertical", minHeight: "120px" }} />

              <button className="btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ 
              fontFamily: "'Playfair Display'", 
              color: BRAND, 
              marginBottom: 20,
              fontSize: "clamp(20px, 5vw, 28px)"
            }}>
              Want to reach out directly?
            </h3>

            <div className="card">
              <div className="icon">📧</div>
              <div className="infoText">
                <p style={{ margin: 0, color: "rgba(38,20,10,0.6)", fontSize: "13px" }}>Email</p>
                <strong style={{ color: BRAND }}>royal.hydbiryani@gmail.com</strong>
              </div>
            </div>

            <div className="card">
              <div className="icon">📞</div>
              <div className="infoText">
                <p style={{ margin: 0, color: "rgba(38,20,10,0.6)", fontSize: "13px" }}>Phone</p>
                <strong style={{ color: BRAND }}>
                  +968 7260 6555 ,  +968 7260 7444
                </strong>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}