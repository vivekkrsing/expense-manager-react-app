import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import SignIn from './Components/signIn';
import './App.css';
import Routing from './Components/routing';


const App: React.FC = () => {
  

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="App">
        
     <Routing />
        
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
