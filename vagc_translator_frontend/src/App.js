import React, {useState} from 'react';
import './App.css';
import ChatBox from './Components/ChatBox/ChatBox';
import InputField from './Components/InputField/InputField';
let intiMessages = [
  {'class':'me','text':'Hello World'},
  {'class':'bot','text':'The World says hello!!!'}
];
const processMessage = (message) =>{
  return `Don't know what to reply`;
}
const replyMessage = (message,setter) =>{
  const repliedMessage= processMessage(message);
  setter({'class':'bot','text':repliedMessage});
}
function App() {
  const [listOfMessages,setMessages]=useState(intiMessages);
  const addMessage = (message) =>
  {
    setMessages(prev =>
      {
        return ([...prev,message])
      })
    
  }
  return (
    <div className="App">
      <ChatBox messages={listOfMessages}/>
      <InputField onClickHandle={(message)=>{
        if (message!=='')
        {
          addMessage({'class':'me','text':message});
          replyMessage(message,addMessage);
        }}}/>
    </div>
  );
}

export default App;
