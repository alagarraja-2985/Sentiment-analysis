import React from "react";
import { Link } from "react-router-dom";

export default function Sentiment() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F9FAF8 0%, #F9FAF8 100%)", // teal to turquoise gradient
        color: "#2E2E2E", // dark teal text
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "1rem",
          color: "#51a5e3",
        }}
      >
        Sentiment Analysis Results
      </h2>
      <p style={{ fontSize: "1.2rem", opacity: 0.85, color: "#333" }}>
        👉 Your sentiment analysis output will appear here...
      </p>
      <Link to="/" style={{ marginTop: "2rem", textDecoration: "none" }}>
        <button
          style={{
            background: "linear-gradient(135deg, #51a5e3 0%, #51a5e3 100%)", // amber gradient
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
                e.target.style.background ="linear-gradient(135deg, #00183d 0%, #00183d 100% )"; // amber to red swap
                e.target.style.color = "#fff";
                e.target.style.boxShadow = "0 6px 20px #005b85";
              }}
              onMouseLeave={(e) => {
                e.target.style.background ="linear-gradient(135deg, #51a5e3 0%, #51a5e3 100%)";
                e.target.style.color = "#ffffffff";
                e.target.style.boxShadow = "0 4px 15px #00183d";
              }}
        >
          Back
        </button>
      </Link>
    </div>
  );
}
