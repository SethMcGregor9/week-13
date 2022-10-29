import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';





function App() {

  

  return (
    <Router>
      <nav className='nav'>
      <Link className='page' to="/home"> Home</Link>
      <Link className='page' to="/about"> About</Link>
      <Link className='page' to="/profile"> Profile</Link>
      </nav>
    
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="*" element={<ErrorPage />} />
    </Routes>
    </Router>



  );
}

export default App;