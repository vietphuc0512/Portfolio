import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import profileImage from "./assets/images/profile.jpg";
import { useEffect, useState } from "react";
import AboutMe from "./assets/images/AboutMe.png";
import AboutMe2 from "./assets/images/AboutMe2.png";
import promanage1 from "./assets/images/promanage1.jpg";
import promanage2 from "./assets/images/promanage2.jpg";
import promanage3 from "./assets/images/promanage3.jpg";
import promanage4 from "./assets/images/promanage4.jpg";
const skills = {
  Testing: [
    "Test Case Design",
    "Functional Testing",
    "Bug Reporting"
  ],
  "QA / QC": [
    "Quality Verification",
    "Test Execution",
    "Defect Reporting"
  ],
  "Business Analysis": [
    "Problem Analysis",
    "Requirement Analysis",
    "SRS Verification"
  ],
  Development: [
    "React",
    ".NET",
    "C#"
  ],
  Database: [
    "PostgreSQL",
    "MySQL",
    "SSMS"
  ],
  Tools: [
    "Jira",
    "Postman",
    "Git"
  ]
};

const projects = [
  {
    title: "Event Booking Web App",
    text: "A web application project for creating, managing, and booking events.",
    tags: ["React", ".NET", "PostgreSQL"],
    className: "project-event"
  },

  {
    title: "Other Academic Projects",
    text: "Smaller projects developed during coursework, including an E-commerce project and a ToDo List application.",
    tags: ["E-commerce", "ToDo List"],
    className: "project-personal"
  }
];

const Icon = ({ children }) => <span className="icon">{children}</span>;



function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [currentProjectImage, setCurrentProjectImage] = useState(0);
const [selectedProjectImage, setSelectedProjectImage] = useState(null);
const projectImages = [
  {
    src: promanage1,
    alt: "ProManage Dashboard",
  },
  {
    src: promanage2,
    alt: "ProManage Project Management",
  },
  {
    src: promanage3,
    alt: "ProManage Analytics",
  },
  {
    src: promanage4,
    alt: "ProManage Kanban Board",
  },
];

const previousProjectImage =
  (currentProjectImage - 1 + projectImages.length) %
  projectImages.length;

const nextProjectImage =
  (currentProjectImage + 1) %
  projectImages.length;

const goToPreviousProjectImage = () => {
  setCurrentProjectImage(previousProjectImage);
};

const goToNextProjectImage = () => {
  setCurrentProjectImage(nextProjectImage);
};

const openProjectImage = (index) => {
  setSelectedProjectImage(index);
};

const closeProjectImage = () => {
  setSelectedProjectImage(null);
};
useEffect(() => {
  if (selectedProjectImage !== null) return;

  const autoplay = setInterval(() => {
    setCurrentProjectImage((current) => {
      return (current + 1) % projectImages.length;
    });
  }, 3500);

  return () => clearInterval(autoplay);
}, [selectedProjectImage, projectImages.length]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  return (
    <div className="site-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="grid-bg" />
<header className="navbar">
<nav className="nav-links">
  {[
    ["Home", "home"],
    ["About", "about"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Contact", "contact"],
  ].map(([label, id]) => (
    <button
      key={id}
      className={`nav-link ${activeSection === id ? "active" : ""}`}
      onClick={() => scrollTo(id)}
    >
      {label}
    </button>
  ))}
</nav>

  <button
    className="talk-btn"
    onClick={() => scrollTo("contact")}
  >
    <span>Let's Talk</span>
    <span className="talk-arrow">↗</span>
  </button>
</header>

      <main>
        {/* =========================
            HERO
        ========================== */}
<section id="home" className="hero section-pad">
  <div className="hero-copy">

    

    <div className="hero-heading">

      <div className="hero-hi-wrap">
        <span className="hero-hi">Hi,</span>

        <svg
          className="hero-orbit"
          viewBox="0 0 900 220"
          preserveAspectRatio="none"
        >
          <path d="M40 170 C260 10, 620 0, 850 80" />
        </svg>

        <span className="hero-spark spark-1">✦</span>
        <span className="hero-spark spark-2">✦</span>
      </div>

      <h1>
        <span className="hero-name">
          I’m <em>Viet Phuc.</em>
        </span>

        <span className="hero-problem">
          I find problems,
        </span>

        <span className="hero-solution">
          <em>help build better solutions.</em>
        </span>
      </h1>
    </div>

    <p className="hero-desc">
      I'm a fourth-year Software Engineering student at FPT University
      with practical experience in software testing and QA/QC.
      <br />
      <br />
      Through software projects, I also explore business analysis and
      software development, with a focus on understanding problems,
      requirements, and software quality.
    </p>

    <div className="hero-actions">


      <a
        className="secondary-btn"
        href="https://canva.link/79s63v183ym27lc"
      >
        Download CV
      </a>
    </div>

  </div>

  {/* PROFILE */}
  <div className="hero-profile">
    <div className="profile-glow" />

    <div className="profile-orbit orbit-a" />
    <div className="profile-orbit orbit-b" />

    <div className="profile-crystal crystal-a" />
    <div className="profile-crystal crystal-b" />

    <div className="profile-frame">
      <img
        src={profileImage}
        alt="Viet Phuc"
      />
    </div>

    <div className="profile-spark spark-p1">✦</div>
    <div className="profile-spark spark-p2">✦</div>
  </div>
</section>

        {/* =========================
            TECH MARQUEE
        ========================== */}
<div className="tech-marquee">
  {[
    { text: "THINK CLEARLY", icon: "💡" },
    { text: "UNDERSTAND THE PROBLEM", icon: "⌕" },
    { text: "SOLVE PROBLEMS", icon: "◇" },
    { text: "BUILD WITH PURPOSE", icon: "ϟ" },
    { text: "CREATE BETTER EXPERIENCES", icon: "▥" },
  ].map((item, i) => (
    <React.Fragment key={i}>
      <div className="marquee-item">
        <span className="marquee-icon">{item.icon}</span>
        <span className="marquee-text">{item.text}</span>
      </div>

      {i < 4 && <span className="marquee-separator">✦</span>}
    </React.Fragment>
  ))}
</div>

        {/* =========================
            ABOUT
        ========================== */}
        <section id="about" className="section section-pad">
          <SectionTitle
            number="01"
            kicker="GET TO KNOW ME"
            title="About Me"
          />

          <div className="about-grid">
            <div className="about-copy">
              <h3>
                Understanding problems.
                <br />
                <span>Improving quality.</span>
              </h3>

              <p>
I'm a fourth-year Software Engineering student at FPT University with hands-on experience in software testing and QA/QC. Through my internship and software projects, I've gained practical experience in understanding requirements, designing and executing test cases, identifying defects, and verifying whether a system behaves as expected. I enjoy looking beyond whether something simply works — I want to understand why it works, where it can fail, and how it can be improved.
              </p>

              <p>
My experience in software projects has also allowed me to explore different sides of the development process. Alongside testing, I've worked with requirements analysis, SRS verification, business analysis, and software development. Working across these areas has helped me understand the connection between business requirements, user expectations, and technical implementation. It also taught me that good software quality starts long before the testing phase.
              </p>
              <p>
I'm particularly interested in roles where I can combine testing, analytical thinking, and problem solving. I enjoy breaking down complex problems, asking the right questions, communicating findings clearly, and working with a team to turn requirements into reliable software. As I continue developing my career, I'm looking to strengthen both my technical skills and my understanding of how quality can be built into the entire software development process.
              </p>
              
            </div>

            <div className="about-visual">
  <div className="about-image-frame">
<img
  src={AboutMe}
  alt="Technology and problem solving"
/>
  </div>
</div>
          </div>
        </section>
<div className="tech-marquee">
  {[
    { text: "THINK CLEARLY", icon: "💡" },
    { text: "UNDERSTAND THE PROBLEM", icon: "⌕" },
    { text: "SOLVE PROBLEMS", icon: "◇" },
    { text: "BUILD WITH PURPOSE", icon: "ϟ" },
    { text: "CREATE BETTER EXPERIENCES", icon: "▥" },
  ].map((item, i) => (
    <React.Fragment key={i}>
      <div className="marquee-item">
        <span className="marquee-icon">{item.icon}</span>
        <span className="marquee-text">{item.text}</span>
      </div>

      {i < 4 && <span className="marquee-separator">✦</span>}
    </React.Fragment>
  ))}
</div>
        {/* =========================
    TECH STACK
========================== */}
<section id="stack" className="section section-pad">
  <SectionTitle
    number="02"
    kicker="TECHNOLOGIES I'VE USED"
    title="Tech Stack"
  />

  <p className="stack-intro">
    A set of technologies, frameworks and tools I use to build,
    test, and deliver real-world applications.
  </p>

  <div className="stack-grid">
    {/* 01 — Frontend */}
    <div className="stack-card">
      <div className="stack-card-top">
        <span className="stack-number">01</span>
        <span className="stack-arrow">↗</span>
      </div>

      <div className="stack-heading">
        <div className="stack-icon">⌘</div>
        <div>
          <h3>Frontend Development</h3>
          <p>Building modern and responsive user interfaces.</p>
        </div>
      </div>

      <div className="skill-list">
        <span>React</span>
        <span>JavaScript</span>
        <span>HTML5</span>
        <span>CSS3</span>
      </div>
    </div>

    {/* 02 — Backend */}
    <div className="stack-card">
      <div className="stack-card-top">
        <span className="stack-number">02</span>
        <span className="stack-arrow">↗</span>
      </div>

      <div className="stack-heading">
        <div className="stack-icon">{"</>"}</div>
        <div>
          <h3>Backend Development</h3>
          <p>Developing RESTful APIs and backend services.</p>
        </div>
      </div>

      <div className="skill-list">
        <span>ASP.NET Core</span>
        <span>.NET</span>
        <span>C#</span>
      </div>
    </div>

    {/* 03 — Database */}
    <div className="stack-card">
      <div className="stack-card-top">
        <span className="stack-number">03</span>
        <span className="stack-arrow">↗</span>
      </div>

      <div className="stack-heading">
        <div className="stack-icon">▤</div>
        <div>
          <h3>Database</h3>
          <p>Data storage and management systems.</p>
        </div>
      </div>

      <div className="skill-list">
        <span>PostgreSQL</span>
        <span>MySQL</span>
        <span>SQL Server</span>
      </div>
    </div>

    {/* 04 — Testing & API */}
    <div className="stack-card">
      <div className="stack-card-top">
        <span className="stack-number">04</span>
        <span className="stack-arrow">↗</span>
      </div>

      <div className="stack-heading">
        <div className="stack-icon">⚙</div>
        <div>
          <h3>Testing & API</h3>
          <p>Testing APIs and ensuring product quality.</p>
        </div>
      </div>

      <div className="skill-list">
        <span>Postman</span>
        <span>Swagger</span>
        <span>REST API</span>
      </div>
    </div>

    {/* 05 — Version Control */}
    <div className="stack-card">
      <div className="stack-card-top">
        <span className="stack-number">05</span>
        <span className="stack-arrow">↗</span>
      </div>

      <div className="stack-heading">
        <div className="stack-icon">⑂</div>
        <div>
          <h3>Version Control</h3>
          <p>Managing source code and collaboration.</p>
        </div>
      </div>

      <div className="skill-list">
        <span>Git</span>
        <span>GitHub</span>
      </div>
    </div>

    {/* 06 — Project Management */}
    <div className="stack-card">
      <div className="stack-card-top">
        <span className="stack-number">06</span>
        <span className="stack-arrow">↗</span>
      </div>

      <div className="stack-heading">
        <div className="stack-icon">▦</div>
        <div>
          <h3>Project Management & Others</h3>
          <p>Project management, integration and development tools.</p>
        </div>
      </div>

      <div className="skill-list">
        <span>Jira</span>
        <span>Gemini API</span>
        <span>Visual Studio</span>
      </div>
    </div>
  </div>
</section>
<div className="tech-marquee">
  {[
    { text: "THINK CLEARLY", icon: "💡" },
    { text: "UNDERSTAND THE PROBLEM", icon: "⌕" },
    { text: "SOLVE PROBLEMS", icon: "◇" },
    { text: "BUILD WITH PURPOSE", icon: "ϟ" },
    { text: "CREATE BETTER EXPERIENCES", icon: "▥" },
  ].map((item, i) => (
    <React.Fragment key={i}>
      <div className="marquee-item">
        <span className="marquee-icon">{item.icon}</span>
        <span className="marquee-text">{item.text}</span>
      </div>

      {i < 4 && <span className="marquee-separator">✦</span>}
    </React.Fragment>
  ))}
</div>
        {/* =========================
            FEATURED PROJECT
        ========================== */}
        <section
          id="projects"
          className="section project-section section-pad"
        >
          <div className="section-heading-row">
            <SectionTitle
              number="03"
              kicker="PROJECT HIGHLIGHT"
              title="Featured Project"
            />

          </div>

          <article className="featured-project">
  
{/* =========================
      LEFT — PROJECT INFO
  ========================== */}
<div className="featured-copy">

  {/* Featured Label */}
  <span className="featured-pill">
    ✦ Featured Project
  </span>

  {/* Project Title */}
  <h3>ProManage</h3>

  <p className="project-subtitle">
    AI-Powered Project Management Platform
  </p>

  {/* Project Overview */}
  <p className="project-overview">
    A project management platform designed to help teams
    organize tasks, track progress, analyze project health,
    and make better decisions with AI-powered features.
  </p>

  {/* Key Features */}
  <div className="project-highlights">

    <div className="highlight-item">
      <div className="highlight-icon">✓</div>

      <div>
        <strong>Organize & Track</strong>
        <span>
          Manage tasks, deadlines, and team collaboration
        </span>
      </div>
    </div>

    <div className="highlight-item">
      <div className="highlight-icon">▥</div>

      <div>
        <strong>Analyze Project Health</strong>
        <span>
          Real-time insights and meaningful analytics
        </span>
      </div>
    </div>

    <div className="highlight-item">
      <div className="highlight-icon">✦</div>

      <div>
        <strong>AI-Powered Features</strong>
        <span>
          Smarter planning, risk analysis, and suggestions
        </span>
      </div>
    </div>

    <div className="highlight-item">
      <div className="highlight-icon">♟</div>

      <div>
        <strong>Better Team Decisions</strong>
        <span>
          Data-driven decisions for successful projects
        </span>
      </div>
    </div>

  </div>

  {/* Actions */}
  <div className="hero-actions">


    <a
  href="https://promanage.website/"
  target="_blank"
  rel="noopener noreferrer"
  className="dark-outline-btn"
>
  ▶ &nbsp; Live Demo
</a>

  </div>

</div>




  <div className="featured-showcase">

  {/* =========================
      PROJECT IMAGE CAROUSEL
  ========================== */}
  <div className="project-showcase">

  {/* Previous */}
  <button
    className="project-slider-btn project-slider-prev"
    onClick={goToPreviousProjectImage}
    aria-label="Previous project image"
  >
    ←
  </button>

  <div className="project-image-track">

    {/* Previous Image */}
    <div
      className="project-image-side project-image-left"
      onClick={() => openProjectImage(previousProjectImage)}
    >
      <img
        src={projectImages[previousProjectImage].src}
        alt={projectImages[previousProjectImage].alt}
      />
    </div>

    {/* Main Image */}
    <div
      className="project-image-main"
      onClick={() => openProjectImage(currentProjectImage)}
    >
      <img
        src={projectImages[currentProjectImage].src}
        alt={projectImages[currentProjectImage].alt}
      />
    </div>

    {/* Next Image */}
    <div
      className="project-image-side project-image-right"
      onClick={() => openProjectImage(nextProjectImage)}
    >
      <img
        src={projectImages[nextProjectImage].src}
        alt={projectImages[nextProjectImage].alt}
      />
    </div>

  </div>

  {/* Next */}
  <button
    className="project-slider-btn project-slider-next"
    onClick={goToNextProjectImage}
    aria-label="Next project image"
  >
    →
  </button>
{/* DOTS — NẰM DƯỚI ẢNH */}
<div className="project-slider-dots">
  {projectImages.map((_, index) => (
    <button
      key={index}
      className={currentProjectImage === index ? "active" : ""}
      onClick={() => setCurrentProjectImage(index)}
      aria-label={`View project image ${index + 1}`}
    />
  ))}
</div>
</div>




  {/* =========================
      CONTRIBUTION + TECH STACK
  ========================== */}
  <div className="showcase-details">

    {/* My Contribution */}
    <div className="project-contribution">

      <div className="contribution-icon">
        ♟
      </div>

      <div className="contribution-content">

        <span className="contribution-label">
          MY CONTRIBUTION
        </span>

        <strong>
          Team Lead & Backend Developer
        </strong>

        <p>
          Led requirement analysis and SRS verification,
          developed backend services with .NET,
          contributed to AI-powered features,
          and reviewed test cases with the team.
        </p>

      </div>

    </div>


    {/* Tech Stack */}
    <div className="project-tech">

      <span className="tech-label">
        TECH STACK
      </span>

      <div className="tags">
        {[
          "React",
          ".NET",
          "PostgreSQL",
          "Gemini AI",
        ].map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

    </div>

  </div>

</div>
{/* =========================
    PROJECT IMAGE LIGHTBOX
========================== */}
{selectedProjectImage !== null && (
  <div
    className="project-lightbox"
    onClick={closeProjectImage}
  >
    <div
      className="project-lightbox-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="project-lightbox-close"
        onClick={closeProjectImage}
        aria-label="Close image preview"
      >
        ×
      </button>

      <img
        src={projectImages[selectedProjectImage].src}
        alt={projectImages[selectedProjectImage].alt}
      />
    </div>
  </div>
)}
  {/* =========================
      PROJECT METRICS
  ========================== */}
  
</article>
        </section>
<div className="tech-marquee">
  {[
    { text: "THINK CLEARLY", icon: "💡" },
    { text: "UNDERSTAND THE PROBLEM", icon: "⌕" },
    { text: "SOLVE PROBLEMS", icon: "◇" },
    { text: "BUILD WITH PURPOSE", icon: "ϟ" },
    { text: "CREATE BETTER EXPERIENCES", icon: "▥" },
  ].map((item, i) => (
    <React.Fragment key={i}>
      <div className="marquee-item">
        <span className="marquee-icon">{item.icon}</span>
        <span className="marquee-text">{item.text}</span>
      </div>

      {i < 4 && <span className="marquee-separator">✦</span>}
    </React.Fragment>
  ))}
</div>
        {/* =========================
            OTHER PROJECTS
        ========================== */}
        <section className="section section-pad">
          <div className="section-heading-row">
            <SectionTitle
              number="04"
              kicker="MORE THINGS I'VE BUILT"
              title="Other Projects"
            />

          </div>

          <div className="projects-grid">
            {projects.map((p) => (
              <article
                className={`project-card ${p.className}`}
                key={p.title}
              >
                <div className="project-thumb">
                  <span>
                    {p.title.split(" ")[0]}
                  </span>
                </div>

                <div className="project-body">
                  <h3>{p.title}</h3>

                  <p>
                    {p.text}
                  </p>

                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
<div className="tech-marquee">
  {[
    { text: "THINK CLEARLY", icon: "💡" },
    { text: "UNDERSTAND THE PROBLEM", icon: "⌕" },
    { text: "SOLVE PROBLEMS", icon: "◇" },
    { text: "BUILD WITH PURPOSE", icon: "ϟ" },
    { text: "CREATE BETTER EXPERIENCES", icon: "▥" },
  ].map((item, i) => (
    <React.Fragment key={i}>
      <div className="marquee-item">
        <span className="marquee-icon">{item.icon}</span>
        <span className="marquee-text">{item.text}</span>
      </div>

      {i < 4 && <span className="marquee-separator">✦</span>}
    </React.Fragment>
  ))}
</div>
{/* =========================
    05 — CERTIFICATIONS
========================= */}
<section
  id="certifications"
  className="section section-pad certifications-section"
>
  <SectionTitle
    number="05"
    kicker="CERTIFICATIONS"
    title="Certifications & Learning"
  />

  <div className="certifications-intro-row">
    <p className="certifications-intro">
      Professional certifications and learning achievements that reflect
      my continuous growth in software engineering, development, and
      problem-solving.
    </p>

    <div className="learning-highlight">
      <div className="learning-icon">
        ✦
      </div>

      <div>
        <span>CONTINUOUS LEARNING</span>
        <strong>
          Always learning, always building better solutions.
        </strong>
      </div>
    </div>
  </div>

  {/* CERTIFICATION CARDS */}
  <div className="certifications-grid">

    {/* CERTIFICATE 01 */}
    <article className="certification-card">

      <div className="cert-card-top">
        <div className="cert-card-icon">
          ✦
        </div>

        <span className="cert-number">
          01
        </span>
      </div>

      <span className="cert-category">
        COURSERA
      </span>

      <h3>
        Web Design for Everybody:
Basics of Web Development
& Coding
      </h3>

      <p className="cert-provider">
        Coursera
      </p>

      <a
        href="https://www.coursera.org/account/accomplishments/specialization/certificate/D3SY4NWDU7UV"
        target="_blank"
        rel="noopener noreferrer"
        className="cert-link"
      >
        View Credential
        <span>↗</span>
      </a>

    </article>


    {/* CERTIFICATE 02 */}
    <article className="certification-card">

      <div className="cert-card-top">
        <div className="cert-card-icon">
          ◈
        </div>

        <span className="cert-number">
          02
        </span>
      </div>

      <span className="cert-category">
        COURSERA
      </span>

      <h3>
        Ethical
Emerging Technologist
      </h3>

      <p className="cert-provider">
        Coursera
      </p>

      <a
        href="https://www.coursera.org/account/accomplishments/specialization/certificate/PIX5DNLVJ9UL"
        target="_blank"
        rel="noopener noreferrer"
        className="cert-link"
      >
        View Credential
        <span>↗</span>
      </a>

    </article>


    {/* CERTIFICATE 03 */}
    <article className="certification-card">

      <div className="cert-card-top">
        <div className="cert-card-icon">
          ◇
        </div>

        <span className="cert-number">
          03
        </span>
      </div>

      <span className="cert-category">
        COURSERA
      </span>

      <h3>
        Project Management
      </h3>

      <p className="cert-provider">
        Coursera
      </p>

      <a
        href="https://www.coursera.org/account/accomplishments/specialization/certificate/C8JV0G9IW0HK"
        target="_blank"
        rel="noopener noreferrer"
        className="cert-link"
      >
        View Credential
        <span>↗</span>
      </a>

    </article>

  </div>

</section>
<div className="tech-marquee">
  {[
    { text: "THINK CLEARLY", icon: "💡" },
    { text: "UNDERSTAND THE PROBLEM", icon: "⌕" },
    { text: "SOLVE PROBLEMS", icon: "◇" },
    { text: "BUILD WITH PURPOSE", icon: "ϟ" },
    { text: "CREATE BETTER EXPERIENCES", icon: "▥" },
  ].map((item, i) => (
    <React.Fragment key={i}>
      <div className="marquee-item">
        <span className="marquee-icon">{item.icon}</span>
        <span className="marquee-text">{item.text}</span>
      </div>

      {i < 4 && <span className="marquee-separator">✦</span>}
    </React.Fragment>
  ))}
</div>
        {/* =========================
            EXPERIENCE & EDUCATION
        ========================== */}
        <section
          id="experience"
          className="section section-pad"
        >
          <SectionTitle
            number="06"
            kicker="MY JOURNEY"
            title="Experience & Education"
          />

          <div className="timeline">
            <TimelineItem
              year="03/2026 — 06/2026"
              title="QlayAI"
              role="QA/QC Intern"
              points={[
                "Wrote and executed test cases",
                "Performed software testing",
                "Identified and reported software defects",
                "Worked on an AI-powered interview fraud detection system and market research with AI"
              ]}
            />

            <TimelineItem
              year="05/2025 — 08/2025"
              title="FPT Software"
              role="Tester Intern"
              points={[
                "Wrote and executed test cases",
                "Performed software testing for the Higo Bank system",
                "Reported and tracked bugs using Jira",
              ]}
            />

            <TimelineItem
              year="Present"
              title="FPT University"
              role="Software Engineering Student"
              points={[
                "Fourth-year student majoring in Software Engineering"
              ]}
            />
          </div>
        </section>
<div className="tech-marquee">
  {[
    { text: "THINK CLEARLY", icon: "💡" },
    { text: "UNDERSTAND THE PROBLEM", icon: "⌕" },
    { text: "SOLVE PROBLEMS", icon: "◇" },
    { text: "BUILD WITH PURPOSE", icon: "ϟ" },
    { text: "CREATE BETTER EXPERIENCES", icon: "▥" },
  ].map((item, i) => (
    <React.Fragment key={i}>
      <div className="marquee-item">
        <span className="marquee-icon">{item.icon}</span>
        <span className="marquee-text">{item.text}</span>
      </div>

      {i < 4 && <span className="marquee-separator">✦</span>}
    </React.Fragment>
  ))}
</div>
        {/* =========================
            PROCESS
        ========================== */}
        <section className="section process-section section-pad">
          <SectionTitle
            number="07"
            kicker="HOW I APPROACH SOFTWARE"
            title="How I Work"
          />

          <div className="process">
            {[
              [
                "01",
                "Understand",
                "Understand the problem and requirements"
              ],
              [
                "02",
                "Analyze",
                "Analyze requirements and identify what needs to be solved"
              ],
              [
                "03",
                "Verify",
                "Review requirements and prepare test cases"
              ],
              [
                "04",
                "Test",
                "Execute tests and identify defects"
              ],
              [
                "05",
                "Improve",
                "Report issues and help improve the solution"
              ]
            ].map(([n, title, text]) => (
              <div
                className="process-item"
                key={n}
              >
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <blockquote>
            "Good software starts with understanding the problem
            and continues with making sure the solution works."
          </blockquote>
        </section>
<div className="tech-marquee">
  {[
    { text: "THINK CLEARLY", icon: "💡" },
    { text: "UNDERSTAND THE PROBLEM", icon: "⌕" },
    { text: "SOLVE PROBLEMS", icon: "◇" },
    { text: "BUILD WITH PURPOSE", icon: "ϟ" },
    { text: "CREATE BETTER EXPERIENCES", icon: "▥" },
  ].map((item, i) => (
    <React.Fragment key={i}>
      <div className="marquee-item">
        <span className="marquee-icon">{item.icon}</span>
        <span className="marquee-text">{item.text}</span>
      </div>

      {i < 4 && <span className="marquee-separator">✦</span>}
    </React.Fragment>
  ))}
</div>
        {/* =========================
            CONTACT
        ========================== */}
        <section
          id="contact"
          className="contact section-pad"
        >
          <div className="contact-orb" />

          <div className="contact-content">
            <p className="eyebrow">
              GET IN TOUCH
            </p>

            <h2>
              Let's Work
              <br />
              <span>On Something Meaningful.</span>
            </h2>

            <p>
              I'm open to opportunities in software testing,
              QA/QC, business analysis, and software-related roles.
            </p>

            <div className="hero-actions">

              <a
                className="dark-outline-btn"
                href="https://www.linkedin.com/in/nguyen-sagus-248509440/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          P<span>.</span>
          <small>
            Phúc Nguyễn
            <br />
            Software Engineering Student
          </small>
        </div>

        <div className="footer-links">
          {[
            "Home",
            "About",
            "Projects",
            "Experience",
            "Contact"
          ].map((x) => (
            <button
              key={x}
              onClick={() =>
                scrollTo(x.toLowerCase())
              }
            >
              {x}
            </button>
          ))}
        </div>

        <small>
          sagusnguyen@gmail.com
          
        </small>
                <small>
          0337 812 050
          
        </small>
      </footer>
    </div>
  );
}

function SectionTitle({
  number,
  kicker,
  title
}) {
  return (
    <div className="section-title">
      <span className="section-number">
        {number}
      </span>

      <div>
        <p>{kicker}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  role,
  points
}) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />

      <div className="timeline-year">
        {year}
      </div>

      <div>
        <h3>{title}</h3>

        <strong>{role}</strong>

        <ul>
          {points.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(<App />);