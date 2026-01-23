// import React from 'react';

// const JavaScriptCertificatePage = () => {
//   // ✅ USE EXACT PATH FROM CONSOLE
//   const certificates = [
//     "/images/resume/javaScript.jpg",
//   ];

//   console.log('Certificate path:', certificates[0]);

//   return (
//     <section className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-indigo-500 to-purple-700">
//   <div className="max-w-4xl mx-auto px-4">
//     <h1 className="text-3xl font-bold text-white mb-8 text-center">
//       My JavaScript Essentials Certificate from Cisco Networking Academy
//     </h1>

//         {/* Debug info */}
        

//         <div className="space-y-6">
//           {certificates.map((certificate, index) => (
//             <div key={index} className="shadow-2xl rounded-lg overflow-hidden bg-white p-4">
//               <img
//                 src={certificate}
//                 alt="JavaScript Certificate"
//                 // className="w-full h-auto border-4 border-red-500 rounded-lg"
//                 onError={(e) => {
//                   console.error('❌ IMAGE FAILED - PATH WRONG');
//                 }}
//                 onLoad={() => console.log('✅ FINALLY LOADED!')}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JavaScriptCertificatePage;



import React from 'react';
import { useNavigate } from 'react-router-dom';

const JavaScriptCertificatePage = () => {
  const navigate = useNavigate();
  
  const certificates = [
    "/images/resume/javaScript.jpg",
  ];

  // Next page ka path - Apna actual path dalna
  const nextPagePath = "/certificates/react-certificate";

  console.log('Certificate path:', certificates[0]);

  const handleNextClick = () => {
    navigate(nextPagePath);
  };

  return (
    <section className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-indigo-500 to-purple-700 relative overflow-hidden">
      {/* Fixed Right Side Scrollbar Button */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="relative group">
          {/* Main Scrollbar Button Container */}
          <button
            onClick={handleNextClick}
            className="relative flex flex-col items-center w-16 h-72 bg-gradient-to-b from-purple-700/90 via-purple-600/90 to-purple-800/90 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-white/20 overflow-hidden cursor-pointer"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Scrollbar Track */}
            <div className="relative w-8 h-52 mt-4 bg-gradient-to-b from-white/10 via-white/5 to-white/10 rounded-full overflow-hidden">
              {/* Scrollbar Thumb */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-32 bg-gradient-to-b from-white/80 via-white to-white/80 rounded-full shadow-lg animate-bounce-slow"></div>
              
              {/* Scrollbar Lines */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-40 bg-white/20"></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-36 bg-white/10 rounded-full"></div>
            </div>
            
            {/* Next Text */}
            <div className="mt-6 flex flex-col items-center">
              <span className="text-white text-xs font-bold tracking-widest rotate-90 whitespace-nowrap mb-2">
                NEXT
              </span>
              
              {/* Arrow Icon */}
              <div className="text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </div>
              
              {/* Page Indicator */}
              <div className="mt-2 flex items-center space-x-1">
                {[1, 2, 3].map((dot) => (
                  <div 
                    key={dot}
                    className={`w-1.5 h-1.5 rounded-full ${dot === 1 ? 'bg-white' : 'bg-white/40'}`}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
          
          {/* Tooltip */}
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-black/80 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Click to view next certificate
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-black/80"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          My JavaScript Essentials Certificate from Cisco Networking Academy
        </h1>

        <div className="space-y-6">
          {certificates.map((certificate, index) => (
            <div key={index} className="shadow-2xl rounded-lg overflow-hidden bg-white p-4">
              <img
                src={certificate}
                alt="JavaScript Certificate"
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  console.error('❌ IMAGE FAILED - PATH WRONG');
                }}
                onLoad={() => console.log('✅ FINALLY LOADED!')}
              />
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleNextClick}
            className="flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl"
          >
            <span className="font-semibold text-lg">View Next Certificate</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom CSS for Animation */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s ease-in-out infinite;
        }
        
        /* Smooth hover effects */
        .group:hover .scroll-thumb {
          animation-play-state: paused;
        }
        
        /* Custom scrollbar for the entire page */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #db2777);
        }
      `}</style>
    </section>
  );
};

export default JavaScriptCertificatePage;