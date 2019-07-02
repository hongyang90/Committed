import React from 'react';

class RepoItem extends React.Component {

    render () {

        return (
            <div>
                {this.props.repo.name}
            </div>

        )
    }

}

export default RepoItem;