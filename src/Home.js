import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F9FAF8 0%, #F9FAF8 100%)",
        color: "#fff",
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontWeight: 700,
          fontSize: "2.8rem",
          marginBottom: "0.25rem",
          color: "#51a5e3",
        }}
      >
        Sentiment Analysis of Comments through E-Consultation Module
      </h1>
      <h3
        style={{
          fontWeight: 300,
          fontSize: "1.2rem",
          marginBottom: "2rem",
          opacity: 0.9,
          color: "#000000ff",
        }}
      >
        Team Name: ApolloX
      </h3>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {[
          { to: "/sentiment", label: "Sentiment Analysis of Comments" },
          { to: "/wordcloud", label: "Word Cloud Generation" },
          { to: "/summary", label: "Summarisation of Comments" },
        ].map(({ to, label }) => (
          <Link key={to} to={to} style={{ textDecoration: "none" }}>
            <button
              style={{
                background:
                  "linear-gradient(135deg, #51a5e3 0%, #51a5e3 100%)", // red to amber gradient
                border: "none",
                borderRadius: "30px",
                padding: "12px 28px",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#ffffffff",
                cursor: "pointer",
                boxShadow: "0 4px 15px #00183d", // amber glow
                transition: "all 0.3s ease",
                minWidth: "230px",
                textAlign: "center",
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
              {label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
