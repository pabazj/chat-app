import { useAuth } from 'reactfire';

const LogoutButton = () => {
  const auth = useAuth();

  const handleSignOut = async () => {
    await auth.signOut();
  };

  return (
    <div>
      <button className='logout' onClick={handleSignOut}>Logout</button>
    </div>
  );
};

export default LogoutButton;
