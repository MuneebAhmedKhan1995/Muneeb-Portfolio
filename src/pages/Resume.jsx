// src/pages/Resume.jsx
const Resume = () => {
  const resumePages = [
    "/images/resume/resume-page1.jpg",
    "/images/resume/resume-page2.jpg"
  ];

  return (
    <section className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-indigo-500 to-purple-700">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">My Resume</h1>
        
        <div className="space-y-6">
          {resumePages.map((page, index) => (
            <div key={index} className="shadow-2xl rounded-lg overflow-hidden">
              <img
                src={page}
                alt={`Resume Page ${index + 1}`}
                className="w-full h-auto border border-white/20"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Resume;