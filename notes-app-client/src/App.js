import React, {Fragment } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import Routes from './routes/Routes'
import './App.css';

const  App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes />
    </Fragment>
  );
}

export default App;
