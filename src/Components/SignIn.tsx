import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';


const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8888/users', {
        params: { username, password },
      });

      const user = response.data.find(
        (user: { username: string; password: string }) =>
          user.username === username && user.password === password
      );

      if (user) {
        alert('Sign-in successful');
        navigate('/maindashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during sign-in');
    }
  };

  const handleGoogleSignIn = (credentialResponse: any) => {
    console.log(credentialResponse);
    navigate('/maindashboard');
  };

  return (
    // <div className='login'>
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
      <div className="oauth-sign-in">
        <h3>Or</h3>
        <GoogleLogin
          onSuccess={handleGoogleSignIn}
          onError={() => setError('Google sign-in error')}
        />
      </div>
    </div>
    // </div>
  );
};

export default SignIn;
