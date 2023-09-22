import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SiteNotice from "./components/SiteNotice";
import PrivacyPolicy from "./components/PrivacyPolicy";

import { useEffect, useState } from "react";

import "./index.css";

function App() {
  const [height, setHeight] = useState(window.innerHeight); //default value: height of screen (window.innerHeight)

  function handleResize() {
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  return (
    <div
      style={{ minHeight: `${height}px` }}
      className={`flex flex-col justify-between pb-5  `}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/site-notice" element={<SiteNotice />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
