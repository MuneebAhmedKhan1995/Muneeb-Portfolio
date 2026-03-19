import React from 'react';

const CourseCertificatePage = () => {
  // ✅ USE EXACT PATH FROM CONSOLE
  const certificates = [
    "/images/resume/course-certificate.jpg",
  ];


  return (
    <section className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-indigo-500 to-purple-700">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          My Courses Certificate
          
        </h1>

        {/* Debug info */}
        

        <div className="space-y-6">
          {certificates.map((certificate, index) => (
            <div key={index} className="shadow-2xl rounded-lg overflow-hidden bg-white p-4">
              <img
                src={certificate}
                alt="Courses Certificate"
                // className="w-full h-auto border-4 border-red-500 rounded-lg"
                onError={(e) => {
                  console.error('❌ IMAGE FAILED - PATH WRONG');
                }}
                onLoad={() => console.log('✅ FINALLY LOADED!')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCertificatePage;


