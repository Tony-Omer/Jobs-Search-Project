import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header">
        <h1>About Job Finder</h1>
        <p className="subtitle">Empowering the next generation of the workforce.</p>
      </header>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="content-box">
          <h2>Our Mission</h2>
          <p>
            We started Job Finder with a single goal: to simplify the hunt. 
            In a world of endless listings and complex applications, we provide 
            a streamlined platform where your next career move is just a click away.
          </p>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="features-grid">
        <div className="feature-card">
          <i className="fa-solid fa-magnifying-glass"></i>
          <h3>Smart Search</h3>
          <p>Find roles by title, keyword, or company instantly.</p>
        </div>
        <div className="feature-card">
          <i className="fa-solid fa-building-user"></i>
          <h3>Verified Employers</h3>
          <p>We work with trusted companies to ensure quality listings.</p>
        </div>
        <div className="feature-card">
          <i className="fa-solid fa-bolt"></i>
          <h3>Fast Application</h3>
          <p>Apply to your dream job in seconds, not hours.</p>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="about-footer">
        <h2>Ready to start your journey?</h2>
        <button className="cta-button" onClick={() => window.location.href = '/'}>
          Browse Jobs Now
        </button>
      </section>
    </div>
  );
};

export default AboutPage;