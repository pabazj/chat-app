import React, {useEffect, useState} from 'react';
import { MdOutlineAttachFile } from 'react-icons/md';
import { BsFillSendFill } from 'react-icons/bs';
import useFileUpload from '../hooks/useFileUpload';

function UpdateChat({ handleSubmit, newMessage, handleInputChange, handleFileUpload, imageUrl}) {

  const handleChatSend = (event) => {
    event.preventDefault();
    handleSubmit(event);
  };

  return (
    <div className="msger-inputarea">
      <input
        type="text"
        className="msger-input"
        placeholder="Enter your message..."
        value={newMessage}
        onChange={handleInputChange}
      />
      <button
        onClick={handleChatSend}
        className="msger-send-btn">
        <BsFillSendFill />
      </button>

      <label className="msger-send-btn">
        <MdOutlineAttachFile />
        <input
          type="file"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        )}
      </label>

    </div>
  )
}

export default UpdateChat