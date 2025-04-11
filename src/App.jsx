import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PageLoader from "./components/PageLoader";

function App() {
  return (
    <div className="m-0">
      {/* <PageLoader /> */}
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
