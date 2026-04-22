import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Accordion.css';

export const AccordionContainer = ({ children, title }) => {
  return (
    <div className="qa-section">
      <div className="qa-header">
        <span>?</span>
        <h2>{title}</h2>
      </div>
      <div className="qa-body">
        {children}
      </div>
    </div>
  );
};

export const AccordionItem = ({ question, answer, type = 'MCQ' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="qa-item">
      <div className={`question ${type.toLowerCase()}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="q-text" dangerouslySetInnerHTML={{ __html: question }}></span>
        <span className="q-tag">{type}</span>
        <ChevronDown 
          className="toggle" 
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} 
        />
      </div>
      <div className={`answer ${isOpen ? 'open' : ''}`}>
        <div className="ans-label">{type === 'MCQ' ? 'ANSWER' : 'MODEL ANSWER'}</div>
        <div dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
    </div>
  );
};
