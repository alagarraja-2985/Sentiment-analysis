import React from "react";
import { Link } from "react-router-dom";
import wordCloudImage from "./test1.jpg";

const WordCloud = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        background: "linear-gradient(135deg, #F9FAF8 0%, #F9FAF8 100%)", // teal to turquoise gradient
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2E2E2E", // dark gray text
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#51a5e3" }}>
        WordCloud
      </h2>
      <img
        src={wordCloudImage}
        alt="wordcloud"
        style={{
          width: "15em",
          height: "auto",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0, 128, 128, 0.4)", // subtle teal shadow
        }}
      />
      <Link to="/" style={{ marginTop: "2rem", textDecoration: "none" }}>
        <button
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1.1rem",
            borderRadius: "30px",
            border: "none",
            background: "linear-gradient(135deg, #51a5e3 0%, #51a5e3 100%)", // red to amber
            color: "#1a1a1a",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(255, 179, 52, 0.5)",
            transition: "all 0.3s ease",
            minWidth: "120px",
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
};

export default WordCloud;
