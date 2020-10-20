import React ,{useEffect,useState} from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar.js';
import Chat from './Chat/Chat';
import Pusher from 'pusher-js';
import axios from './axios'
function App() {
  const [messages,setMessages]=useState([]);
  useEffect(() => {
    // fetching all of the initial information
    axios.get('/messages/sync').then(res=>{
      console.log(res.data)
      setMessages(res.data);
    }).catch((err)=>{
      console.log("Error Occured",err)
    })
  }, [])
  useEffect(() => {
    var pusher = new Pusher('4b184b3cc2a5813fdd7c', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      // alert(JSON.stringify(data));
      setMessages([...messages,data])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  console.log(messages)
  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
