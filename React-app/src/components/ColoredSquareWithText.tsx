import React from 'react';

interface ColoredSquareWithTextProps {
  color: string;
  opacity: number;
  text: string; 
}

const ColoredSquareWithText: React.FC<ColoredSquareWithTextProps> = ({ color, opacity, text }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          width: '15px', 
          height: '15px', 
          backgroundColor: color,
          opacity: opacity,
          marginRight: '8px'
        }}
      />
      <span>{text}</span>
    </div>
  );
};

export default ColoredSquareWithText;