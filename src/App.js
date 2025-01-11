import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <nav className="nav-bar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div id="home" className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Kenth Condez</h1>
          <p className="hero-subtitle">Software Developer</p>
        </div>
      </div>

      <div id="about" className="about-section">
        <h2 className="section-title">About Me</h2>
        <p className="section-content">
          I am a creative developer with a focus on web design, software
          development, and problem-solving. With a passion for technology, I aim
          to create projects that make a difference.
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

      <footer className="footer">
        &copy; 2025 Kenth Condez. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
