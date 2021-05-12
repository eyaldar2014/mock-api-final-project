import react from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Login() {

  const userLogin = (e) =>{
    e.preventDefault()

    console.log('login here')
  }


  return <>
    <h1>Login</h1>
    <form>
      <label htmlFor='userName'>User Name</label>
      <input id='userName' type='text' placeholder='userName'/>
      <br/>
      <label htmlFor='password'>password</label>
      <input id='password' type='password' placeholder='password'/>
      <input type='submit' onClick={userLogin} />
    </form>

    <Link to='/'>back Home</Link>


  </>
}

export default Login;
