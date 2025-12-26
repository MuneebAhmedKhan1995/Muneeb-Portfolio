import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Certificates = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [internshipOpen, setInternshipOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const internshipRef = useRef(null);

  const certificateItems = [
    { name: "Course Certificate", path: "/certificates/smit" },
    {
      name: "Internship Certificate",
      subItems: [
        { name: "Frontend Development Internship ", path: "/certificates/frontendInternship" },
        { name: "Backend Development Internship", path: "/certificates/backendInternship" },
        { name: "Full Stack Developer Internship", path: "/certificates/FullStackInternship" },
      ]
    },
    { name: "Hackathon Certificate", path: "/certificates/hackathon" },
    { name: "JavaScript Certificate", path: "/certificates/Cisco" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
          setIsOpen(false);
          setInternshipOpen(false);
        }
      }
      if (internshipRef.current && !internshipRef.current.contains(event.target)) {
        setInternshipOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ✅ Auto close dropdown when any link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
    setInternshipOpen(false);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="flex items-center space-x-1 text-white hover:text-pink-300 font-medium transition-all duration-300 hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>Certificates</span>
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
          className="absolute left-0 mt-3 w-72 origin-top transform transition-all duration-200 ease-out"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden">
            <div className="p-2 border-b border-gray-700/30">
              <h4 className="text-pink-300/90 font-semibold text-sm tracking-wider">MY CERTIFICATES</h4>
            </div>
            <div className="p-2 space-y-1">
              {/* Course Certificate */}
              <Link
                to="/certificates/smit"
                className="block px-3 py-2 text-sm text-white/90 hover:text-pink-200 font-medium hover:bg-gray-700/40 rounded-md transition-all duration-200"
                onClick={handleLinkClick}
              >
                Course Certificate
              </Link>




              <Link
                to="/certificates/hackathon"
                className="block px-3 py-2 text-sm text-white/90 hover:text-pink-200 font-medium hover:bg-gray-700/40 rounded-md transition-all duration-200"
                onClick={handleLinkClick}
              >
                Hackathon Certificate
              </Link>
              <Link
                to="/certificates/Cisco"
                className="block px-3 py-2 text-sm text-white/90 hover:text-pink-200 font-medium hover:bg-gray-700/40 rounded-md transition-all duration-200"
                onClick={handleLinkClick}
              >
                CISCO Certificate
              </Link>

              {/* Internship Certificate dropdown */}
              <div className="relative">
                <div
                  className="flex items-center justify-between px-3 py-2 text-sm text-white/90 hover:text-pink-200 font-medium hover:bg-gray-700/40 rounded-md transition-all duration-200 cursor-pointer"
                  onClick={() => setInternshipOpen(!internshipOpen)}
                  onMouseEnter={() => setInternshipOpen(true)}
                >
                  <span>Internship Certificates</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${internshipOpen ? 'rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
                  </svg>
                </div>

                {internshipOpen && (
                  <div
                    ref={internshipRef}
                    className="ml-0 mt-1 bg-gray-900/80 rounded-lg p-1 border border-gray-700/50 min-w-[320px]"
                  >
                    {certificateItems[1].subItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-white/90 hover:text-pink-200 font-medium hover:bg-gray-700/40 rounded transition-all duration-200 whitespace-nowrap"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;