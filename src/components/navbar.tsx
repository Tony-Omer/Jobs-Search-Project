import  { useState } from 'react';


function NAVBAR() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/jobs">
        <h1>Job Finder</h1>
      </a>


     



      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Nav Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default NAVBAR;