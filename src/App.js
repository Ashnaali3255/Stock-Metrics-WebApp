import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomepageList from './Components/Homepage/HomepageList';
import Detailspage from './Components/Detailspage';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomepageList />} />
        <Route path="/details/:smbl" element={<Detailspage />} />
      </Routes>
    </Router>

  );
}

export default App;
