import react from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


import SignIn from './SignIn'

function Home() {

  const [loggedIn, setLoggedIn] = react.useState(false)
  
  // react.useEffect(() => {}, [])


  const pageState = (data)=> {

    if (data === true) {
      setLoggedIn(true)
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
  <div>user is logged in</div>
  
  <button onClick={checkToken}>click me</button>
  </>
  }
    

  </>
}

export default Home;
