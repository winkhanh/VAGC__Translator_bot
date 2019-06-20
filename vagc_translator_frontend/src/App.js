import React, {useState} from 'react';
import './App.css';
import ChatBox from './Components/ChatBox/ChatBox';
import InputField from './Components/InputField/InputField';
let realLoading=false;
let intiMessages = [
  {'class':'me','text':'Hello World'},
  {'class':'bot','text':'The World says hello!!!'}
];
const getFetch = (setter,setter2) =>
{
  fetch('http://localhost:4000')
  .then(result=>{return result.json()
  }).then(data=>{
    console.log(data);
    realLoading=false;
    setter({'class':'bot','text':data.message});
    setter2(false);
    
  })
  .catch(err=>
    {
      console.error(err);
    });  
}
const postFetch = (data) =>
{
  fetch('http://localhost:4000',{
    method:'POST',
    headers:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body:  JSON.stringify(data)
  }).then(result=>{return result.json();})
  .then(console.log)
  .catch(err=>{console.error(err);})
}
const replyMessage = (message,setter,setter2) =>{
  realLoading=!realLoading;
  setter2(realLoading);
  getFetch(setter,setter2);
}
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
  return (
    <div className="App">
      <ChatBox messages={listOfMessages}/>
      <InputField onClickHandle={(message)=>{
        if (message!=='')
        {
          postFetch({'class':'me','text':message});
          addMessage({'class':'me','text':message});
          replyMessage(message,addMessage,setLoading);
        }}} ifLoading={isLoading}/>
    </div>
  );
}

export default App;
