import React from 'react';
import PokedexHeader from './Components/PokedexHeader';
import './App.css';

function App() {
  return (
    <div className="App">
      <PokedexHeader author={"@victor.verza"} name={"Greg"} />
    </div>
  );
}

export default App;