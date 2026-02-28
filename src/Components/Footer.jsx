import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Live clock for your local time (Ghana)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { 
        timeZone: 'Africa/Accra',
        hour: '2-digit',
        minute: '2-digit'
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: The Big CTA */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
              LET'S <span className="text-zinc-700 italic">CONNECT</span>
            </h2>
            <p className="mt-6 text-zinc-400 text-lg md:text-xl">
              Currently open to new projects and collaborations. 
              Based in Ghana, working worldwide.
            </p>
          </div>
          
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 transition-colors"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12 border-t border-zinc-900">
          
          {/* Column 1: Local Time */}
          <div className="space-y-4">
            <h4 className="text-zinc-500 uppercase text-xs tracking-widest">Local Time</h4>
            <p className="text-xl font-medium text-zinc-200">{time} GMT</p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h4 className="text-zinc-500 uppercase text-xs tracking-widest">Sitemap</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="space-y-4">
            <h4 className="text-zinc-500 uppercase text-xs tracking-widest">Socials</h4>
            <div className="flex gap-4">
              <Github className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Column 4: Newsletter/Quick Contact */}
          <div className="space-y-4">
            <h4 className="text-zinc-500 uppercase text-xs tracking-widest">Direct</h4>
            <a href="mailto:hello@yourname.com" className="text-lg font-medium text-blue-500 hover:underline">
              info@adjeitech.com
            </a>
          </div>
        </div>

        {/* Bottom Section: Legal & Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 text-zinc-600 text-xs gap-4">
          <p>© 2026 ALL RIGHTS RESERVED — MR. ADJEI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;