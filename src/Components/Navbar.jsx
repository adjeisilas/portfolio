import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-center">
        {/* Desktop & Mobile Container */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="flex items-center justify-between w-full md:w-auto md:gap-12 px-6 py-3 bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-2xl md:rounded-full"
        >
          {/* Logo */}
          <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer">
            ADJEI TECH
          </span>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://adjeisilas.github.io" target="_blank" rel="noreferrer">
              <Github className="w-5 h-5 text-zinc-400 hover:text-white transition-colors" />
            </a>
            <button className="text-xs bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-zinc-200 transition-all">
              Resume
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-1 text-zinc-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-6 right-6 p-6 bg-zinc-900/95 backdrop-blur-2xl border border-zinc-800 rounded-3xl md:hidden z-[90]"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-zinc-800" />
              <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-600/20">
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
