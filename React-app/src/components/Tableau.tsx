import React, { useState } from 'react';

interface TableauProps {
  n: number;
  m: number;
}

const Tableau: React.FC<TableauProps> = ({ n, m }) => {
  const [cases, setCases] = useState<boolean[][]>(Array(n).fill(Array(m).fill(false)));

  const handleClick = (i: number, j: number) => {
    const newCases = [...cases];
    newCases[i] = [...newCases[i]];
    newCases[i][j] = !newCases[i][j];
    
    setCases(newCases);
  };

  const gridTemplateColumns = `100px repeat(${m - 1}, 32px)`; 

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns, gap: '0px' }}>
        {cases.map((row, i) => 
          row.map((cell, j) => {
            let backgroundColor = cell ? 'green' : 'white';
            if (i === 0 || j === 0) {
              backgroundColor = cell ? 'lightblue' : 'lightgray';
            }

            return (
              <div
                key={`${i}-${j}`}
                onClick={() => handleClick(i, j)}
                style={{
                  width: j === 0 ? '100px' : '32px',
                  height: '32px',
                  backgroundColor: backgroundColor, 
                  border: '1px solid black',
                  cursor: 'pointer'
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Tableau;