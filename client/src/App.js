// self comments:
//

// how to modify schema? it seems that the schema is being created per connection :
//  i'm able to store different kind of data, on the same resoure (item in mongodb), from different locations.
//  I want to be able to let the user change their schema after creating it. it might, i assume requires 
//  disconnect from mongodb before modifying the schema. but that have to be done carefully, because the connections is
//  a very high layer in the application. and being called from the main 'app.js' file

// CI / CD - docker & jenkins (under development on test project)

// note : react authentication
// note : react tests

// note : hide JWT key-signature - ENV file and git ignore? on cloud service?
// note : expire JWT token - very simple. Nice To Have

// note : expose my end-point to the users' and supplying them with unique end-point
//        is not secured. what I need is, a completely seperated end-point' for each
//        to post any information he would like. this end-point will be able to 
//        require jwt token, and send the information to where I store their information
//        & schema validations. and i'll be able to send the response to thier end-point,
//        that will send the answer to them
//        A Middleware end-point for the clients, all the validations and storage is being done on my "Admin"/ main mongoDB
//        bottom line : second layer of JWT token, to seperate user from admin, when storing different data(users details OR mockApi data)

// note : for now, I will start with one schema per user, even though, with the slightest validation
//        I could multiply it. but later, first make all the "moving parts" work

// note : form should be activated
// note : need to add responsiveness

import './App.css';
import react from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Form from './components/Form'
import MockApi from './components/MockApi'



function App() {

  const [load, setLoad] = react.useState(true)
  const [user, setUser] = react.useState(false)
  
  
  react.useEffect(() => {

    setTimeout(() => {
      setLoad(false)
    }, 2000)
  }, []);

  const userLoggedIn = (data) =>{

    setUser(data)
  }

  return (
    <div>
      <Router>
        <Navbar />

        {load ? <Landing /> : <>

          <Switch>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/form">
              <Form />
            </Route>
            <Route exact path="/mockApi">
              <MockApi user={user} />
            </Route>
            <Route exact path="/">
              <Home userLoggedIn={userLoggedIn} user={user}/>
            </Route>
            <Route path="/">
              <NotFound />
            </Route>
          </Switch>

        </>
        }

        <Footer />
      </Router>

    </div>
  );
}

export default App;