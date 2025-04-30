import About from "./components/About";
import Contact from "./components/Contact";
import Experienc from "./components/Experienc";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PageLoader from "./components/PageLoader";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative">
      {/* <PageLoader /> */}
      <Header />

      <div className="px-8">
        <Hero />
        <About />
        <Experienc />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
