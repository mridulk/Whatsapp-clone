import React from 'react'

const ChatRecieve = () => {
    return (
        <>
        <p className="chat__message chat__receiver">
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

export default ChatRecieve
