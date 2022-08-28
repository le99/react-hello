import React from 'react';
import {useAuth} from './auth/Auth';
import Navbar from './navbar/Navbar'
function App() {

  let auth = useAuth();

  return (
    <React.Fragment>
      <Navbar />
      <button onClick={() => {auth.signout()}}>sign out</button>
    </React.Fragment>
  );
}

export default App;
