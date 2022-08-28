import React from 'react';
import ReactDOM from 'react-dom';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RequireAuth, AuthProvider } from './auth/Auth';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />        
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
