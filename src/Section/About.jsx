import { motion } from 'framer-motion';
// Ensure your image is in src/assets/
import Pic3 from '../assets/pic3.png'; 
import { Pi } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header for Mobile Clarity */}
        <div className="mb-12 md:hidden">
          <h2 className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-2">About Me</h2>
          <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
        </div>

        {/* The Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-fr">
          
          {/* CARD 1: MAIN BIOGRAPHY (Top Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 p-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 italic text-white leading-tight">
              I craft high-performance <br className="hidden md:block"/> digital experiences.
            </h2>
            <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
              Based in Ghana, I specialize in the React ecosystem. I don't just write code; 
              I design systems that are fast, accessible, and delight the people who use them. 
              My goal is to bridge the gap between complex engineering and elegant design.
            </p>
          </motion.div>

          {/* CARD 2: THE PHOTO (Top Right) */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative min-h-[350px] md:min-h-full overflow-hidden rounded-3xl border border-zinc-800 group"
          >
            <img 
              src={Pic3} 
              alt="Mr. Traviz Portrait" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <p className="text-white font-bold tracking-wide">MR. TRAVIZ</p>
              <p className="text-zinc-400 text-xs uppercase tracking-widest">Software Engineer</p>
            </div>
          </motion.div>

          {/* CARD 3: TECH FOCUS (Bottom Left) */}
          <div className="p-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl flex flex-col justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <h3 className="text-zinc-500 uppercase tracking-tighter text-sm font-bold">Main Focus</h3>
            </div>
            <p className="text-xl md:text-2xl font-bold text-white leading-tight">
              Frontend Architecture <br/> & UI/UX Design
            </p>
          </div>

          {/* CARD 4: CALL TO ACTION (Bottom Right) */}
          <motion.div 
            className="md:col-span-2 p-8 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10 border border-blue-500/20 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <p className="text-xl md:text-2xl font-bold text-white mb-1">Let's build something together.</p>
              <p className="text-zinc-500 text-sm">Open for freelance and full-time opportunities.</p>
            </div>
            <a 
              href="#contact"
              className="w-full md:w-auto text-center px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Contact Me
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;