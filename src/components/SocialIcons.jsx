import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex space-x-6">
      <a
        href="https://github.com/MuneebAhmedKhan1995?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-300 transition-all duration-300 transform hover:scale-110"
      >
        <FaGithub size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/muneeb-ahmed-khan-0a3340363?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLLbruokyTcK5%2FSfvRlqzXg%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-300 transition-all duration-300 transform hover:scale-110"
      >
        <FaLinkedin size={28} />
      </a>
    </div>
  );
};

export default SocialIcons;