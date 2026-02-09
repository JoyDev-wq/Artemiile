import './App.css';
import HeroSection from './components/Herosection/HeroSection';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
function App() {
  

  return (
    <div className='app'>
      <Navbar/>
      <HeroSection/>
      <Projects/>
      <Music/>
    </div>
  )
}

export default App
