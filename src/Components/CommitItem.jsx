import React from 'react';

class CommitItem extends React.Component {


    render() {
        return (
            <div>
                {this.props.commit.message}
            </div>
        )
    }
}

export default CommitItem;