import React, { useState, useEffect } from 'react';
import {
  useFirestoreCollectionData,
  useFirestore,
  useUser,
} from 'reactfire';
import {
  collection,
  addDoc,
  query,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import UpdateChat from './UpdateChat';
import ViewChat from './ViewChat';
import useFileUpload from '../hooks/useFileUpload';
import Header from './Header'

const ChatApp = () => {

  const [newMessage, setNewMessage] = useState('');
  const [fileUpload, setFileUpload] = useState(null);

  const firestore = useFirestore();
  const user = useUser();

  const messagesRef = collection(firestore, 'messages');
  const queryRef = query(messagesRef, orderBy('timestamp'));
  const { data: messages } = useFirestoreCollectionData(queryRef);

  const { imageUrl } = useFileUpload(fileUpload)

  useEffect(() => {
   
    const chatContainer = document.getElementById('chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage.trim() !== '' || fileUpload) {

      await addDoc(messagesRef, {
        id: uuidv4(),
        text: fileUpload ? '' : newMessage,
        timestamp: new Date().getTime(),
        name: user?.data?.displayName,
        uid: user?.data?.uid,
        avatar: user?.data?.photoURL,
        media: !fileUpload ? null : imageUrl
      });

      setNewMessage('');
      setFileUpload(null)

    }
  };

  const deleteMessage = async (messageId) => {
    try {
      const messageRef = doc(firestore, "messages", messageId);
      await deleteDoc(messageRef);
      console.log('Document deleted successfully');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const handleFileUpload = (e) => {
    let imageData = e.target.files[0]

    setFileUpload(imageData)
    setNewMessage(imageData.name)
  }

  return (
    <section className="chat-container msger" id="chat-container">

      <Header user={user} />

      {user?.data && (
        <div >
          <main className="msger-chat">
            {messages &&
              messages.map((message) => (
                <div key={message.id} className={user?.data?.uid === message.uid ? "msg right-msg" : "msg left-msg"}>
                  <ViewChat
                    message={message}
                    user={user}
                    deleteMessage={deleteMessage}
                  />

                </div>
              ))}
          </main>
          <UpdateChat
            handleSubmit={handleSubmit}
            newMessage={newMessage}
            handleInputChange={handleInputChange}
            handleFileUpload={handleFileUpload}
          />

        </div>
      )}
    </section>

  );
};

export default ChatApp;


