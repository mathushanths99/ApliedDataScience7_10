import React from 'react';
import './ConceptCard.css';

export const ConceptGrid = ({ children }) => {
  return <div className="concept-grid">{children}</div>;
};

export const ConceptCard = ({ title, content, unitNum }) => {
  return (
    <div className={`concept-card u${unitNum}`}>
      <div className="card-title">{title}</div>
      <p>{content}</p>
    </div>
  );
};
