import { useState, useEffect } from "react"; // Added useEffect
import { motion, AnimatePresence } from "framer-motion";

const BRAND = "#26140a";
const BG = "#f5e8d8";
const BORDER = "#e6d6c3";

export default function ReservationSection() {
  // --- SCROLL RESET LOGIC ---
  // This ensures the page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xgopllew", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `New Reservation Request from ${form.name}`,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          guests: "2",
          date: "",
          time: "",
          message: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Reservation Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ background: BG, padding: "80px 20px" }} id="reservation">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap');

        .container { max-width: 1000px; margin: auto; }

        .formBox {
          background: #fff;
          padding: clamp(24px, 6vw, 48px);
          border-radius: 32px;
          border: 1px solid ${BORDER};
          box-shadow: 0 30px 70px rgba(38,20,10,0.1);
        }

        .inputGroup {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        @media (max-width: 640px) {
          .inputGroup { grid-template-columns: 1fr; }
        }

        .label {
          display: block;
          font-family: 'Lato', sans-serif;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: ${BRAND};
          margin-bottom: 8px;
          opacity: 0.8;
        }

        .input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid ${BORDER};
          font-size: 14px;
          transition: 0.3s;
          box-sizing: border-box;
          background: #fafafa;
        }

        .input:focus {
          border-color: ${BRAND};
          background: #fff;
          box-shadow: 0 0 0 3px rgba(38,20,10,0.08);
          outline: none;
        }

        .btn {
          width: 100%;
          padding: 18px;
          border-radius: 16px;
          background: ${BRAND};
          color: #fff;
          border: 2px solid ${BRAND};
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: 0.3s;
          margin-top: 10px;
          font-family: 'Lato', sans-serif;
        }

        .btn:hover {
          background: transparent;
          color: ${BRAND};
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .header {
          text-align: center;
          margin-bottom: 50px;
        }
      `}</style>

      <div className="container">
        <div className="header">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              color: "#b8893a",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            Table Booking
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 8vw, 48px)",
              color: BRAND,
              marginTop: "10px",
            }}
          >
            Reserve Your Table
          </motion.h2>
        </div>

        <motion.div
          className="formBox"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  background: "#ecfdf5",
                  color: "#065f46",
                  padding: "16px",
                  borderRadius: "12px",
                  marginBottom: "24px",
                  fontWeight: 600,
                  fontSize: "14px",
                  textAlign: "center",
                  border: "1px solid #10b981",
                }}
              >
                🎉 Reservation Requested! We will confirm your table shortly.
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <div>
                <label className="label">Full Name</label>
                <input
                  className="input"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="label">Phone Number</label>
                <input
                  className="input"
                  name="phone"
                  placeholder="+968 XXXX XXXX"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="inputGroup">
              <div>
                <label className="label">Email Address</label>
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="label">Number of Guests</label>
                <select
                  className="input"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Person" : "People"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="inputGroup">
              <div>
                <label className="label">Date</label>
                <input
                  className="input"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="label">Preferred Time</label>
                <input
                  className="input"
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label className="label">Special Requests (Optional)</label>
              <textarea
                className="input"
                name="message"
                rows="3"
                placeholder="Birthdays, anniversaries, or allergies..."
                value={form.message}
                onChange={handleChange}
                style={{ resize: "none" }}
              />
            </div>

            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Processing..." : "Confirm Reservation"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
