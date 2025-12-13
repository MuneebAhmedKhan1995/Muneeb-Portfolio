import Navbar from "../components/Navbar";

const FinalProjectPage = () => {
  const reactProjects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and user authentication built with MERN stack.",
      technologies: "React • Node.js • MongoDB • Express",
      price: "Live on Vercel",
      link: "https://mern-project-e-commerce-website-frontend.vercel.app/",
      github: "https://github.com/MuneebAhmedKhan1995/MERN-Project-E-Commerce-Website-Backend",
      image: "https://briansolis.com/wp-content/uploads/2022/01/eCommerce-Website-Components-photo.jpg"
    },
    {
      title: "Medical Health Website",
      description: "A comprehensive healthcare platform for patient management, appointment scheduling, and medical records.",
      technologies: "React • Node.js • MongoDB • Express",
      price: "Live on Vercel",
      link: "https://coding-night-task-frontend.vercel.app/",
      github: "https://github.com/MINHAJ0336/Coding-Night-Task-Backend",
      image: "https://www.alliedtelesis.com/sites/default/files/styles/large_hq/public/image/2021-07/jewmc-hospital-hd.jpg?itok=lYCK7aSZ"
    },
    {
      title: "OLX Website",
      description: "OLX is a popular online classifieds platform where people can buy, sell, or exchange a wide range of products and services within their local community.",
      technologies: "React • Node.js • MongoDB • Express",
      price: "Live on Vercel",
      link: "https://olx-client-side-frontend.vercel.app/",
      github: "https://github.com/MuneebAhmedKhan1995/OLX-Client-Side-Frontend",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvdUel6vBQatcGiQo1n9XgVaxhWiIT-0fug&s"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar isProjectsPage={true} />
      
      {/* Simple Header */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Final Year Projects
          </h1>
          <p className="text-gray-400 text-lg">
            Professional web applications built with modern technologies
          </p>
        </div>
      </div>

      {/* Projects Grid - Single Row Layout */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-row flex-wrap justify-center gap-6">
          {reactProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 flex-1 min-w-[350px] max-w-[400px]"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-[280px]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-green-900 text-green-400 rounded text-sm">
                    {project.price}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.split(' • ').map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-blue-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-center text-sm font-medium transition-colors"
                  >
                    Live Demo
                  </a>
                  
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded text-center text-sm font-medium transition-colors border border-gray-600"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinalProjectPage;





// import Navbar from "../components/Navbar";

// const FinalProjectPage = () => {
//   const reactProjects = [
//     {
//       title: "E-Commerce Website",
//       description: "A full-featured e-commerce platform with product catalog, shopping cart, and user authentication built with MERN stack.",
//       technologies: "React • Node.js • MongoDB • Express",
//       price: "Live on Vercel",
//       link: "https://mern-project-e-commerce-website-frontend.vercel.app/",
//       github: "https://github.com/MuneebAhmedKhan1995/OLX-Client-Side-Backend",
//       image: "https://briansolis.com/wp-content/uploads/2022/01/eCommerce-Website-Components-photo.jpg"
//     },
//     {
//       title: "Medical Health Website",
//       description: "A comprehensive healthcare platform for patient management, appointment scheduling, and medical records.",
//       technologies: "React • Node.js • MongoDB • Express",
//       price: "Live on Vercel",
//       link: "https://coding-night-task-frontend.vercel.app/",
//       github: "https://github.com/MINHAJ0336/Coding-Night-Task-Backend",
//       image: "https://www.alliedtelesis.com/sites/default/files/styles/large_hq/public/image/2021-07/jewmc-hospital-hd.jpg?itok=lYCK7aSZ"
//     },
//     {
//       title: "OLX Website",
//       description: "OLX is a popular online classifieds platform where people can buy, sell, or exchange a wide range of products and services within their local community.",
//       technologies: "React • Node.js • MongoDB • Express",
//       price: "Live on Vercel",
//       link: "https://olx-client-side-frontend.vercel.app/",
//       github: "https://github.com/MuneebAhmedKhan1995/OLX-Client-Side-Frontend",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvdUel6vBQatcGiQo1n9XgVaxhWiIT-0fug&s"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900">
//       <Navbar isProjectsPage={true} />

//       <div className="max-w-6xl mx-auto px-4 pb-16">
//   <div className="flex flex-wrap gap-6 justify-center">
//     {reactProjects.map((project, index) => (
//       <div
//         key={index}
//         className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 flex-1 min-w-[300px] max-w-sm"
//       >
//         {/* Project Image */}
//         <div className="h-48 overflow-hidden">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//           />
//         </div>

//         {/* Project Content */}
//         <div className="p-6 flex flex-col justify-between">
//           <div>
//             <div className="flex justify-between items-start mb-3">
//               <h3 className="text-lg md:text-xl font-semibold text-white">
//                 {project.title}
//               </h3>
//               <span className="px-2 py-1 bg-green-900 text-green-400 rounded text-xs md:text-sm">
//                 {project.price}
//               </span>
//             </div>

//             <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
//               {project.description}
//             </p>

//             <div className="flex flex-wrap gap-2 mb-4">
//               {project.technologies.split(" • ").map((tech, techIndex) => (
//                 <span
//                   key={techIndex}
//                   className="px-2 py-1 bg-gray-700 text-blue-400 rounded text-xs md:text-sm"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-3 mt-3">
//             <a
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-center text-sm font-medium transition-colors"
//             >
//               Live Demo
//             </a>

//             {project.github && (
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded text-center text-sm font-medium transition-colors border border-gray-600"
//               >
//                 View Code
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
//     </div>
//   );
// };

// export default FinalProjectPage;





