import React from 'react';
import CommitItem from './CommitItem';

class Modal extends React.Component {


    render () {
        let commits = this.props.commits.map( ele => {
            return <CommitItem key={ele.node_id} commit={ele}/>
        });

   
        return (
            <div className='modal'>
                <div className='modalcontent'>
                    <span className="close-button" onClick={this.props.closeModal}>&times;</span>
                    <h1 className='modalHeader'>Recent Commmits for {this.props.name.toUpperCase()}</h1>
                    {commits}
                </div>
            </div>
        )
    }
}

export default Modal;