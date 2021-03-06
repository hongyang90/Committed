import React from 'react';

class RepoItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: this.props.repo.name,
                    org: this.props.org,
             
        };
        // this.showCommit = this.showCommit.bind(this);
    }

    // showCommit() {
    //     fetch(`https://api.github.com/repos/${this.state.org}/${this.state.name}/commits`)
    //         .then(res => res.json())
    //         .then(res => {
    //             // console.log(Array.isArray(res))
    //             if (Array.isArray(res)) {
    //                 this.setState({ commits: res });
    //             } else {
    //                 this.setState({commits: []});
    //             }
    //             this.setState({clicked: !this.state.clicked});
    //         })
    //         .then(res => console.log(this.state.commits));
    // }

    render () {
        // let commits = this.state.commits.map( commit => {
        //     return <CommitItem key={commit.node_id} commit={commit.commit} />
        // });

        return (
            <div className='repoItem'>
                <div className='repoInfo' >
                    <div className='repoheader'>
                        <h1 className='repoName'>
                        Repo Name: {this.state.name.toUpperCase()}
                        </h1>

                        <button className='commitbutton' 
                        onClick={this.props.handleModal.bind(this, this.state.name)}>See Commits</button>
                    </div>
                    <p className='description'>
                        Description: {this.props.repo.description}
                    </p>
                    <div className='repoStats'>
                        <p >
                            <i className="fa fa-share-alt"></i>
                            Forks: {this.props.repo.forks}
                        </p>
                        <p>
                            <i className="fa fa-eye"></i>
                            Watchers: {this.props.repo.watchers}
                        </p>
                        <p>
                            <i className="fa fa-pen-square"></i>
                            Language: {this.props.repo.language}
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}

export default RepoItem;