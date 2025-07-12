// import { Link } from "react-router-dom";
// import Projects from "../pages/Projects";

// const Navbar = ({ isProjectsPage = false }) => {
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Resume", path: "/resume" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className={`fixed w-full z-50 ${isProjectsPage ? 'bg-indigo-600/90' : 'bg-white/10'} backdrop-blur-md shadow-lg`}>
//       <div className="max-w-7xl mx-auto px-6 py-3">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="text-white text-2xl font-bold">
//             Portfolio
//           </Link>

//           {/* Navigation Links */}
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               link.isPdf ? (
//                 <a
//                   key={link.name}
//                   href={link.path}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     window.open(
//                       `${link.path}#toolbar=0&navpanes=0`, 
//                       '_blank', 
//                       'noopener,noreferrer'
//                     );
//                   }}
//                   className={`${isProjectsPage ? 'hover:text-pink-200' : 'hover:text-pink-300'} text-white font-medium transition-colors duration-300`}
//                 >
//                   {link.name}
//                 </a>
//               ) : (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className={`${isProjectsPage ? 'hover:text-pink-200' : 'hover:text-pink-300'} text-white font-medium transition-colors duration-300`}
//                 >
//                   {link.name}
//                 </Link>
//               )
//             ))}
//             <Projects />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import Projects from "../pages/Projects";

const Navbar = ({ isProjectsPage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 ${isProjectsPage ? 'bg-indigo-600/90' : 'bg-white/10'} backdrop-blur-md shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold">
            Portfolio
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-pink-300 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-700/90 backdrop-blur-md">
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
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:text-white"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:text-white"
              >
                {link.name}
              </Link>
            )
          ))}
          <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:text-white">
            <Projects mobileView={true} onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;