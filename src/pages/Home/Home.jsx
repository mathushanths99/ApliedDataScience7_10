import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Deep Learning (7COM1074)</h1>
        <p className="home-subtitle">University of Hertfordshire · Exam Revision Units 7–10</p>
        
        <div className="nav-cards">
          <Link to="/study-guide" className="nav-card study-variant">
            <div className="nav-icon">
              <BookOpen size={48} />
            </div>
            <h2>Complete Study Guide</h2>
            <p>Comprehensive notes covering neural networks fundamentals, CNNs, optimization, and Explainable AI (XAI).</p>
            <div className="nav-action">View Study Guide &rarr;</div>
          </Link>
          
          <Link to="/cheat-sheet" className="nav-card cheat-variant">
            <div className="nav-icon">
              <FileText size={48} />
            </div>
            <h2 className="font-condensed">Cheat Sheet</h2>
            <p>A quick-reference grid for exam day with core definitions, formulas, and common mistakes to avoid.</p>
            <div className="nav-action">View Cheat Sheet &rarr;</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
