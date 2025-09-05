const CourseCertificatePage = () => {
  const certificates = [
    "/images/CourseCertificate/SMIT.png",
  ];

  return (
    <section className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-indigo-500 to-purple-700">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          My Courses Certificate
        </h1>
        <div className="space-y-6">
          {certificates.map((certificate, index) => (
            <div key={index} className="shadow-2xl rounded-lg overflow-hidden">
              <img
                src={certificate}
                alt={`certificate ${index + 1}`} // Fixed template literal
                className="w-full h-auto border border-white/20"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/placeholder-certificate.png";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCertificatePage;


