
import React, { useState, useEffect } from 'react';

const titles = ['Web Developer', 'UI/UX Designer', 'Project Manager', 'Digital Creator', 'SEO Specialist'];

const Hero: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentTitleIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, typingSpeed]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <div className="reveal active">
        <p className="mono text-[#00f2ff] tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
          Sequence Initiated: Welcome
        </p>
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a2be2] to-[#00f2ff]">Murtaza</span>
        </h1>
        <div className="h-12 md:h-20 flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-light text-gray-300">
            A specialized <span className="font-bold text-white mono underline decoration-[#8a2be2] decoration-2 underline-offset-8">
              {currentText}
            </span>
            <span className="animate-pulse ml-1">|</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-12 justify-center">
          <a 
            href="#projects" 
            className="px-10 py-4 bg-gradient-to-r from-[#8a2be2] to-[#00f2ff] text-white font-bold rounded-lg shadow-[0_0_20px_rgba(138,43,226,0.5)] hover:shadow-[0_0_40px_rgba(0,242,255,0.6)] transition-all duration-300 hover:-translate-y-1"
          >
            My Work
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 glass text-white font-bold rounded-lg hover:neon-cyan transition-all duration-300 hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Decorative tech details */}
      <div className="absolute bottom-10 left-10 hidden lg:block animate-pulse">
        <div className="mono text-[10px] text-gray-600 flex flex-col gap-1 text-left">
          <span>REGION: LAHORE, PK</span>
          <span>INSTITUTE: PU LAHORE</span>
          <span>SYSTEM: ONLINE</span>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="mono text-[10px] text-gray-600 flex flex-col items-end gap-1">
          <span>SETRA_SOLUTIONZ_ROOT</span>
          <span>&copy; 2024 MURTAZA_RAZA</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
