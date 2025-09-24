import Navbar from "../components/Navbar";
import { useState } from "react";

const FinalProjectPage = () => {
  const projectDetails = {
    title: "E-Commerce Website",
    liveUrl: "https://mern-project-e-commerce-website-frontend.vercel.app/",
    description: "A complete e-commerce platform with admin panel, user panel, product management, and secure payment integration.",
    image: "https://briansolis.com/wp-content/uploads/2022/01/eCommerce-Website-Components-photo.jpg",
    
    technologies: [
      { name: "React.js", icon: "⚛️", type: "Frontend Framework" },
      { name: "JavaScript", icon: "💻", type: "Programming Language" },
      { name: "Tailwind CSS", icon: "🎨", type: "CSS Framework" },
      { name: "Node.js", icon: "🟢", type: "Backend Runtime" },
      { name: "Express.js", icon: "🚀", type: "Server Framework" },
      { name: "MongoDB", icon: "🍃", type: "Database" },
      { name: "JWT", icon: "🔐", type: "Authentication" },
      { name: "REST API", icon: "🔗", type: "API Architecture" }
    ],

    features: {
      admin: [
        "User Management System",
        "Product Catalog Management",
        "Order Management & Tracking",
        "Inventory Management",
        "Sales Analytics Dashboard",
        "Customer Management",
        "Category Management",
        "Revenue Reports"
      ],
      user: [
        "User Registration & Login",
        "Product Browsing & Search",
        "Shopping Cart Functionality",
        "Wishlist Management",
        "Order History & Tracking",
        "Payment Gateway Integration",
        "Product Reviews & Ratings",
        "Profile Management"
      ]
    },

    securityFeatures: [
      "JWT Authentication System",
      "Password Encryption with BCrypt",
      "Secure Payment Processing",
      "Data Validation & Sanitization",
      "CSRF Protection",
      "Rate Limiting for API Security",
      "Secure File Uploads",
      "SSL/TLS Encryption"
    ],

    productCategories: [
      "Electronics & Gadgets",
      "Fashion & Clothing",
      "Home & Kitchen",
      "Beauty & Personal Care",
      "Sports & Outdoors",
      "Books & Stationery",
      "Health & Wellness",
      "Automotive Accessories"
    ],

    apiIntegrations: [
      "Payment Gateway (Stripe/Razorpay)",
      "Cloud Storage (Cloudinary/AWS S3)",
      "Email Service (Nodemailer/SendGrid)",
      "SMS Notifications (Twilio)",
      "Shipping & Logistics API",
      "Analytics & Tracking"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navbar isProjectsPage={true} />
      
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        {/* Final Project Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-3">
          Final Project
        </h1>

        {/* Project Image - Centered */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-3xl h-72 rounded-xl overflow-hidden shadow-xl border-2 border-white/20">
            <img 
              src={projectDetails.image} 
              alt={projectDetails.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>

        {/* Project Title & Description - Centered */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {projectDetails.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
            {projectDetails.description}
          </p>
          <a 
            href={projectDetails.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-semibold text-base hover:from-purple-700 hover:to-blue-600 transition-all shadow-lg hover:shadow-purple-500/40 transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Live Demo
          </a>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Technologies Section */}
          <section className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-xl">
                🛠️
              </div>
              <h2 className="text-2xl font-bold text-white">Technology Stack</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projectDetails.technologies.map((tech, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-4 rounded-xl border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <h3 className="font-bold text-white text-base mb-1">{tech.name}</h3>
                  <p className="text-gray-400 text-xs">{tech.type}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Admin Panel Features */}
            <section className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl">
                  👨‍💼
                </div>
                <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
              </div>
              <div className="space-y-3">
                {projectDetails.features.admin.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {index + 1}
                    </div>
                    <span className="font-semibold text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* User Panel Features */}
            <section className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/30 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-xl">
                  👥
                </div>
                <h2 className="text-2xl font-bold text-white">User Panel</h2>
              </div>
              <div className="space-y-3">
                {projectDetails.features.user.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-cyan-400/30 transition-all">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {index + 1}
                    </div>
                    <span className="font-semibold text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Security Features */}
          <section className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-lg rounded-2xl p-6 border border-red-500/30 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-xl">
                🛡️
              </div>
              <h2 className="text-2xl font-bold text-white">Security Features</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {projectDetails.securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-red-400/30 transition-all">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-sm">
                    🔒
                  </div>
                  <span className="font-semibold text-white text-base">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Product Categories */}
          <section className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-xl">
                📦
              </div>
              <h2 className="text-2xl font-bold text-white">Product Categories</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {projectDetails.productCategories.map((category, index) => (
                <div key={index} className="bg-white/5 p-3 rounded-lg border border-white/10 text-center hover:border-green-400/30 transition-all">
                  <span className="font-semibold text-white text-sm">{category}</span>
                </div>
              ))}
            </div>
          </section>

          {/* API Integrations */}
          <section className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center text-xl">
                🔌
              </div>
              <h2 className="text-2xl font-bold text-white">API Integrations</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {projectDetails.apiIntegrations.map((api, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10 text-center hover:border-yellow-400/30 transition-all">
                  <span className="font-semibold text-white text-base">{api}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 my-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-6 rounded-2xl text-center shadow-lg">
            <div className="text-2xl font-bold text-white mb-1">8+</div>
            <div className="text-gray-200 text-sm">Product Categories</div>
          </div>
          <div className="bg-gradient-to-r from-cyan-600 to-blue-500 p-6 rounded-2xl text-center shadow-lg">
            <div className="text-2xl font-bold text-white mb-1">16+</div>
            <div className="text-gray-200 text-sm">Key Features</div>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-6 rounded-2xl text-center shadow-lg">
            <div className="text-2xl font-bold text-white mb-1">8+</div>
            <div className="text-gray-200 text-sm">Security Features</div>
          </div>
          <div className="bg-gradient-to-r from-orange-600 to-red-500 p-6 rounded-2xl text-center shadow-lg">
            <div className="text-2xl font-bold text-white mb-1">6+</div>
            <div className="text-gray-200 text-sm">API Integrations</div>
          </div>
        </div>

        {/* Tech Stack Footer */}
        <div className="text-center bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-lg">
          <h3 className="text-xl font-bold text-white mb-4">Built With Modern Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {projectDetails.technologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full border border-gray-600 hover:border-purple-500 transition-all flex items-center gap-2 text-sm font-semibold">
                {tech.icon} {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalProjectPage;