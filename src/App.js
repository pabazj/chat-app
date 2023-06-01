import { getFirestore } from 'firebase/firestore';
import { FirestoreProvider, useFirebaseApp, AuthProvider, StorageProvider } from 'reactfire';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import ChatApp from './components/Chat';
import './App.css';

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  const app = useFirebaseApp();
  const auth = getAuth(app);
  const storage = getStorage(app);
  
  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestoreInstance}>
        <StorageProvider sdk={storage}>
          <ChatApp />
        </StorageProvider>
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default App;


