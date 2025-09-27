import React, { useState } from "react";
import { Link } from "react-router-dom";
import wordCloudImage from "./test1.jpg";

export default function Summary() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#F9FAF8", // off-white background
        color: "#2E2E2E", // dark gray text
        textAlign: "center",
      }}
    >
      {/* Summary Section */}
      <div>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
            color: "#51a5e3", // deep turquoise for heading
          }}
        >
          Summary of Comments
        </h2>
        <p style={{ fontSize: "1.2rem", opacity: 0.85, color: "#333" }}>
          👉 Your summary output will appear here...
        </p>
        <Link
          to="/"
          style={{ marginTop: "2rem", textDecoration: "none", display: "inline-block" }}
        >
          <button
            style={{
              background: "linear-gradient(135deg, #51a5e3 0%, #51a5e3 100%)", // teal/cyan gradient
              border: "none",
              borderRadius: "30px",
              padding: "12px 28px",
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#fff",
              cursor: "pointer",
              boxShadow: "0 4px 15px #00183d",
              transition: "all 0.3s ease",
              minWidth: "180px",
            }}
            onMouseEnter={(e) => {
              e.target.style.background ="linear-gradient(135deg, #00183d 0%, #00183d 100% )"; // amber highlight on hover
              e.target.style.boxShadow = "0 6px 20px #00183d"; // amber shadow
            }}
            onMouseLeave={(e) => {
              e.target.style.background ="linear-gradient(135deg, #51a5e3 0%, #51a5e3 100%)"; // revert teal
              e.target.style.boxShadow = "0 4px 15px #00183d";  
            }}
          >
            Back
          </button>
        </Link>
      </div>

      {/* Vertical Tab */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          width: hovered ? "60px" : "40px",
          backgroundColor: "#51a5e3", // teal background
          color: "#fff",
          fontWeight: "700",
          fontSize: "1rem",
          letterSpacing: "0.3em",
          cursor: "pointer",
          userSelect: "none",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          transition: "width 0.3s ease",
          overflow: "hidden",
          boxSizing: "border-box",
          boxShadow: hovered
            ? "2px 0 8px #00183d" // red/amber highlight shadow on active tab
            : "none",
        }}
      >
        <span
          style={{
            display: "inline-block",
            transformOrigin: "center",
            transition: "transform 0.3s ease",
            transform: hovered ? "scale(1.5)" : "scale(1)",
            whiteSpace: "nowrap",
          }}
        >
          Word Cloud
        </span>
      </div>

      {/* Sliding Word Cloud Image */}
      <div
        style={{
          position: "fixed",
          left: hovered ? "60px" : "0px",
          top: "50%",
          transform: hovered ? "translateY(-50%)" : "translate(-100%, -50%)",
          width: "300px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(2, 142, 151, 0.75)", // teal shadow
          backgroundColor: "#FFFFFF", // white background
          padding: "0.5rem",
          zIndex: 1100,
          transition: "left 0.3s ease, transform 0.3s ease",
        }}
      >
        <img
          src={wordCloudImage}
          alt="wordcloud"
          style={{ width: "100%", borderRadius: "12px" }}
        />
      </div>
    </div>
  );
}
