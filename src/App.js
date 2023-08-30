import React, { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Common/NavBar/StickyNav";
import HomePageOne from "./Components/Pages/HomePageOne/index";
import CategoriesVisaPage from "./Components/Pages/Categories-VisaPage/index";
import AboutPage from "./Components/Pages/Pages-AboutPage/index";
import Dashboard from "./Components/Pages/Dashboard/index";
import News from "./Components/Pages/News/index";
import Cta from "./Components/Common/CTASECTION/CtaSection";
import Footer from "./Components/Common/Footer/Footer";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import aboutBackground from "./assets/common-banner.png";
// import homeBackground from "../../my-app/public/bg.png";

function App() {
  const [backgroundClass, setBackgroundClass] = useState("bg-home");

  const handleRouteChange = (route) => {
    if (route === "/About") {
      setBackgroundClass("bg-common");
    } else {
      setBackgroundClass("bg-home");
    }
  }

  return (
    <>
      <Router>
        <div className={`display-img ${backgroundClass}`}>
          <NavBar />
          <div className="common_bannner_text">
            <h2>About us</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCircle} />
                </span>{" "}
                About
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePageOne />} />

          <Route
            path="/About"
            element={<AboutPage onRouteChange={handleRouteChange} />}
          />
          <Route path="/Visa" element={<CategoriesVisaPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/News" element={<News />} />
        </Routes>
        <BackToTopButton />
        <Cta />
        <Footer />
      </Router>
    </>
  );
}

export default App;

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonStyle = {
    position: "fixed",
    right: "20px",
    bottom: showButton ? "20px" : "-60px", // Initial position above the screen
    backgroundColor: "#8B3EEA",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 99,
    transition: "bottom 0.5s ease-in-out", // Add transition for smooth animation
  };

  const buttonHoverStyle = {
    backgroundColor: "black",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {showButton && (
        <button
          className={`back-to-top-button ${isHovered ? "hovered" : ""}`}
          style={{ ...buttonStyle, ...(isHovered ? buttonHoverStyle : {}) }}
          onClick={scrollToTop}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FiChevronUp />
        </button>
      )}
    </>
  );
};
