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
      repoName: '',
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModal = this.handleModal.bind(this);

    window.addEventListener("click", this.windowOnClick.bind(this));
  }

  handleSubmit(e){
    // console.log(this.state.org)
    e.preventDefault();
    let location = this.state.org.trim();
    fetch(`https://api.github.com/orgs/${location}/repos`)
      .then(res => res.json())
      .then(res => {
        if (Array.isArray(res)) {
            this.setState({ repos: res.sort((a, b) => b.forks - a.forks) });
          }
      });
      // .then(() => console.log(this.state.repos))
      
  }

  updateInput(e){
    this.setState({org: e.currentTarget.value});
  }


  windowOnClick (e) {
    let modal = document.querySelector('.modal');

    if (e.target === modal) {
      this.toggleModal();
    }
  }

  toggleModal(){
    let modal = document.querySelector('.modal');
    modal.classList.toggle('show-modal');
  }

  handleModal(name) {
    console.log(name)
    // debugger
    fetch(`https://api.github.com/repos/${this.state.org}/${name}/commits`)
      .then(res => res.json())
      .then(res => {
        // console.log(Array.isArray(res))
        if (Array.isArray(res)) {
          this.setState({ commits: res });
          this.setState({repoName: name});
        } else {
          this.setState({ commits: [] });
        }
      })
      .then(res => console.log(this.state.commits));
      this.toggleModal();
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
          <Modal name={this.state.repoName} closeModal={this.toggleModal} commits={this.state.commits} clicked={this.state.clicked}/>
      </div>
    );

  }
}

export default App;
