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
                    <h1>I am a Modal</h1>
                    {commits}
                </div>
            </div>
        )
    }
}

export default Modal;