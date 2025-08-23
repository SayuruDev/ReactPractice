import './App.css';
import React, { useState } from 'react';

function App() {
  //var count = 0;
  const [count, setCount] = useState(0); 
  

  function handleAdd(){
    setCount(count+1);
    console.log(count);
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className='add'>ADD</button>
        <button className='sub'>SUB</button>
      </div>
    </div>
  );
}

export default App;
