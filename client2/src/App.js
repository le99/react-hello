import React from 'react';
import {useAuth} from './auth/Auth';

function App() {

  let auth = useAuth();

  return (
    <div className="App">
      <button onClick={() => {auth.signout()}}>sign out</button>
    </div>
  );
}

export default App;
