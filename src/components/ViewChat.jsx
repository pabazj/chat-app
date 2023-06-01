import React from 'react'
import { MdOutlineDeleteForever } from 'react-icons/md';

function ViewChat({ message, user, deleteMessage }) {

    return (
        <>
            <div
                className="msg-img"
                style={{ backgroundImage: `url(${message.avatar})` }}
            ></div>

            <div className="msg-bubble" >
                <div className="msg-info">
                    <div className="msg-info-name">{message.name}</div>
                    <div className="msg-info-time"> {new Date(message.timestamp).toLocaleTimeString()}</div>
                </div>

                <div className="msg-text">
                    {message.text}
                </div>
                {message?.media && <div >
                    <img className="msg-media" src={message.media} />
                </div>}
                {user?.data?.uid === message.uid && (
                    <div className='delete-icon'>
                        <MdOutlineDeleteForever onClick={() => deleteMessage(message.NO_ID_FIELD
                        )} />
                    </div>
                )}
            </div>
        </>
    )
}

export default ViewChat