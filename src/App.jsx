import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PageLoader from "./components/PageLoader";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="relative">
      {/* <PageLoader /> */}
      <Header />

      <div className="px-8">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
