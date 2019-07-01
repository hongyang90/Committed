import React from 'react';
import './App.css';
import Repos from './Components/Repos';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      repos: [],
      commits: []
    };
    this.updateInput = this.updateInput.bind(this);
  }

  handleSubmit(){

  }

  updateInput(){

  }


  render () {
    return (
      <div className="App">
        <h1>
          Committed App
        </h1>
        <div>
          <input type="text" onChange={this.updateInput} placeholder='Enter a organization ie: facebook'/>
          <button>Search</button>
        </div>
        <Repos />
      </div>
    );

  }
}

export default App;
