import react from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


import SignIn from './SignIn'

function Home({ userLoggedIn, user }) {

  const [loggedIn, setLoggedIn] = react.useState(null)


  react.useEffect(() => {

    if (user) {
      setLoggedIn(true)
    }
  }, [user])

  const pageState = (data) => {

    if (data === true) {
      setLoggedIn(true)

      userLoggedIn(true)
    }
  }


  const checkToken = async () => {
    try{ 
      const response = await axios.get('/api/users/me')
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
  }

  return <>

    {!loggedIn ? <SignIn pageState={pageState} /> :
      <>
        <div>user is logged in show data</div>

        <button onClick={checkToken}>click me</button>


        <div>
          <h1><Link to="/mockApi" className="navItem">mockApi</Link></h1>
          thats invisible 
        </div>
      </>
    }


  </>
}

export default Home;
