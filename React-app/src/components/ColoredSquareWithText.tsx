import React from 'react';

interface ColoredSquareWithTextProps {
  color: string;
  opacity: number;
  text: string; 
  hasBlackCorner?: boolean;
}

const ColoredSquareWithText: React.FC<ColoredSquareWithTextProps> = ({ color, opacity, text, hasBlackCorner }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              position: 'relative',
              width: '15px',
              height: '15px',
              backgroundColor: color,
              opacity: opacity,
              marginRight: '8px',
              border: '0.5px solid black',
              borderRadius: '4px',
            }}
          >
            {hasBlackCorner && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '5px',
                  height: '5px',
                  backgroundColor: 'black',
                }}
              ></div>
            )}
          </div>
          <span>{text}</span>
        </div>
      );
    };

export default ColoredSquareWithText;