import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Hero from './components/HeroSection/Hero';
import About from './components/AboutSection/About';
import Skills from './components/SkillsSection/Skills';
import Portfolio from './components/PortfolioSection/Portfolio';
import Footer from './components/FooterSection/Footer';


function App() {
  return (
    <div className="App">
     <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
