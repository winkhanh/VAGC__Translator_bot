import React, {useState} from 'react';
import './App.css';
import ChatBox from './Components/ChatBox/ChatBox';
import InputField from './Components/InputField/InputField';
import Translate from './Components/TranslatorApi/Translator';
let intiMessages = [
];


function App() {

  const [listOfMessages,setMessages]=useState(intiMessages);
  const [isLoading,setLoading]=useState(false);
  const addMessage = (message) =>
  { 
    setMessages(prev =>
      {
        return ([...prev,message])
      })
    
  }
  const receiver = (messages) =>{
    setLoading(false);
    addMessage({'class':'bot','text':messages});
  }
  return (
    <div className="App">
      <ChatBox messages={listOfMessages}/>
      <InputField onClickHandle={(message)=>{
        if (message!=='' && isLoading === false)
        {
          setLoading(true);
          addMessage({'class':'me','text':message});
          Translate(message, receiver);
        }}}/>
    </div>
  );
}

export default App;
