import React from 'react';

class RepoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: this.props.repo.name,
                    org: this.props.org,
                    commits: []
        };
        this.showCommit = this.showCommit.bind(this);
    }

    showCommit() {
        fetch(`https://api.github.com/repos/${this.state.org}/${this.state.name}/commits`)
            .then(res => res.json())
            .then(res => this.setState({ commits: res }))
            .then(res => console.log(this.state.commits))
    }

    render () {
        let commits;
        return (
            <div>
                <h1 onClick={this.showCommit}>
                    {this.state.name}
                </h1>
                <div>
                    {/* {this.state.commits} */}
                </div>
            </div>

        )
    }

}

export default RepoItem;