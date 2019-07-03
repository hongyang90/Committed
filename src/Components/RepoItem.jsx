import React from 'react';
import CommitItem from './CommitItem';

class RepoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: this.props.repo.name,
                    org: this.props.org,
                    commits: [],
                    clicked: false
        };
        this.showCommit = this.showCommit.bind(this);
    }

    showCommit() {
        fetch(`https://api.github.com/repos/${this.state.org}/${this.state.name}/commits`)
            .then(res => res.json())
            .then(res => {
                // console.log(Array.isArray(res))
                if (Array.isArray(res)) {
                    this.setState({ commits: res });
                } else {
                    this.setState({commits: []});
                }
                this.setState({clicked: !this.state.clicked})
            })
            .then(res => console.log(this.state.commits))
    }

    render () {
        let commits = this.state.commits.map( commit => {
            return <CommitItem key={commit.node_id} commit={commit.commit} />
        });

        return (
            <div className='repoItem'>
                <div className='repoInfo'>
                    <h1 onClick={this.showCommit} className='repoName'>
                        {this.state.name.toUpperCase()}
                    </h1>
                    <p className='forks'>
                        {this.props.repo.forks}
                    </p>
                </div>
                <div>
                    { this.state.clicked ? commits : <div></div> }
                </div>
            </div>

        )
    }
}

export default RepoItem;