import react from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

  return <>
    
    <h1>Home</h1>
    <br/>
    
    <Link to='/register'>Register</Link>
    <br/>
    <Link to='/login'>Login</Link>
  </>
}

export default Home;
