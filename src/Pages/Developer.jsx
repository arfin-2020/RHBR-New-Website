import React from "react";
import { motion } from "framer-motion";

const Developer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#26140a",
        color: "#f5e8d8",
        padding: "30px 20px",
        textAlign: "center",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      {/* Developer Credit */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "14px", marginBottom: "15px" }}
      >
        Developed by,{" "}
        <span style={{ fontWeight: "bold" }}>Arfin Chowdhury Arif</span>
      </motion.p>

      {/* Social Links */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <motion.a
          href="https://github.com/arfin-2020"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          style={{
            color: "#f5e8d8",
            textDecoration: "none",
            borderBottom: "1px solid transparent",
          }}
        >
          GitHub
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/arfin25/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          style={{
            color: "#f5e8d8",
            textDecoration: "none",
            borderBottom: "1px solid transparent",
          }}
        >
          LinkedIn
        </motion.a>
      </div>
    </footer>
  );
};

export default Developer;
