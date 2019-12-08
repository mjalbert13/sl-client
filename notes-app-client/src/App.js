import React, {Fragment, useState, useEffect } from 'react';
import { Auth } from "aws-amplify";
import Navbar from './components/Navbar'
import Routes from './routes/Routes'
import './App.css';

const  App = () => {

  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  return (
    <Fragment>
      <Navbar appProps={{ isAuthenticated, userHasAuthenticated }} />
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </Fragment>
  );
}

export default App;
