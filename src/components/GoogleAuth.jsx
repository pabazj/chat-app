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
    
    <div className="loginPage">
      <p>Sign in with Google</p>
      <button className="login-with-google-btn" onClick={handleSignIn}>
        Google
      </button>
    </div>
  );
};

export default GoogleAuth;



