import Navbar from "../components/Navbar";

const MERNStackProjectsPage = () => {
  const reactProjects = [
    {
      title: "Counter App Project",
      description: "A simple counter application with increment and decrement functionality.",
      price: "Live on Vercel",
      link: "https://1st-counter-app.vercel.app/",
      image: "https://www.ifixproblem.com/wp-content/uploads/2023/02/Counter-app.png"
    },
    
  ];

return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 animate-gradient">
      <Navbar isProjectsPage={true} />
      
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-12 animate-text">
          My MERN Stack Projects
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reactProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800/80 rounded-xl shadow-lg overflow-hidden hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-gray-700 hover:border-purple-500/50"
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-medium bg-black/40 px-2 py-1 rounded">
                    {project.technologies}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex-grow space-y-3">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">{project.title}</h2>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg text-center text-sm font-medium hover:from-purple-700 hover:to-blue-600 transition-all shadow hover:shadow-purple-500/30 flex items-center justify-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View
                  </a>
                  
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gray-700/40 text-white rounded-lg text-center text-sm font-medium hover:bg-gray-700/60 transition-all flex items-center justify-center gap-1 border border-gray-600/50"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default MERNStackProjectsPage;
