import React, { useState } from 'react';
import './JobFind.css'; // Make sure to create this file!

const JobFind = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    // You'll eventually trigger an API call here
  };

  return (
    <div className="job-page-container">
      <header className="job-header">
        <h1>Find Your Dream Job</h1>
        <p>Browse thousands of opportunities in tech, design, and marketing.</p>
      </header>

      <form className="search-container" onSubmit={handleSearch}>
        <div className="input-group">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Job title, keywords, or company..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button type="submit" className="search-button">Search Jobs</button>
      </form>

      <section className="recent-searches">
        <span>Trending:</span>
        <button onClick={() => setSearchTerm('React Developer')}>React Developer</button>
        <button onClick={() => setSearchTerm('UI Designer')}>UI Designer</button>
      </section>
    </div>
  );
};

export default JobFind;