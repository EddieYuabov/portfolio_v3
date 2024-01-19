import './App.css';
import Nav from './components/Nav';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <div>
                <div className="slider-thumb-1"></div>
                <div className="slider-thumb-2"></div>
                <div className="slider-thumb-3"></div>
      </div>
      <Nav/>
      <LandingPage/>
    </div>
  );
}

export default App;
