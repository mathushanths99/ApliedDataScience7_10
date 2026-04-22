import React from 'react';
import './Card.css';

const Card = ({ 
  unitNum, 
  title, 
  subtitle, 
  variant = 'study', 
  children 
}) => {
  const cn = `card-wrapper ${variant} u${unitNum}`;
  
  return (
    <div className={cn}>
      <div className="card-header">
        {variant === 'study' ? (
          <>
            <div className="unit-num">{unitNum < 10 ? `0${unitNum}` : unitNum}</div>
            <div>
              <h2>{title}</h2>
              {subtitle && <div className="subtitle">{subtitle}</div>}
            </div>
          </>
        ) : (
          <div>
            <div className="num">UNIT {unitNum < 10 ? `0${unitNum}` : unitNum}</div>
            {title}
          </div>
        )}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;
