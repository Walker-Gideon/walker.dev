import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Gradients from "./components/ui/Gradients";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import PageLoader from "./components/ui/PageLoader";
import Projects from "./components/project/Projects";
import Skills from "./components/skill/Skills";

function App() {
  return (
    <div className="relative">
      {/* <PageLoader /> */}
      <Header />
      <Gradients />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />

        <div className="relative">
          <Contact />
          <Gradients />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
