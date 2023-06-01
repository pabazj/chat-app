# Simple Chat application with React, Firebase and ReactFire

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

NodeJS - https://nodejs.org/en/download/

## Installation

git clone https://github.com/pabazj/chat-app
cd chat-app
npm i
npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Used ReactFire Providers

### AuthProvider: 
This provider is responsible for providing the Firebase Authentication service to the application. It takes a sdk prop that should be set to the auth SDK instance obtained from getAuth(app). By wrapping components with AuthProvider, can access the authentication service using the useAuth hook provided by reactfire.

### FirestoreProvider: 
This provider is used to provide the Firestore database service to the application. It takes a sdk prop that should be set to the firestoreInstance obtained from getFirestore(useFirebaseApp()). By wrapping components with FirestoreProvider, can access the Firestore database using hooks like useFirestore and useFirestoreCollectionData provided by reactfire.

### StorageProvider: 
This provider is used to provide the Firebase Storage service to the application. It takes a sdk prop that should be set to the storage SDK instance obtained from getStorage(app). By wrapping the components with StorageProvider, can access the Firebase Storage service using the useStorage hook provided by reactfire.

This ensures that the ChatApp component can make use of these services and interact with Firebase services as needed.

## Main Features

- Sign in with Google Authentication: 
Users can sign in to the chat app using their Google accounts. This feature leverages Google's authentication service to provide a secure and convenient sign-in process for users.

- Real-time Chat: 
The chat app allows users to engage in real-time conversations. Messages sent by users are instantly displayed to all participants in the chat. This real-time functionality enables seamless and interactive communication between users.

- Upload Files: 
Users have the ability to upload files within the chat app. This feature allows users to share documents, images, or any other file type with other participants in the chat. The uploaded files are stored securely and can be accessed and downloaded by the recipients.

- Delete Messages: 
Users can delete their own messages within the chat app. This feature provides control and flexibility to users by allowing them to remove messages they no longer want to be visible in the chat. Deleting messages helps in managing the chat history and maintaining the desired conversation flow.
