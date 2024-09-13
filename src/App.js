import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Newsapp from './Components/Newsapp';
import AllNews from './Components/AllNews';  // Import the AllNews component
import Trending from './Components/Trending'; // Import the Trending component
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Newsapp />} />
        <Route path="/all-news" element={<AllNews />} />
        <Route path="/trending" element={<Trending />} />
        
      </Routes>
    </Router>
  );
}

export default App;
