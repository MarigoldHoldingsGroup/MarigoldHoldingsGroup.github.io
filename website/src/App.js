import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';
// import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import CustomNavbar from './components/CustomNavbar';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
