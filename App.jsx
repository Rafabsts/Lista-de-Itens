import React, { useState } from 'react';
import './App.css';

function App() {
  const [itens, setItens] = useState([]);
  const [inputValue, setInputValue] = useState(''); 

  const handleAddIten = () => {
    if (inputValue.trim() !== '') {
      
      setItens([...itens, inputValue]); 
      setInputValue(''); 
    }
  };

  return (
    <div className="App">
      <h1>Lista de Itens</h1>
      <input
        type="text"
        placeholder="Adicione um novo item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Adicionar</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

