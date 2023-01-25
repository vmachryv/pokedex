import React from 'react';
import PokedexHeader from './Components/PokedexHeader';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "Gregory"
    }
  }
  
  render() {
    return (
      <div className="App">
        <PokedexHeader author={"@victor.verza"} name={this.state.name} />
      </div>
    );
  }
}

export default App;