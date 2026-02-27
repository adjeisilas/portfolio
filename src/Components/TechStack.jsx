import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', color: 'text-cyan-400' },
  { name: 'Tailwind CSS', color: 'text-sky-400' },
  { name: 'JavaScript', color: 'text-yellow-400' },
  { name: 'TypeScript', color: 'text-blue-500' },
  { name: 'Node.js', color: 'text-green-500' },
  { name: 'Framer Motion', color: 'text-purple-500' },
  { name: 'Vite', color: 'text-indigo-500' },
  { name: 'Next.js', color: 'text-white' },
];

const TechStack = () => {
  // We duplicate the array to ensure the loop is seamless
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <div className="py-20 overflow-hidden bg-[#050505] relative">
      {/* Subtle Fades on the edges for a "vanishing" look */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

      <div className="flex flex-col items-center mb-10">
        <h2 className="text-zinc-500 uppercase tracking-[0.3em] text-sm font-semibold">
          My Tech Stack
        </h2>
      </div>

      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          ease: "linear", 
          duration: 20, 
          repeat: Infinity 
        }}
      >
        {duplicatedTech.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 mx-12 text-3xl md:text-5xl font-bold transition-opacity hover:opacity-100 opacity-40 cursor-default"
          >
            <span className={tech.color}>#</span>
            <span className="text-zinc-200">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;