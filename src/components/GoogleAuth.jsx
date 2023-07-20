import { useFirebaseApp } from 'reactfire';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const GoogleAuth = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignIn = async () => {
    await signInWithPopup(auth, provider);
  };

  return (

    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Where every word brings magic to your fingertips</span>
        <button className="login-with-google-btn" onClick={handleSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default GoogleAuth;



