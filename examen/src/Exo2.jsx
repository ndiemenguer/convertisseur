import React, { useState , useEffect} from 'react';

function Ndieme() {
 
  const [count, setCount] = useState(0);


  useEffect(() => {
    
    document.title = `Vous avez cliqué ${count} fois`;
  });
  return (
    <div>
      <h1>Vous avez cliqué {count} fois</h1>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

export default Ndieme;