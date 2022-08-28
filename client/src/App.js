import React from 'react';
import {useAuth} from './auth/Auth';
import Navbar from './navbar/Navbar'
function App() {

  let auth = useAuth();

  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  );
}

export default App;
