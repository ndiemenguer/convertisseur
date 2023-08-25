import React, { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState('');

  const handleNumberClick = (number) => {
    if (code.length < 4) {
      setCode(prevCode => prevCode + number.toString());
    }
  };

  const checkCode = () => {
    if (code === '4982') {
      alert('Code correct !');
    } else {
      alert('Code incorrect !');
      setCode('');
    }
  };

  return (
    <div className="app">
      <div className="lockscreen">
        <h2>Verrouillage Telephone</h2>
        <div className="keypad">
          {/* Afficher les chiffres de 0 à 9 */}
          {Array.from(Array(10).keys()).map(number => (
            <button key={number} onClick={() => handleNumberClick(number)}>{number}</button>
            ))}
            </div>
            <p>resultats: {code}</p>
            {code.length === 4 && (
              <button onClick={checkCode}>Valider</button>
            )}
          </div>
        </div>
      );
    }
    
    export default App;
