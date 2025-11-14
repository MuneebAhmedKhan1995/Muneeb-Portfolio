import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import SocialIcons from "../components/SocialIcons";
import profileImage from "../assets/Muneeb University Image.jpeg";

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
            {/* Luxury Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-900/30 to-transparent rounded-full filter blur-[100px] animate-float"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-900/20 rounded-full filter blur-[80px] animate-float-delay"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient opacity-5"></div>
            </div>

            {/* Diamond Pattern Overlay */}
            <div className="absolute inset-0 bg-diamond-pattern opacity-10"></div>

            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-white"
                    >
                        <h3 className="text-lg md:text-xl font-medium text-purple-400 mb-4 tracking-widest">
                            JUNIOR DEVELOPER
                        </h3>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                                Muneeb
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                Ahmed Khan
                            </span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-300">
                            Building <span className="text-purple-300">digital experiences</span> that inspire
                        </h2>
                        <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                            I architect exceptional web applications with cutting-edge technologies.
                            Specializing in React ecosystems, Node.js, and cloud-native solutions.
                        </p>

                        <div className="flex flex-wrap gap-6 mb-12">
    {/* Hire Me Button - Now properly links to contact page */}
    <motion.a
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        href="./Contact"  // Changed from #contact to /contact
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-bold text-lg shadow-xl hover:shadow-purple-500/30 transition-all flex items-center gap-2 group"
    >
        Hire Me
        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
    </motion.a>
    
    {/* Download CV Button - Updated with download functionality */}
</div>

                        {/* Social Icons */}
                        <SocialIcons />
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex justify-center"
                    >
                        <div className="relative group perspective-1000">
                            {/* Main Image Container */}
                            <motion.div
                                whileHover={{ rotateY: 5 }}
                                className="w-80 h-80 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-1 shadow-2xl backdrop-blur-sm border border-gray-800/50 transform-style-preserve-3d transition-all duration-500"
                            >

                                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-800/30 shadow-inner-xl">
                                    <img
                                        src={profileImage}
                                        alt="Muneeb Ahmed Khan"
                                        className="w-full h-full object-cover object-center transform transition-all duration-500 group-hover:scale-105"
                                        style={{
                                            filter: 'brightness(1.08) contrast(1.1) saturate(1.15)',
                                            transformOrigin: 'center center',
                                            objectPosition: 'center 48%'
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-transparent to-gray-900/10"></div>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Home;


