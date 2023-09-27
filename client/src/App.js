import React, {useState} from 'react';
import {useAuth} from './auth/Auth';
import Navbar from './navbar/Navbar';
import { Paper } from '@mui/material';
import Container from '@mui/material/Container';
import SmallContainer from './util/SmallContainer'
import axios from 'axios';

function App() {

  let [data, setData] = useState('');
  let auth = useAuth();

  async function onClick(){
    const d = await axios.get('/api/');
    setData(d.data);
  }

  return (
    <SmallContainer>
      <p>Some content</p>
      <button onClick={onClick}>HTTP GET</button>
      <p>Response: {JSON.stringify(data)}</p>
    </SmallContainer>
  );
}

export default App;
