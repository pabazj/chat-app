import React from 'react'
import { MdOutlineDeleteForever } from 'react-icons/md';

function ViewChat({ message, user, deleteMessage }) {

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      };

    return (
        <>
            <div
                className="msg-img"
                style={{ backgroundImage: `url(${message.avatar})` }}
            ></div>

            <div className="msg-bubble" >
                <div className="msg-info">
                    <div className="msg-info-name">{user?.data?.displayName === message.name ? 'You': message.name}</div>
                    <div className="msg-info-delete"> 
                    {user?.data?.uid === message.uid && (
                    <div className='delete-icon'>
                        <MdOutlineDeleteForever onClick={() => deleteMessage(message.NO_ID_FIELD
                        )} />
                    </div>
                )}
                    </div>
                </div>

                <div className="msg-text">
                    {message.text}
                </div>
                {message?.media && <div  className="msg-media-wrapper">
                    <img 
                    className="msg-media" 
                    src={message.media} />
                </div>}
                
                <div>
                    <div className="msg-info-time"> {formatTime(new Date(message.timestamp))}</div>
                </div>
            </div>
        </>
    )
}

export default ViewChat