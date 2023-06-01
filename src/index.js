import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebase/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </FirebaseAppProvider>
);

reportWebVitals();
