import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PageLoader from "./components/PageLoader";

function App() {
  return (
    <div className="relative">
      {/* <PageLoader /> */}
      <Header />

      <div className="px-8">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
