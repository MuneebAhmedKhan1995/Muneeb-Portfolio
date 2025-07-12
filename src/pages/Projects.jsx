import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const projectItems = [
    { name: "HTML CSS", path: "/projects/html-css"},
    { name: "JavaScript", path: "/projects/javascript" },
    { name: "TypeScript", path: "/projects/typescript" },
    { name: "React", path: "/projects/react"},
    { name: "Website", path: "/projects/website"},
  ];


  useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <div className="relative">
      <button 
        ref={buttonRef}
        className="flex items-center space-x-1 text-white hover:text-pink-300 font-medium transition-all duration-300 hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>Projects</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div 
          ref={dropdownRef}
          className="absolute left-0 mt-3 w-56 origin-top transform transition-all duration-200 ease-out"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden">
            <div className="p-2 border-b border-gray-700/30">
              <h4 className="text-pink-300/90 font-semibold text-sm tracking-wider">MY PROJECTS</h4>
            </div>
            <div className="divide-y divide-gray-700/30">
              {projectItems.map((project) => (
                <Link
                  key={project.name}
                  to={project.path}
                  className="flex items-center px-4 py-3 hover:bg-gray-700/40 transition-all duration-200 group/item"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg mr-3 opacity-80 group-hover/item:opacity-100">
                    {project.icon}
                  </span>
                  <span className="text-white/90 group-hover/item:text-pink-200 font-medium">
                    {project.name}
                  </span>
                  <span className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                    <svg
                      className="w-4 h-4 text-pink-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;