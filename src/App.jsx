import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Gradients from "./components/ui/Gradients";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/project/Projects";
import Skills from "./components/skill/Skills";

function App() {
  return (
    <div className="relative">
      <Header />
      <Gradients />

      <main className="relative">
        <Hero />
        <About />

        <div className="relative">
          <Projects />
          <Gradients />
        </div>

        <Skills />
        <Experience />

        <div className="relative">
          <Contact />
          <Gradients />
        </div>
      </main>
    </div>
  );
}

export default App;
