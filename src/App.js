import './App.css';

// components
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import SmallDivider from './components/SmallDivider/SmallDivider';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className='app-container'>
      <NavBar>JM</NavBar>
        <SmallDivider id="home" />
        <Hero />
      
      <div className='content-container'> 
        <SmallDivider id="about" />
        <About />
      </div>
      <div className='content-container'>
        <SmallDivider id="experience" />
        <Experience />
      </div>
      <div className='content-container'>
        <SmallDivider id="projects" />
        <Projects />
      </div>
      <div className='content-container'>
        <SmallDivider id="contact" />
        <Contact id="contact" />
      </div>
    </div>
  );
};

export default App;