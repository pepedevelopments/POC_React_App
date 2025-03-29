import React, { useState } from 'react';

interface TableauProps {
  n: number;
  m: number;
}

const Tableau: React.FC<TableauProps> = ({ n, m }) => {
  const noms = ["Marie Dubois", "Thomas Lefevre", "Sofia Almeida", "Julien Robert", "Sophie Bernard", "Laila Haddad", "Claire Martin", "Lisa Lambert", "Élise Fontaine", "Francine Roberta", 
                "Aïcha Benkacem", "Camille Morel", "Demba Ndiaye", "Léa Garnier", "Alice Durand"];

  const initializeCases = () => {
    const initialCases = Array.from({ length: n }, () => Array(m).fill(false));

    initialCases[0] = [true, ...Array(m - 1).fill(0).map((_, index) => index + 1)];

    for (let i = 1; i < n; i++) {
      if (i - 1 < noms.length) {
        initialCases[i][0] = noms[i - 1];
      } else {
        initialCases[i][0] = "";
      }
    }

    return initialCases;
  };

  const [cases, setCases] = useState<boolean[][]>(initializeCases);

  const handleClick = (i: number, j: number) => {
    const newCases = [...cases];
    newCases[i] = [...newCases[i]];
    newCases[i][j] = !newCases[i][j];
    setCases(newCases);
  };

  const gridTemplateColumns = `122px repeat(${m - 1}, 28px)`; 

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns, gap: '0px' }}>
        {cases.map((row, i) => 
          row.map((cell, j) => {
            let backgroundColor = cell ? 'green' : 'white';
            if (i === 0 || j === 0) {
              backgroundColor = cell ?' #e0e1dd' : 'lightgray';
            }

            return (
              <div
                key={`${i}-${j}`}
                onClick={() => handleClick(i, j)}
                style={{
                  width: j === 0 ? '122px' : '28px',  
                  height: '28px',  
                  backgroundColor: backgroundColor, 
                  border: '1px solid black', 
                  cursor: 'pointer',
                  display: 'flex',             
                  justifyContent: 'center',    
                  alignItems: 'center',        
                  textAlign: 'center',
                }}
              >
                {i === 0 || j === 0 ? cell : null} 
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Tableau;