import React from 'react';

interface ColoredSquareWithTextProps {
  color: string;  
  opacity: number;
  text: string;  
}

const ColoredSquareWithText: React.FC<ColoredSquareWithTextProps> = ({ color, opacity, text }) => {
    const colorWithOpacity = `${color}${opacity !== undefined ? `${opacity}` : ''}`;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          width: '15px',   
          height: '15px', 
          backgroundColor: colorWithOpacity,  
          marginRight: '8px'
        }}
      />
      <span>{text}</span>
    </div>
  );
};

export default ColoredSquareWithText;