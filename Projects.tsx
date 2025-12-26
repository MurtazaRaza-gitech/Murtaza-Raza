
import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

const projectList = [
  {
    title: 'Setra Solutionz',
    category: 'Agency Platform',
    image: 'https://picsum.photos/id/1/800/600',
    tags: ['WordPress', 'SEO', 'Leadership'],
    desc: 'Co-founded and managed a multidisciplinary IT agency.'
  },
  {
    title: 'Anime Studio Demo',
    category: 'Portfolio Design',
    image: 'https://picsum.photos/id/2/800/600',
    tags: ['UI/UX', 'Figma', 'Fronend'],
    desc: 'Bespoke portfolio solution for creative animation studios.'
  },
  {
    title: 'E-commerce Engine',
    category: 'Digital Store',
    image: 'C:\Users\Murtaza\Downloads\Shoes.jpeg',
    tags: ['PHP', 'MySQL', 'Stripe'],
    desc: 'Robust e-commerce solutions for various business models.'
  },
  {
    title: 'Academic Hub',
    category: 'Writing Services',
    image: 'https://picsum.photos/id/4/800/600',
    tags: ['Content', 'Research', 'IT'],
    desc: 'Platform providing comprehensive IT and academic services.'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="reveal max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="mono text-[#8a2be2] text-sm uppercase tracking-widest">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Impactful <span className="text-[#00f2ff]">Deliverables</span></h2>
          </div>
          <p className="max-w-md text-gray-400">
            A showcase of web development, UI/UX, and marketing projects overseen at Setra Solutionz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectList.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-3xl glass transition-all duration-500 hover:neon-purple">
              {/* Image Container */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="mb-4">
                  <span className="mono text-[#00f2ff] text-xs uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-3xl font-bold text-white mt-1">{project.title}</h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-6">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full bg-white/10 text-[10px] mono text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a href="https://setrasolutionz.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 bg-[#8a2be2] text-white rounded-lg font-medium hover:bg-[#8a2be2]/80 transition-all">
                    <Globe className="w-4 h-4" /> Visit Site
                  </a>
                </div>
              </div>

              {/* Static Basic Info */}
              <div className="p-6 bg-[#080808]/50 group-hover:opacity-0 transition-opacity flex justify-between items-center">
                 <h3 className="text-xl font-bold">{project.title}</h3>
                 <span className="text-gray-500 mono text-xs uppercase tracking-widest">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
