import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Skills from './components/Skill';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import IntroductionPage from './components/IntroductionPage';
import Gap from './components/Gap';
function App() {
  return (
   <div>
    <Navbar/>
    
    <IntroductionPage/>
    <Skills/>
    <Achievements/>
    <Projects/>
    <Contact/>  

   </div>
  );
}

export default App;
