import { useState } from "react";
import { Link } from "react-router-dom";
import Projects from "../pages/Projects";
import Certificates from "../pages/Certificates";

const Navbar = ({ isProjectsPage = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 ${isProjectsPage ? 'bg-indigo-600/90' : 'bg-white/10'} backdrop-blur-md shadow-lg`}>
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold">
            Portfolio
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.isPdf ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      `${link.path}#toolbar=0&navpanes=0`, 
                      '_blank', 
                      'noopener,noreferrer'
                    );
                  }}
                  className={`${isProjectsPage ? 'hover:text-pink-200' : 'hover:text-pink-300'} text-white font-medium transition-colors duration-300`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${isProjectsPage ? 'hover:text-pink-200' : 'hover:text-pink-300'} text-white font-medium transition-colors duration-300`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Projects />
            <Certificates />
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {navLinks.map((link) => (
              link.isPdf ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      `${link.path}#toolbar=0&navpanes=0`, 
                      '_blank', 
                      'noopener,noreferrer'
                    );
                    setMobileMenuOpen(false);
                  }}
                  className={`block ${isProjectsPage ? 'hover:text-pink-200' : 'hover:text-pink-300'} text-white font-medium transition-colors duration-300`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block ${isProjectsPage ? 'hover:text-pink-200' : 'hover:text-pink-300'} text-white font-medium transition-colors duration-300`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="block">
              <Projects />
            </div>
            <div className="block">
              <Certificates />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;