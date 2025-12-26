
import React from 'react';
import { 
  Code2, 
  Search, 
  Layout, 
  Database, 
  PenTool, 
  Users, 
  Terminal, 
  Video 
} from 'lucide-react';

const skillSet = [
  { name: 'Web Dev', icon: <Code2 className="w-8 h-8" />, color: 'group-hover:text-[#00f2ff]', detail: 'WordPress, HTML, CSS, PHP' },
  { name: 'UI/UX Design', icon: <PenTool className="w-8 h-8" />, color: 'group-hover:text-[#8a2be2]', detail: 'Figma, Canva' },
  { name: 'Leadership', icon: <Users className="w-8 h-8" />, color: 'group-hover:text-blue-400', detail: 'Project Management & Team Lead' },
  { name: 'SEO Strategy', icon: <Search className="w-8 h-8" />, color: 'group-hover:text-cyan-400', detail: 'Optimization & Implementation' },
  { name: 'Backend Info', icon: <Database className="w-8 h-8" />, color: 'group-hover:text-green-400', detail: 'MySQL, XAMPP, MS Access' },
  { name: 'System Knowledge', icon: <Terminal className="w-8 h-8" />, color: 'group-hover:text-purple-400', detail: 'Kali Linux, C/C++ (Basic)' },
  { name: 'Media Creation', icon: <Video className="w-8 h-8" />, color: 'group-hover:text-pink-400', detail: 'Marketing Design & Video Production' },
  { name: 'Content Writing', icon: <Layout className="w-8 h-8" />, color: 'group-hover:text-orange-400', detail: 'Report & Thesis Writing' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-[#0a0a0a]/50">
      <div className="reveal max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="mono text-[#00f2ff] text-sm uppercase tracking-widest">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Technical <span className="text-[#8a2be2]">Capabilities</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillSet.map((skill, idx) => (
            <div 
              key={idx} 
              className={`group glass p-8 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/5 group-hover:shadow-[0_0_20px_rgba(138,43,226,0.2)]`}
            >
              <div className={`mb-4 text-gray-500 transition-colors duration-500 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-1 group-hover:text-white transition-colors">{skill.name}</h3>
              <p className="text-[10px] text-gray-500 mono uppercase tracking-wider">{skill.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
