import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiCode, FiCpu, FiDatabase, FiLayers } from "react-icons/fi";
import profileImage from "../assets/Muneeb University Image.jpg";
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const skills = [
    { name: "React", icon: <FiCode />, level: 95 },
    { name: "Node.js", icon: <FiCpu />, level: 88 },
    { name: "MongoDB", icon: <FiDatabase />, level: 85 },
    { name: "Express", icon: <FiLayers />, level: 85 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header Section */}
      <div className="relative overflow-hidden py-20">
        {/* Glowing Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-900 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            {/* Profile Image with Glow */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl opacity-80 blur-lg group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gray-800 p-1 shadow-xl">
                <div className="bg-gray-900 w-full h-full rounded-2xl flex items-center justify-center overflow-hidden">
                  {/* Your Image Here */}
                  <img
                    src={profileImage} // Update this path
                    alt="Muneeb Ahmed Khan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Header Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Muneeb Ahmed Khan</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
                MERN Stack Developer
              </h2>
              <p className="text-gray-300 max-w-lg mb-8">
  I'm <span className="text-purple-300 font-medium">MERN Stack Developer</span>, I build dynamic, full-stack web applications with <span className="text-purple-300">MongoDB, Express.js, React, and Node.js</span>. My expertise lies in crafting responsive, scalable solutions with intuitive UIs and robust backend architecture. Passionate about modern JavaScript ecosystems, I thrive on turning complex ideas into efficient, user-friendly digital experiences.
</p>
<div className="flex gap-4">
  <Link to="/projects/react"> {/* Change "/react" to your actual route */}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-purple-500/20 transition-all"
    >
      View Projects
    </motion.button>
  </Link>
</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                My Journey
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate <span className="text-purple-300 font-medium">MERN stack developer</span> with strong skills in building modern web applications. My focus is on writing clean, efficient code and creating intuitive user experiences.
                </p>
                <p>
                  My coding journey began with simple HTML/CSS projects, and through continuous learning, I've developed expertise in full-stack JavaScript development and responsive design principles.
                </p>
                <p>
                  Beyond development, I actively expand my knowledge through open-source contributions, tech community engagement, and personal projects that challenge my skills.
                </p>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
            >
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Technical Skills
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="text-purple-400">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                      <span className="ml-auto text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 mb-8"
            >

              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Education
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg">Bachelor's in Software Engineering</h3>
                  <p className="text-purple-400 mb-1">University Of Sindh • 2024-2027</p>
                  <p className="text-gray-400">Relevant coursework: Web Development, Data Structures</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">Intermediate</h3>
                  <p className="text-purple-400 mb-1">Govt Boys Degree College Kohsar • 2021-2023</p>
                  <p className="text-gray-400">Relevant coursework: Computer Science, Mathematics, Physics</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg">Matric</h3>
                  <p className="text-purple-400 mb-1">Campanion Grammar High School • 2011-2021</p>
                  <p className="text-gray-400">Relevant subjects: Computer Studies, Mathematics, Science</p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Get In Touch</h2>
              <p className="text-gray-300 mb-6">Have a project or want to collaborate?</p>
              <div className="flex gap-4">
                <a href="https://github.com" className="p-3 bg-gray-700 rounded-full hover:bg-purple-600 transition-all">
                  <FiGithub className="text-gray-200" />
                </a>
                <a href="https://linkedin.com" className="p-3 bg-gray-700 rounded-full hover:bg-blue-600 transition-all">
                  <FiLinkedin className="text-gray-200" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;