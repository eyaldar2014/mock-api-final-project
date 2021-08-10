// self comments:
// after loging in, route should be closed..
// it's depends on one each other
// authentication - token should be used through here
// also : make sure about "default route". if type "/wefdsfasdd" for example


import React from 'react'
import './App.css';
// import { Route } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'



function App() {

  return (
    <div>
      {/* refresh react */}
      <Router>
        {/* <Route exact path='/' component={User} /> */}
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Router>

    </div>
  );
}

export default App;