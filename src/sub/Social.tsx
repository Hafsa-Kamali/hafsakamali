import { FaFacebookF, FaDiscord, FaLinkedinIn, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <main className="flex space-x-4">
      <a
        href="https://www.facebook.com/hafsa.kamali.07"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#1877F2] rounded-full text-5xl hover:scale-110 transition-transform"
        style={{ backgroundColor: '#1877F2' }}
        aria-label="Facebook"
      >
        <FaFacebookF size={27} color='#ffff ' />
      </a>

      <a
        href="https://discord.com/channels/@hafsakamali"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#5865F2] rounded-full text-3xl hover:scale-110 transition-transform"
        aria-label="Discord"
      >
        <FaDiscord size={30} color='#5865F2'/>
      </a>

      <a
        href="www.linkedin.com/in/hafsa-kamali-931384326"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#0077B5] rounded-md text-3xl hover:scale-110 transition-transform"
        style={{ backgroundColor: '#0077B5' }}
        aria-label="LinkedIn"
      >
        <FaLinkedinIn size={30}  color='#ffff '/>
      </a>

      <a
        href="https://github.com/Hafsa-Kamali"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#181717] rounded-full text-3xl hover:scale-110 transition-transform"
        style={{ backgroundColor: '#181717' }}
        aria-label="GitHub"
      >
        <FaGithub size={30} color='#ffffff' />
      </a>

      <a
        href="https://www.instagram.com/shizuyy_hafiii/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-gradient-to-r from-[#ffcb6c] via-[#DD2A7B] to-[#8134AF] rounded-md text-3xl hover:scale-110 transition-transform"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffcb6c, #DD2A7B, #8134AF)'
        }}
        aria-label="Instagram"
      >
        <FaInstagram size={32} color='#ffffff'/>
      </a>

      <a
        href="https://www.youtube.com/@HAFSAKAMALI-19"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#FF0000] rounded-md text-3xl hover:scale-110 transition-transform"
        style={{ backgroundColor: '#ffff' }}
        aria-label="YouTube"
      >
        <FaYoutube size={30} color='#FF0000' />
      </a>
    </main>
  );
};

export default SocialIcons;
