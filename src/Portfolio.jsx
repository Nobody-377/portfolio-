import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import PROFILE_IMG from "./assets/photo_resume.jpg";

const StarIcon = () => (
  <svg viewBox="0 0 12 12">
    <polygon points="6,0 7.5,4.5 12,6 7.5,7.5 6,12 4.5,7.5 0,6 4.5,4.5" />
  </svg>
);

function Navbar() {
  const [navState, setNavState] = useState("dark");

  useEffect(() => {
    const onScroll = () => {
      const aboutSection = document.getElementById("about");
      const heroEnd = window.innerHeight - 60;
      const aboutEnd = aboutSection
        ? aboutSection.offsetTop + aboutSection.offsetHeight - 60
        : heroEnd * 2;

      if (window.scrollY > aboutEnd) {
        setNavState("dark");
      } else if (window.scrollY > heroEnd) {
        setNavState("light");
      } else {
        setNavState("dark");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={navState === "light" ? "nav nav--light" : "nav"}>
      <a href="#" className="nav-logo">
        <StarIcon />
        Nandini Patel
      </a>
      <ul className="nav-links">
        <li><a href="#about">About me</a></li>
        <li><a href="#work">Work</a></li>
        <li>
          <a href="/resume.pdf" download="Nandini_Patel_Resume.pdf" className="nav-download-btn">
            {/* <span>Download Resume</span> */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </li>
        <li><a href="#contact" className="nav-cta">Get in touch!</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">

      <div className="hero-amber-block" />

      <div className="hero-left">
        <div className="hero-photo-area">
          <img src={PROFILE_IMG} alt="Profile" className="hero-img" />
        </div>
        <div className="hero-tagline">
          I love crafting seamless frontend experiences, working with backend
          systems, and exploring data. I approach problems in a rational, pragmatic way
          and build clean, functional solutions.
        </div>
        <span className="sp-corner">✦</span>
      </div>

      <div className="hero-right">
        <div className="portfolio-title">
          <div className="sparkles">
            <span className="sp">✦</span>
            {/* <span className="sp sm">✦</span> */}
            <span className="sp xs">✦</span>
          </div>
          <span className="pt-solid">PORTFOLIO</span>
          <span className="pt-outline">PORTFOLIO</span>
          <span className="pt-outline">PORTFOLIO</span>
          <span className="pt-outline">PORTFOLIO</span>
          <div className="hero-socials">
            <span>LI: <a></a>/unique</span>
            <span>IG: @nandini</span>
            <span>GH: /nandini-dev</span>
          </div>
        </div>
      </div>

      <a href="#about-nav" className="hero-scroll-btn">
        Scroll<br />down
      </a>

    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">
        <h1 className="about-greeting">
          Hello,<br />I'm Nandini !
        </h1>
        <p className="about-bio">
          I am a developer working across frontend, backend, and data analysis.
          I enjoy designing full-stack solutions and leveraging data
          to drive smart decision-making.
        </p>
        <a
          href="https://www.linkedin.com/in/nandini-patelunique/"
          target="_blank"
          rel="noreferrer"
          className="about-linkedin"
        >
          <span className="about-linkedin-icon">🔍︎</span>
          /nandini-patelunique
        </a>
      </div>

      <div className="about-right">
        <div className="about-white-circle" />
        <div className="about-photo-block">
          <span className="badge badge-dob">3rd July 2007</span>
          <div className="about-photo-frame">
            <img src={PROFILE_IMG} alt="Nandini Patel" />
          </div>
          <span className="badge badge-nat">Developer</span>
          <div className="contact-card">
            <h3>Contact</h3>
            <div className="contact-row">📍&nbsp; India</div>
            <div className="contact-row">✉️&nbsp;nandinipatel0307@gmail.com</div>
            <div className="contact-row">📞&nbsp; 8809842700</div>
          </div>
        </div>
        <div className="resume-bg-text">RESUME<br />RESUME</div>
      </div>

    </section>
  );
}

function Resume() {
  return (
    <section className="green-section" id="resume">

      {/* Left col — Education + Experience */}
      <div>
        <h2 className="sec-title">Education</h2>
        <div className="timeline">

          <div className="tl-item">
            <div className="tl-year">2025 - current</div>
            <div className="tl-place">Quad AI School of Technology</div>
            <div className="tl-field">B.Tech in Computer Science integrated with AI/ML</div>
          </div>

          <div className="tl-item">
            <div className="tl-year">2022 - 2024</div>
            <div className="tl-place">R.P.S School, Nalanda</div>
            <div className="tl-field">12th (Science, Maths)</div>
          </div>

          <div className="tl-item">
            <div className="tl-year">2020 - 2022</div>
            <div className="tl-place">R.P.S School, Nalanda</div>
            <div className="tl-field">10th Standard</div>
          </div>

        </div>

        <div className="exp-box">
          <div className="exp-box-title">Experience</div>

          <div className="exp-row">
            <div className="exp-yr">✦</div>
            <div>
              <div className="exp-role">Frontend Developer (Self Projects)</div>
              <div className="exp-sub">Built responsive web applications using React, JSX, and CSS</div>
              <div className="exp-sub">Created portfolio projects and UI clones to improve development skills</div>
            </div>
          </div>

          <div className="exp-row">
            <div className="exp-yr">✦</div>
            <div>
              <div className="exp-role">React Developer (Learning)</div>
              <div className="exp-sub">Worked with props, state, and component-based architecture</div>
              <div className="exp-sub">Developed interactive components and improved UI/UX practices</div>
            </div>
          </div>

          <div className="exp-row">
            <div className="exp-yr">✦</div>
            <div>
              <div className="exp-role">Web Development Beginner</div>
              <div className="exp-sub">Learned HTML, CSS, and JavaScript fundamentals</div>
              <div className="exp-sub">Built basic websites and explored modern web development</div>
            </div>
          </div>

          <div className="tag-row">
            <span className="tag">#Creativity</span>
            <span className="tag">#Communication</span>
            <span className="tag">#Detail-oriented</span>
            <span className="tag">#Adaptability</span>
          </div>

        </div>
      </div>

      {/* Right col — Skills + Language */}
      <div>
        <h2 className="sec-title">Technical Skills</h2>
        <div className="skills-header">
          <div>
            <div className="skills-subhead">Software tools</div>
            <div className="sw-icons">
              <span className="sw-box"><a href="https://code.visualstudio.com/">VS</a></span>
              <span className="sw-box"><a href="https://github.com/">GH</a></span>
              <span className="sw-box"><a href="https://www.postman.com/">Po</a></span>
              <span className="sw-box"><a href="https://vite.dev/">Vi</a></span>
              <span className="sw-box"><a href="https://www.mysql.com/">My</a></span>
              <span className="sw-box"><a href="https://www.figma.com/">Fg</a></span>
              <span className="sw-box"><a href="https://www.netlify.com/">Nt</a></span>
            </div>
          </div>
          <div>
            <div className="skills-subhead">Web Development</div>
            <div className="web-dev-text">
              Knowledge of:<br />
              HTML &nbsp;&nbsp; Python<br />
              CSS &nbsp;&nbsp;&nbsp;&nbsp; SQL<br />
              JavaScript &nbsp; DBMS
            </div>
          </div>
        </div>

        <div className="skill-pills">
          <span className="s-pill">Web Design</span>
          <span className="s-pill">UI/UX</span>
          <span className="s-pill">React</span>
          <span className="s-pill">Full Stack</span>
          <span className="s-pill">Data Analysis</span>
        </div>

        <h2 className="sec-title-white">Language</h2>
        <div className="lang-grid">
          <div>
            <div className="lang-name">English</div>
            <div className="lang-level">Fluent</div>
          </div>
          <div>
            <div className="lang-name">Hindi</div>
            <div className="lang-level">Fluent</div>
          </div>
          <div>
            <div className="lang-name">Gujarati</div>
            <div className="lang-level">Noob</div>
          </div>
        </div>
      </div>

    </section>
  );
}

function Bottom() {
  return (
    <section className="bottom" id="work">

      <div>
        <h2 className="bt-title">Activities</h2>

        <div className="act-row">
          <div className="act-yr">2025</div>
          <div>
            <div className="act-name">On-job-training</div>
            <div className="act-desc">A fully functional logistics platform that also has its own backend</div>
          </div>
        </div>

        <div className="act-row">
          <div className="act-yr">2026</div>
          <div>
            <div className="act-name">Tic-Tac-Toe</div>
            <div className="act-desc">A tic-tac-toe website with animated background</div>
          </div>
        </div>

      </div>

      <div>
        <h2 className="bt-title">Hobbies &amp; Interests</h2>
        <div className="hobby-grid">

          <div className="hobby-item">
            <div className="hobby-icon-wrap">🎵</div>
            <div className="hobby-lbl">Listening<br />to music</div>
          </div>

          <div className="hobby-item">
            <div className="hobby-icon-wrap">🎤</div>
            <div className="hobby-lbl">Singing</div>
          </div>

          <div className="hobby-item">
            <div className="hobby-icon-wrap">📖</div>
            <div className="hobby-lbl">Reading<br />books</div>
          </div>

          <div className="hobby-item">
            <div className="hobby-icon-wrap">💻</div>
            <div className="hobby-lbl">Coding</div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Bottom />
    </>
  );
}