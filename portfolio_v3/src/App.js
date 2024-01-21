import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Nav/>
      <LandingPage/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
