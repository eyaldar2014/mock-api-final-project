// self comments:
//

// CI / CD - docker & jenkins (under development on test project)

// note : react authentication
// note : react tests

// note : hide JWT key-signature - ENV file and git ignore? on cloud service?
// note : expire JWT token - very simple. Nice To Have



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
import Engine from './components/Engine'



function App() {

  const [load, setLoad] = react.useState(true)
  const [user, setUser] = react.useState(false)
  
  
  react.useEffect(() => {

    setTimeout(() => {
      setLoad(false)
    }, 2000)
  }, []);

  const userLoggedIn = (data) =>{

    setUser(true)
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
            <Route exact path="/">
              <Home userLoggedIn={userLoggedIn} user={user}/>
            </Route>
            <Route exact path="/mockApi">
              <Engine />
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