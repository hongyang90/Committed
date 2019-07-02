import React from 'react';
import RepoItem from './RepoItem';

class Repos extends React.Component {
  

    render (){
        let repos = this.props.repos.map(repo =>{
            return <RepoItem key={repo.id} repo={repo}/>
        });
        return (
            <div>
                {repos}
            </div>
        )
    }
}

export default Repos;