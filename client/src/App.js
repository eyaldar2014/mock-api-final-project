// import User from './components/user.component';

import React from 'react'
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <div>
      <BrowserRouter>
        {/* <Route exact path='/' component={User} /> */}
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </BrowserRouter>

    </div>
  );
}

export default App;
