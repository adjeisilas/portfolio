import Navbar from "./Components/Navbar";
import Hero from "./Section/Hero";
import TechStack from "./Components/TechStack";
import Projects from "./Section/Projects";
import About from "./Section/About";
import Contact from "./Section/Contact";
import Cursor from "./Components/Cursur";
import Footer from "./Components/Footer";

function App() {
  return (
    <main className="bg-[#050505] text-white">
      <Cursor />
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
