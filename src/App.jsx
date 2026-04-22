import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home/Home';
import CheatSheet from './pages/CheatSheet/CheatSheet';
import StudyGuide from './pages/StudyGuide/StudyGuide';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cheat-sheet" element={<CheatSheet />} />
        <Route path="/study-guide" element={<StudyGuide />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
