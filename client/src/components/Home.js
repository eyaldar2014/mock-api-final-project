import react from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


import SignIn from './SignIn'
import ImageHeader from './Accessories/ImageHeader'

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

  const logOut = async () => {
    
    try {
      setLoggedIn(null)
      userLoggedIn(false)

      const response = await axios.get('/api/users/logout')
      console.log(response)
    }
    catch (error) {
      console.log(error)
    }
  }

  return <>

    {!loggedIn ? <SignIn pageState={pageState} /> :
      <>

        <div className="formContainer">
          <div className='form'>
            <ImageHeader name='Logged In' img='signBgImg' />
            <div >
              <button className="button logOutButton" onClick={logOut}>Log Out</button>
            </div>
            <div >
              <button><Link to="/mockApi" className="button mockApiButton">Mock Api</Link></button>
            </div>

          </div>
        </div>

      </>
    }


  </>
}

export default Home;



// const checkToken = async () => {
//   try {
//     const response = await axios.get('/api/users/me')
//     console.log(response)
//   }
//   catch (error) {
//     console.log(error)
//   }
// }
// <button onClick={checkToken}>click me</button>