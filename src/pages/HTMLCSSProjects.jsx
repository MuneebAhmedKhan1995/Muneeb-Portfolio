import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const HTMLCSSProjectsPage = () => {
  const HTMLCSSProjects = [
    {
      title: "Survey Form Project",
      description: "Full-featured online store with cart functionality and payment integration",
      price: "Live on Vercel",
      link: "https://1st-html-css-project-black.vercel.app/",
      image: "https://global.discourse-cdn.com/freecodecamp/optimized/4X/3/2/d/32d3850d9916f873690eda1d2ec929af416fc87d_2_690x317.jpeg"
    },
    {
      title: "Tribute Page Project",
      description: "Interactive developer portfolio with project showcase",
      price: "Live on Vercel",
      link: "https://2nd-html-css-project.vercel.app/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQihb20dmE9fYh8-6KPOrhiYPN4LUlmkpjbMg&s"
    },
    {
      title: "Technical Documentation",
      description: "Productivity application with drag-and-drop functionality",
      price: "Live on Vercel",
      link: "https://3rd-technical-documentation-page.vercel.app/",
      image: "https://global.discourse-cdn.com/freecodecamp/original/3X/a/5/a573d152c0740c5f7aa383c5fbbd14b71e4ef64d.png"
    },
    {
      title: "Product Landing Page",
      description: "Real-time weather application with location detection",
      price: "Live on Vercel",
      link: "https://4th-product-landing-page.vercel.app/",
      image: "https://global.discourse-cdn.com/freecodecamp/original/3X/7/d/7dbd70f4e6302bee912e098683976687a844ac58.png"
//     }"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <Navbar isProjectsPage={true} />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-800 rounded-full filter blur-[90px] opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-800 rounded-full filter blur-[90px] opacity-20 animate-float-delay"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-28 pb-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            My HTML/CSS Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Beautiful, responsive projects built with pure HTML and CSS
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {HTMLCSSProjects.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500"
    >
      
      <div className="h-60 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
      </div>
      
      
      <div className="p-5">
        <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
        <p className="text-gray-300 text-sm mb-3">{project.description}</p>
        
        <div className="flex flex-col space-y-3">
          <span className="text-purple-400 font-medium text-sm">{project.price}</span>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm font-medium text-center hover:shadow-purple-500/30 transition-all"
          >
            Visit Project
          </motion.a>
        </div>
      </div>
      
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  ))}
</div>


</div>

      </div>
  );
};

export default HTMLCSSProjectsPage;
