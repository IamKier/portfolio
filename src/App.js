import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const cursorTrailRef = useRef(null);
  const isMouseMoving = useRef(false);

  const handleMouseMove = (event) => {
    if (cursorTrailRef.current) {
      const { clientX, clientY } = event;
      cursorTrailRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      if (!isMouseMoving.current) {
        cursorTrailRef.current.classList.add("moving");
        isMouseMoving.current = true;
      }
    }
  };

  const handleMouseLeave = () => {
    if (cursorTrailRef.current) {
      cursorTrailRef.current.classList.remove("moving");
      isMouseMoving.current = false;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <nav className="nav-bar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#works">Works</a>
        </nav>
      </header>

      <div id="home" className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Kenth Condez</h1>
          <p className="hero-subtitle">Web Developer</p>
        </div>
      </div>

      <div id="about" className="about-section">
        <h2 className="section-title">About Me</h2>
        <p className="section-content">
          A web developer with background in design and development.
        </p>
      </div>

      <div id="works" className="works-section">
        <h2 className="section-title">My Works</h2>
        <div className="portfolio-container">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Work Sample 1"
            className="portfolio-item"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Work Sample 2"
            className="portfolio-item"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Work Sample 3"
            className="portfolio-item"
          />
        </div>
      </div>

      <div
        className="cursor-trail"
        ref={cursorTrailRef}
        style={{ position: "fixed", top: 0, left: 0 }}
      />
    </div>
  );
}

export default App;
