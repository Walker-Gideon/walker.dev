import { useEffect, useState } from "react";
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
  const [display, setDisplay] = useState(true);

  useEffect(function () {
    const timer = setTimeout(() => {
      setDisplay(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* {display ? (
      <PageLoader />
      ) : ( */}
      <div className="relative">
        <Header />
        <Gradients />

        <main className="relative">
          <Hero />
          <About />
          {/* <Projects /> */}
          {/* <Skills /> */}
          {/* <Experience /> */}
          {/* <Contact /> */}
        </main>

        {/* <Footer /> */}
      </div>
      {/* )}  */}
    </div>
  );
}

export default App;
