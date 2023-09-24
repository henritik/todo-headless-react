import React, { useState, useEffect } from 'react';
import './App.scss';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [login, isUserLoggedIn] = useState(false);
  const siteUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const localLogin = localStorage.getItem("login");
    if (localLogin) {
      isUserLoggedIn(localLogin);
    }
  }, [login]);

  return (
    <div className="App container">
      <h1>Headless To Do React App</h1>
      {login && <Dashboard url={siteUrl} token={login} isUserLoggedIn={isUserLoggedIn} />}
      {!login && <Login url={siteUrl} isUserLoggedIn={isUserLoggedIn} />}
    </div>
  );
}

export default App;
