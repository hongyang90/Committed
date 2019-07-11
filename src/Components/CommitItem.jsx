import React from 'react';

class CommitItem extends React.Component {


    render() {
        let message = this.props.commit.commit.message;
        let author = this.props.commit.commit.committer.name;
        let date = this.props.commit.commit.committer.date.split('T')[0];
        return (
            <div className='commitItem'>
                <div className='leftInfo'>
                    <span>Committer: {author}</span>
                    <span>Date: {date}</span> 
                </div>
                <div className='rightInfo'>
                    Message: {message}
                </div>
            </div>
        )
    }
}

export default CommitItem;