
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass px-6 md:px-12 py-4 flex items-center justify-between">
      <div className="text-xl md:text-2xl font-bold tracking-tighter">
        <span className="text-[#8a2be2]">M</span>URTAZA<span className="text-[#00f2ff]">R</span>AZA
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-medium">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>

      <div className="md:hidden flex items-center">
        <a href="#contact" className="px-4 py-2 rounded-full border border-[#00f2ff] text-[#00f2ff] text-sm hover:bg-[#00f2ff]/10 transition-all">
          Connect
        </a>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="relative group py-2 text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors mono"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8a2be2] to-[#00f2ff] transition-all duration-300 group-hover:w-full"></span>
  </a>
);

export default Navbar;
