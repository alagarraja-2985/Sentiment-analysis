import React from "react";

export default function SignIn({ onLogin }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F9FAF8 0%, #F9FAF8 100%)",
        color: "#51a5e3",
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "0.5rem" }}>
        Welcome to ApolloX
      </h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9,color: "#333" }}>
        Sign in to explore sentiment analysis, word clouds, and summaries.
      </p>
      <button
        onClick={() => {
          console.log("Sign In button clicked");
          onLogin();
        }}
        style={{
          background: "linear-gradient(135deg, #51a5e3 0%, #51a5e3 100%)",
          border: "none",
          borderRadius: "30px",
          padding: "12px 40px",
          fontSize: "1.2rem",
          fontWeight: "600",
          color: "#ffffffff",
          cursor: "pointer",
          boxShadow: "0 4px 15px #00183d",
          transition: "all 0.3s ease",
          minWidth: "160px",
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
        Sign In
      </button>
    </div>
  );
}
