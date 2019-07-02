import React from 'react';
import './App.css';
import Repos from './Components/Repos';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      org: '',
      repos: []
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    // console.log(this.state.org)
    e.preventDefault();
    let location = this.state.org.trim();
    fetch(`https://api.github.com/orgs/${location}/repos`)
      .then(res => res.json())
      .then(res => this.setState({repos: res.sort((a,b)=> b.forks - a.forks)}))
      // .then(res => this.setState({repos: res}))
      // .then(() => console.log(this.state.repos))
      
  }

  updateInput(e){
    this.setState({org: e.currentTarget.value});
  }


  render () {
    // console.log(this.state.repos)
    return (

      <div className="App">
        <h1>
          Committed App
        </h1>
        <div>
          <form action="" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.updateInput} placeholder='Enter a organization ie: facebook'/>
            <button type='submit' >Search</button>
          </form>
        </div>
        <Repos org={this.state.org} repos={this.state.repos}/>
      </div>
    );

  }
}

export default App;
