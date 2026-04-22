import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Header.css';

const Header = ({ 
  title, 
  subtitle, 
  badge, 
  metaElements, 
  variant = 'study',
  showBackButton = true
}) => {
  return (
    <header className={`app-header ${variant}`}>
      <div className="header-content">
        {showBackButton && (
          <Link to="/" className="back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        )}
        
        <div className="header-main">
          <div className="header-text">
            {badge && <div className="badge">{badge}</div>}
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
            {subtitle && <p className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }}></p>}
          </div>
          
          {metaElements && (
            <div className="meta">
              {metaElements.map((meta, index) => (
                <React.Fragment key={index}>
                  {meta.label}: <span>{meta.value}</span><br />
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
