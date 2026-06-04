import React, { useState } from 'react';

const JobFind = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // 1. Create a state to hold the list of jobs
  const [jobs, setJobs] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/jobs?search=${searchTerm}`);
      const data = await response.json();
      
      // 2. Save the array of data to the jobs state
      setJobs(data); 
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div>
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
          <button type="button" onClick={() => setSearchTerm('React Developer')}>React Developer</button>
          <button type="button" onClick={() => setSearchTerm('UI Designer')}>UI Designer</button>
        </section>
      </div>











      {/* 3. Map through the jobs state here in the JSX */}
      <div className="jobs-list">
        {jobs.map((job) => (
          
          <div className="job-post" key={job.id}>

            <div className="firstBox box">
              <div className="image">
                <i className="fa-solid fa-building building"></i>
              </div>
              <div className="title">
                {/* Use the exact column names from your Postgres database */}
                <h1>{job.job_title}</h1>
                <p className="company">Latest job posting available.</p>
              </div>
            </div>

            <div className="secondBox box">
              <div className="jobDescription">
                <i className="fa-regular fa-file-lines file"></i>
                <h2>Job Description</h2>
              </div>
              <p>{job.job_description}</p>
            </div>

            <div className="thirdBox box">
              <h2>Key Responsibilities</h2>
              <p>{job.key_responsibilities}</p>
            </div>

            <div className="fourthBox box">
              <h2>Requirements</h2>
              <p>{job.requirements}</p>
            </div>

            <div className="fifthBox">
              <div className="salary">
                <span>
                  <i className="fa-solid fa-sack-dollar salary-icon"></i>
                  <p>Salary</p>
                </span>
                <h3>{job.salary}</h3>
              </div>

              <div className="location">
                <span>
                  <i className="fa-solid fa-location-dot location-icon"></i>
                  <p>Location</p>
                </span>
                <p>{job.location_name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobFind;