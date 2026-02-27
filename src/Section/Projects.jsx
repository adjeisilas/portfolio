import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Eco-Track Dashboard",
    desc: "A real-time carbon footprint tracker built with React and Highcharts.",
    tags: ["React", "Tailwind", "D3.js"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Nova E-Commerce",
    desc: "A high-performance fashion store with Framer Motion animations.",
    tags: ["Zustand", "Stripe", "Tailwind"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
              </div>

              {/* Content Overlay */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-zinc-400 text-sm mb-4">{project.desc}</p>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a href={project.link} className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;