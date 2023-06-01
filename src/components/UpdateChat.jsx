import React from 'react';
import { MdOutlineAttachFile } from 'react-icons/md';
import { BsFillSendFill } from 'react-icons/bs';

function UpdateChat({ handleSubmit, newMessage, handleInputChange, handleFileUpload}) {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);
    event.target.reset();
  };

  return (
    <form className="msger-inputarea" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="msger-input"
        placeholder="Enter your message..."
        value={newMessage}
        onChange={handleInputChange}
      />
      <button
        type="submit"
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
      </label>

    </form>
  )
}

export default UpdateChat