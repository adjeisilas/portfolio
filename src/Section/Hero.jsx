import { motion } from "framer-motion";
import { ArrowRight, Github, Twitter } from "lucide-react";

const Hero = () => {
  // Animation variants for a staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-4 sm:px-6">
      {/* Background Decor: The "Spotlight" - Scaled for Mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center z-10"
      >
        {/* Animated Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6 md:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-medium text-zinc-400 uppercase tracking-[0.2em]">
            Available for new projects
          </span>
        </motion.div>

        {/* Main Heading: Fluid Typography */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6 px-2"
        >
          I craft{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
            digital
          </span>{" "}
          <br className="hidden sm:block" />
          <span className="italic font-serif text-blue-500">masterpieces</span>
        </motion.h1>

        {/* Subtext: Adjusted width and size for readability */}
        <motion.p
          variants={itemVariants}
          className="max-w-xs sm:max-w-md md:max-w-xl mx-auto text-zinc-400 text-base md:text-xl leading-relaxed mb-8 md:mb-10 px-4"
        >
          Senior React Developer based in Ghana, focused on building
          high-performance, visually stunning interfaces.
        </motion.p>

        {/* CTA Buttons: Stacked on mobile, row on desktop */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6"
        >
          <button className="w-full sm:w-auto group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:pr-12">
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5" />
          </button>

          <a
            href="https://adjeisilas.github.io"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-zinc-800 
             text-white font-medium hover:bg-zinc-900 transition-colors 
             flex items-center justify-center gap-2"
          >
            <Github className="w-5 h-5 text-zinc-400 hover:text-white transition-colors" />
            <span>GitHub</span>
          </a>
        </motion.div>

        {/* Scroll Indicator: Hidden on small mobile screens to save space */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
