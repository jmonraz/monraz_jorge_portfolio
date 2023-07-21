import './App.css';

// components
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Divider from './components/Divider/Divider';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <NavBar>JM</NavBar>
      
      <Hero id="home" />
      <Divider/>
      <About id="about" />
      <Divider />
      <Experience id="experience"/>
      <Divider />
      <Projects id="projects" />
      <Divider />
      <Contact id="contact" />
    </div>
  );
};

export default App;