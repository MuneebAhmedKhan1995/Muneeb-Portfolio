import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_pvnoiih', 
        'template_5r4wy3d',
        e.target,
        'K9w9k7STE3VrQ3Xrs' // Replace with your actual user ID
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header with animation */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div 
              className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition text-white"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition text-white"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition text-white"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg"
                >
                  Failed to send message. Please try again later or email me directly at zaeemahmedkhan12@gmail.com
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div 
                className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700 hover:border-purple-400 transition-all duration-300"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-semibold mb-6 text-purple-400">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-cyan-900/50 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Location</h4>
                      <p className="text-gray-400">Hyderabad, Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-900/50 p-3 rounded-full mr-4">
                      <FaPhone className="text-purple-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Phone</h4>
                      <p className="text-gray-400">+92 315 5497784</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-900/50 p-3 rounded-full mr-4">
                      <FaEnvelope className="text-blue-400 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Email</h4>
                      <p className="text-gray-400">zaeemahmedkhan12@gmail.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700 hover:border-pink-400 transition-all duration-300"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-semibold mb-6 text-pink-400">Follow Me</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/MuneebAhmedKhan1995?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full text-gray-300 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/muneeb-ahmed-khan-0a3340363?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzzRCwsbSSCerNoUIY5Sq1w%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-blue-600 p-4 rounded-full text-gray-300 hover:text-white transition-colors duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>
                  
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;