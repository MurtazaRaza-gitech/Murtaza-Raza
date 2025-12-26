
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Professional Image */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#8a2be2] to-[#00f2ff] opacity-20 group-hover:opacity-40 rounded-2xl blur-2xl transition duration-700"></div>
          <div className="relative glass p-2 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/id/1012/800/800" 
              alt="Murtaza Raza Portrait" 
              className="w-full aspect-square object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl neon-cyan animate-bounce-slow">
            <span className="mono text-2xl font-bold text-[#00f2ff]">2024</span>
            <p className="text-[10px] uppercase tracking-tighter text-gray-400">Founded Setra Solutionz</p>
          </div>
        </div>

        {/* Bio Content */}
        <div className="space-y-8">
          <div>
            <span className="mono text-[#8a2be2] uppercase tracking-widest text-sm">Professional Profile</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Driven by <span className="text-[#00f2ff]">Innovation</span></h2>
          </div>
          
          <div className="space-y-4 text-gray-400 leading-relaxed text-lg text-justify">
            <p>
              I am a highly motivated and creative Digital Creator, Web Developer, and UI/UX Designer with a strong passion for innovation and design excellence. As the Project Manager and Co-Founder of <strong>Setra Solutionz</strong>, I oversee multidisciplinary teams to deliver high-quality IT, design, and content-based solutions.
            </p>
            <p>
              My expertise includes website development using WordPress, SEO strategy implementation, and crafting visually engaging interfaces using Figma and Canva. Currently pursuing my BS in Information Technology at the University of Punjab, I bridge technical proficiency in HTML, CSS, and PHP with strong leadership and problem-solving skills.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-4 rounded-lg">
              <p className="text-white font-bold text-xl">15+</p>
              <p className="text-gray-500 text-xs mono">Team Members Managed</p>
            </div>
            <div className="glass p-4 rounded-lg">
              <p className="text-white font-bold text-xl">975/1100</p>
              <p className="text-gray-500 text-xs mono">Academic Excellence (HSSC)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
