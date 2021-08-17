// self comments:
//

// after loging in, route should be closed..
// delete components login and register
// delete imports here ^

// note : react authentication
// note : fix authentication issue
// note : hide JWT key-signature 




import './App.css';
import react from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import Form from './components/Form'



function App() {

  const [load, setLoad] = react.useState(true)
  react.useEffect(() => {

    setTimeout(() => {
      setLoad(false)
    }, 2000)
  }, []);


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
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
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