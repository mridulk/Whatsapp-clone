import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import ChatSend from './ChatSend';
import ChatRecieve from './ChatRecieve';
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React , {useState} from 'react';
import axios from '../axios'
import './Chat.css';
const Chat = ({messages}) => {
  const [msg,setMsg]=useState("");
  const onChange=(e)=>{
      setMsg(e.target.value);
  }
  const sendMessage=async(e)=>{
    e.preventDefault()
    await axios.post('/messages/new',{
      message:msg,
      name:"Mridul",
      timestamp:new Date(),
      receive:false
    })
    setMsg("");
  }
  return (
    <div className='chat'>
      <div className='chat__header'>
        <div>
          <Avatar src='https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'/>
        </div>

        <div className='chat__headerInfo'>
          <h3>Kashish</h3>
          <p>Last seen at...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        {messages.map((message)=>(
          <p className={`chat__message ${!message.receive&&"chat__receiver"}`}>
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}
              </span>
              </p>
        ))}
      
      </div>
      <div className="chat__footer">
        <IconButton>
        <InsertEmotionIcon/>
        </IconButton>
       
        <form>
          <input  value={msg} type="text" onChange={(e)=>onChange(e)} placeholder="Type a message"/>
          <button onClick={sendMessage} type="submit">Send a Message</button>
        </form>
        <IconButton>
        <MicIcon/>
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
