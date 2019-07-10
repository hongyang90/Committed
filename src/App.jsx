import React from 'react';
import './styles/App.scss';
import Repos from './Components/Repos';
import Modal from './Components/Modal';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      org: '',
      repos: [],
      commits: [],
      clicked: false
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleSubmit(e){
    // console.log(this.state.org)
    e.preventDefault();
    let location = this.state.org.trim();
    fetch(`https://api.github.com/orgs/${location}/repos`)
      .then(res => res.json())
      .then(res => {
        if (Array.isArray(res)) {
            this.setState({ repos: res.sort((a, b) => b.forks - a.forks) })
          }
      });
      // .then(res => this.setState({repos: res}))
      // .then(() => console.log(this.state.repos))
      
  }

  updateInput(e){
    this.setState({org: e.currentTarget.value});
  }

  // handleModal(idx) {
  //   // let repo = this.state.repos.filter(ele => ele.id === idx);
  //   // this.setState({commits: repo.commits})
  // }

  handleModal(name) {
    console.log(name)
    // let repo = this.state.repos.filter(ele => ele.id === idx);
    debugger
    fetch(`https://api.github.com/repos/${this.state.org}/${name}/commits`)
      .then(res => res.json())
      .then(res => {
        // console.log(Array.isArray(res))
        if (Array.isArray(res)) {
          this.setState({ commits: res });
        } else {
          this.setState({ commits: [] });
        }
        this.setState({ clicked: !this.state.clicked });
      })
      .then(res => console.log(this.state.commits));
  }


  render () {
    // console.log(this.state.repos);
    return (

      <div className="App">
        <div className='header'>
          <h1>
            Committed!
          </h1>
          <h2>
            Search organization repos and their commits
          </h2>
          <form action="" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.updateInput} placeholder='Enter a organization ie: facebook'/>
            <button type='submit' >Search</button>
          </form>
        </div>
          <Repos org={this.state.org} repos={this.state.repos} handleModal={this.handleModal} />
          <Modal commits={this.state.commits} clicked={this.state.clicked}/>
      </div>
    );

  }
}

export default App;
