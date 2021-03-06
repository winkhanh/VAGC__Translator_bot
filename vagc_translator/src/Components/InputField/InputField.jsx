import React, {useState} from 'react';
import './InputField.css';

const InputField = (props) =>{
    const [message,setMessage]=useState('');
    const onChangleHandle = (e)=>
    {
        setMessage(e.target.value);
    }
    return(
        <div className="input-filed-component">
            <input id='input-box' type='text' onChange={onChangleHandle} value={message}></input>
            <button onClick={()=>{
                props.onClickHandle(message);
                setMessage('');
                }}>Send</button>
        </div>
    )
}

export default InputField;