import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import PageLoader from "./components/PageLoader";

function App() {
  return (
    <div className="m-0">
      {/* <PageLoader /> */}
      <Header />
      <Hero />
    </div>
  );
}

export default App;
