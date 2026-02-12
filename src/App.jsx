import "./App.css";
import Exhibition from "./components/Exhibitions/Exhibition";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Herosection/HeroSection";
import Services from "./components/keyservices/Services";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
// import { SmoothScrollProvider } from "./context/SmoothScrollContext";

function App() {
  return (
    <div className="app">
        <Navbar />
        <HeroSection />
        <Projects />
        <Music />
        <Services/>
        <Exhibition/>
        <Footer/>
    </div>
  );
}

export default App;
