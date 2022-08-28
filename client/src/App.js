import React from 'react';
import {useAuth} from './auth/Auth';
import Navbar from './navbar/Navbar';
import { Paper } from '@mui/material';
import Container from '@mui/material/Container';
import SmallContainer from './util/SmallContainer'

function App() {

  let auth = useAuth();

  return (
    <SmallContainer>
      <p>Some content</p>
    </SmallContainer>
  );
}

export default App;
