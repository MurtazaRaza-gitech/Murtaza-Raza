
import React from 'react';
import { Github, Facebook, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 glass">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-2xl font-bold tracking-tighter">
          <span className="text-[#8a2be2]">M</span>URTAZA<span className="text-[#00f2ff]">R</span>AZA
        </div>

        <div className="text-gray-500 mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-center">
          Project Manager & Co-Founder of Setra Solutionz &copy; 2024
        </div>

        <div className="flex items-center gap-6">
          <SocialLink href="https://www.facebook.com/share/1BC4GMJ8Ma/" icon={<Facebook className="w-5 h-5" />} />
          <SocialLink href="https://setrasolutionz.com/" icon={<Globe className="w-5 h-5" />} />
          <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
          <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-[#00f2ff] transition-all hover:scale-110"
  >
    {icon}
  </a>
);

export default Footer;
