import React from 'react';

class CommitItem extends React.Component {


    render() {
        return (
            <div className='commitItem'> 
                {this.props.commit.commit.message}
            </div>
        )
    }
}

export default CommitItem;