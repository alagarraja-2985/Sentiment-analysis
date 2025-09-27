import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";
import Sentiment from "./sentiment";
import WordCloud from "./WordCloud";
import Summary from "./Summary";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogin = () => {
    console.log("Sign In clicked"); // Debug log
    setIsSignedIn(true);
  };

  return (
    <div>
      {!isSignedIn ? (
        <SignIn onLogin={handleLogin} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sentiment" element={<Sentiment />} />
            <Route path="/wordcloud" element={<WordCloud />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}
