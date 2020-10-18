import React from 'react'

const ChatSend = () => {
    return (
        <>
        <p className="chat__message">
              <span className="chat__name">Sonny</span>
              This is a message
              <span className="chat__timestamp">{
              new Date().toUTCString()
              }
              </span>
              </p>
        </>
    )
}

export default ChatSend
