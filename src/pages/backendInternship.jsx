import React from 'react';

const BackendInternshipCertificatePage = () => {
  // ✅ USE EXACT PATH FROM CONSOLE
  const certificates = [
    "/images/resume/backend.png",
  ];

  console.log('Certificate path:', certificates[0]);
 
  return (
    <section className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-indigo-500 to-purple-700">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          My Backend Development Internship Certificate
        </h1>

        {/* Debug info */}
        

        <div className="space-y-6">
          {certificates.map((certificate, index) => (
            <div key={index} className="shadow-2xl rounded-lg overflow-hidden bg-white p-4">
              {/* <img
                src={certificate}
                alt="Muneeb Ahmed Khan Frontend Internship Certificate"
                // className="w-full h-auto border-4 border-red-500 rounded-lg"
                onError={(e) => {
                  console.error('❌ IMAGE FAILED - PATH WRONG');
                }}
                onLoad={() => console.log('✅ FINALLY LOADED!')}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackendInternshipCertificatePage;