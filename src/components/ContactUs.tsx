import React, { useState } from 'react';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Seeker',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your message has been sent.');
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions? We're here to help you navigate your career journey.</p>
          
          <div className="info-item">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h3>Our Office</h3>
              <p>Dubai Design District, Building 4<br />Dubai, UAE</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <h3>Email Us</h3>
              <p>support@jobfinder.com</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fa-solid fa-phone"></i>
            <div>
              <h3>Call Us</h3>
              <p>+971 4 123 4567</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                required 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                required 
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>I am a...</label>
              <select onChange={(e) => setFormData({...formData, subject: e.target.value})}>
                <option value="Job Seeker">Job Seeker</option>
                <option value="Employer">Employer</option>
                <option value="Partnership">Partnership Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea 
                rows={5} 
                placeholder="How can we help you?" 
                required
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;