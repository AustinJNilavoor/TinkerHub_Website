import './App.css';
import NavBar from './Navbar';
import Home from './Home';
import About from './About';
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Events from './Events';
import Contact from './Contact';
import Footer from './footer';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <Home />
      <About/>
      <Events/>
      <Contact/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
