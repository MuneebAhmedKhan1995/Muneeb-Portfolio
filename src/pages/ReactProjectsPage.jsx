import Navbar from "../components/Navbar";

const ReactProjectsPage = () => {
  const reactProjects = [
    {
      title: "Counter App Project",
      description: "A simple counter application with increment and decrement functionality.",
      price: "Live on Vercel",
      link: "https://1st-counter-app.vercel.app/",
      image: "https://www.ifixproblem.com/wp-content/uploads/2023/02/Counter-app.png"
    },
    {
      title: "To-Do-List Project",
      description: "An interactive to-do list for task management and organization.",
      price: "Live on Vercel",
      link: "https://2nd-to-do-list-pink.vercel.app/",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*PJexN4mSU4tx_dmI.jpg"
    },
    {
      title: "Digital Clock Project",
      description: "A real-time digital clock displaying current time and date.",
      price: "Live on Vercel",
      link: "https://3rd-digital-clock.vercel.app/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQTRmUk03KXupai0-Dwu67h2qYZi0zUSQ-g1hhh0N7duMAvgrcj843W_TIHOYtfPQ3uo&usqp=CAU"
    },
    {
      title: "Weather App Project",
      description: "A weather application providing real-time forecasts based on location.",
      price: "Live on Vercel",
      link: "https://4th-weather-app.vercel.app/",
      image: "https://codingartistweb.com/wp-content/uploads/2022/07/weather-app-01.png"
    },
    {
      title: "Colour Picker Project",
      description: "A tool for selecting and copying color codes effortlessly.",
      price: "Live on Vercel",
      link: "https://5th-colour-picker.vercel.app/",
      image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/11/ColorSlurp-Website-Screenshot.png"
    },
    {
      title: "Calculator App Prject",
      description: "A functional calculator for basic arithmetic operations.",
      price: "Live on Vercel",
      link: "https://6th-calculator.vercel.app/",
      image: "https://www.iphonelife.com/sites/iphonelife.com/files/styles/3_2_704px/public/calculator2.jpg"
    },
    {
      title: "Form Validation Project",
      description: "A form with validation to ensure correct user input.",
      price: "Live on Vercel",
      link: "https://7th-form-validation.vercel.app/",
      image: "https://api.reliasoftware.com/uploads/react_form_validation_6683903815.webp"
    },
    {
      title: "Quoate Genetrator Project",
      description: "An app that generates random inspirational quotes.",
      price: "Live on Vercel",
      link: "https://8th-quote-generator.vercel.app/",
      image: "https://i.ytimg.com/vi/FiUVwPYYT5A/maxresdefault.jpg"
    },
    {
      title: "Image Gallery Project",
      description: "A gallery app to display and organize images in an interactive layout.",
      price: "Live on Vercel",
      link: "https://9th-image-gellery-viewer.vercel.app/",
      image: "https://www.softlay.com/downloads/wp-content/uploads/Apowersoft-Photo-Viewer-Screenshot-2.webp"
    },
    {
      title: "Weather App Project With (Live API)",
      description: "Real-time weather application with location detection",
      price: "Live on Vercel",
      link: "https://10th-weather-app-with-live-api.vercel.app/",
      image: "https://blog.weatherstack.com/wp-content/uploads/2023/06/Weatherstack-for-current-weather-data-1024x469.webp"
    },
    {
      title: "Movie Search Project",
      description: "A dynamic search tool with real-time filtering and results.",
      price: "Live on Vercel",
      link: "https://movie-coral-theta.vercel.app/",
      image: "https://user-images.githubusercontent.com/61752151/177327191-973f5b71-4f51-4494-bf45-b9602d73f3de.png"
    },
    {
      title: "Crud App Project With (Local Storage)",
      description: "A CRUD (Create, Read, Update, Delete) app with data stored in local storage.",
      price: "Live on Vercel",
      link: "https://12th-crud-app-with-local-storage.vercel.app/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgZ-q1RoB3vFJF6QXLvTfU8-n78Ku1jp2Pg&s"
    },
    {
      title: "Blog App Project",
      description: "A platform for creating, editing, and publishing blog posts.",
      price: "Live on Vercel",
      link: "https://13th-blog-app.vercel.app/",
      image: "https://market-resized.envatousercontent.com/previews/files/439591455/Boomer+full+ionic+inline+preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=8dbe439a2ccfc373cfad6277d006b0c4c11fea734789cf63ec73e5da0ef30633"
    },
    {
      title: "Expense Tracker App",
      description: "An app to monitor and manage personal or business expenses.",
      price: "Live on Vercel",
      link: "https://14th-expense-tracker.vercel.app/",
      image: "https://www.sellmyapp.com/wp-content/uploads/featured_image63a17ead9bde2.jpg"
    },
    {
      title: "Authentication Project With (Firebase)",
      description: "A secure login system using Firebase for user authentication.",
      price: "Live on Vercel",
      link: "https://15th-authetication-app-with-fire-ba.vercel.app/",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8ivmp870q8sdqvlyrxo0.png"
    },
    {
      title: "Shopping Card Project",
      description: "An e-commerce cart with product management and checkout features.",
      price: "Live on Vercel",
      link: "https://16th-shopping-cart.vercel.app/",
      image: "https://www.shutterstock.com/image-vector/parcel-boxes-shopping-carts-smartphones-260nw-2499205011.jpg"
    },
    {
      title: "Theme Switcher Project",
      description: "A React app that allows users to toggle between dark, light, and system theme modes for a customizable UI experience.",
      price: "Live on Vercel",
      link: "https://17th-theme-switcher-app.vercel.app/",
      image: "https://i.ytimg.com/vi/WOAk6fhJETs/maxresdefault.jpg"
    },
    {
      title: "RealTime Chat Project",
      description: "A real-time chat app that enables instant messaging between users using WebSockets or Firebase.",
      price: "Live on Vercel",
      link: "https://chat-app-m33n.vercel.app/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkl67hFbiaSx_-sSVnHN5K4AA5MzQNc0ztw&s"
    },
    {
      title: "Recipe Search Project ",
      description: "A Recipe Finder app that lets users search and discover recipes based on ingredients or meal types using a dynamic API.",
      price: "Live on Vercel",
      link: "https://recipe-finder-tawny-pi.vercel.app/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNLr0UkwIUroSto0L2U0NCxkH3sqdmnWu0mQ0Z-JQkzbvuEcqkflLFKLt4ul-fHYHO8w&usqp=CAU"
    },
  ];

return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 animate-gradient">
      <Navbar isProjectsPage={true} />
      
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-12 animate-text">
          My React Projects
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
export default ReactProjectsPage;