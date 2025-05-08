import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
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

      <div className="relative">
        <Hero />
        <About />
        <Projects />
        {/* <Skills /> */}
        {/* <Experience /> */}
        {/* <Contact /> */}
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
