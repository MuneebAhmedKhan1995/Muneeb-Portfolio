import { Link } from "react-router-dom";
import Projects from "../pages/Projects";

const Navbar = ({ isProjectsPage = false }) => {
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

          {/* Navigation Links */}
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;