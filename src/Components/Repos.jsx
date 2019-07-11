import React from 'react';
import RepoItem from './RepoItem';

class Repos extends React.Component {
  

    render (){
        let repos = this.props.repos.map(repo =>{
            return <RepoItem key={repo.id} repo={repo} org={this.props.org} 
            handleModal={this.props.handleModal}/>
        });

        let empty = <div className='empty'>No Results</div>

        return (
            <div className='results'>
                {!this.props.repos.length ? empty : repos }
                
            </div>
        )
    }
}

export default Repos;