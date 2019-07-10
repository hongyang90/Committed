import React from 'react';
import CommitItem from './CommitItem';

class Modal extends React.Component {


    render () {
        let commits = this.props.commits.map( ele => {
            return <CommitItem commit={ele}/>
        });

   
        return (
            <div id='modal'>
                <div className='modalcontent'>
                    {commits}
                </div>
            </div>
        )
    }
}

export default Modal;