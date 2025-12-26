
import React, { useState } from 'react';
import { Send, MapPin, Mail, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Signal received by Murtaza! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
      <div className="reveal max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="mono text-[#00f2ff] text-sm uppercase tracking-widest">Inquire</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Connect <span className="text-[#8a2be2]">Securely</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Node</h3>
              <p className="text-gray-400">Reach out for collaborations, web solutions, or project management inquiries.</p>
            </div>

            <div className="space-y-6">
              <ContactInfo icon={<MapPin className="text-[#00f2ff]" />} label="Headquarters" value="Lahore, PK" />
              <ContactInfo icon={<Mail className="text-[#8a2be2]" />} label="Primary Email" value="murtazaraza2286@gmail.com" />
              <ContactInfo icon={<Globe className="text-[#00f2ff]" />} label="Website" value="setrasolutionz.com" />
            </div>

            <div className="p-8 glass rounded-2xl">
              <h4 className="font-bold mb-4">Availability</h4>
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="mono text-xs text-gray-300">OPEN FOR CLIENT INQUIRIES</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FloatingInput 
                  label="Identify Yourself" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
                <FloatingInput 
                  label="Contact Email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <FloatingInput 
                label="Transmission Subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b-2 border-white/20 py-4 focus:outline-none focus:border-[#00f2ff] transition-all peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-0 top-4 text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[#00f2ff] peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[#00f2ff] peer-[:not(:placeholder-shown)]:text-xs">
                  Project Details / Message
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-gradient-to-r from-[#8a2be2] to-[#00f2ff] text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all group"
              >
                Launch Sequence <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 glass rounded-lg">{icon}</div>
    <div>
      <p className="text-xs mono text-gray-500 uppercase tracking-widest">{label}</p>
      <p className="text-lg font-medium">{value}</p>
    </div>
  </div>
);

const FloatingInput: React.FC<{ 
  label: string; 
  name: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  type?: string;
  required?: boolean;
}> = ({ label, name, value, onChange, type = "text", required }) => (
  <div className="relative group">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-transparent border-b-2 border-white/20 py-4 focus:outline-none focus:border-[#00f2ff] transition-all peer"
      placeholder=" "
    />
    <label className="absolute left-0 top-4 text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[#00f2ff] peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[#00f2ff] peer-[:not(:placeholder-shown)]:text-xs">
      {label}
    </label>
  </div>
);

export default Contact;
