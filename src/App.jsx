import { useEffect } from "react";
import "./App.css";
import Exhibition from "./components/Exhibitions/Exhibition";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Herosection/HeroSection";
import Services from "./components/keyservices/Services";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";


function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".app"),
      smooth: true,
      lerp: 0.03,
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div className="app" data-scroll-container>
      <Navbar  />
      <HeroSection  />
      <Projects  />
      <Music  />
      <Services  />
      <Exhibition  />
      <Footer />
    </div>
  );
}

export default App;
