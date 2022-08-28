import * as React from 'react';
import {useState, useEffect} from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';

import {
  useLocation,
  Navigate,
} from "react-router-dom";

let AuthContext = React.createContext(null);


function localSaveAccount(account){
  if(account == null){
    return localStorage.clear('auth');
  }
  localStorage.setItem('auth', JSON.stringify(account));
}

function localGetAccount(){
  let r = localStorage.getItem('auth');
  if(!r){
    return null;
  }
  return JSON.parse(r);
}

function localRemoveAccount(){
  localStorage.removeItem('auth');
}

export function AuthProvider({ children }) {

  let [user, setUser] = useState({loading: true});

  useEffect(() => {
    const account = localGetAccount();
    setUser(account);
  }, []);

  let signin = async ({email, password}) => {
    const account = {email}
    localSaveAccount(account);
    setUser(account);
  };

  let recover = async () => {
  };

  let signout = () => {
    localRemoveAccount();
    setUser(null);
  };

  let value = { user, signin, signout, recover };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.object
};

export function useAuth() {
  return React.useContext(AuthContext);
}


export function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();
  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  if(auth.user.loading){
    return (<p>Loading</p>);
  }

  return children;
}

RequireAuth.propTypes = {
  children: PropTypes.object
};