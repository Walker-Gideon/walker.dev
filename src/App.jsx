import About from "./components/about/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Gradients from "./components/ui/Gradients";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import PageLoader from "./components/PageLoader";
import Projects from "./components/project/Projects";
import Skills from "./components/skill/Skills";

function App() {
  return (
    <div className="relative">
      {/* <PageLoader /> */}
      <Header />
      <Gradients />

      <div className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />

        {/* <div className="relative">
          <Contact />
          <Gradients />
        </div> */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
