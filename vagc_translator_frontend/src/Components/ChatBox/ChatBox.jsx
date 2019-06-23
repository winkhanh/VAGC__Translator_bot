import React from 'react';
import './ChatBox.css';

const DisplayMessages = (messages)=>
{
    return messages.map(
        (message) =>        
            (
                <div className={`${message.class}` }>
                    {message.text}
                </div>
            )
    )
}
const NothingToDisplay = () =>{
    return (
        <React.Fragment>
            <p> Start by entering a message</p>
        </React.Fragment>
    )
}
const ChatBox = (props) =>
{
    return(
        <div id='chat-box' className={'chat-box-component'}>
            {(props.messages.length===0)?NothingToDisplay():DisplayMessages(props.messages)}
        </div>
    );
}

export default ChatBox;
