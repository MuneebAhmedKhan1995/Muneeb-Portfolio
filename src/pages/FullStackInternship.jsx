import React from 'react';

const FullStackInternshipCertificatePage = () => {
  const certificates = [
    "/images/resume/fullstack.png",
  ];

  return (
    <section className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-indigo-500 to-purple-700">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          My Full Stack Development Internship Certificate
        </h1>
        <div className="space-y-6 flex justify-center">
          {certificates.map((certificate, index) => (
            <div key={index} className="w-full flex justify-center">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-1 rounded-xl shadow-2xl">
                <div className="max-w-[800px] w-full overflow-hidden rounded-lg bg-white">
                  <img
                    src={certificate}
                    alt="Muneeb Ahmed Khan Full Stack Internship Certificate"
                    className="w-full h-auto mx-auto block"
                    onError={(e) => {
                      console.error('❌ IMAGE FAILED - PATH WRONG');
                      e.target.style.display = 'none';
                    }}
                    onLoad={() => console.log('✅ FINALLY LOADED!')}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullStackInternshipCertificatePage;
