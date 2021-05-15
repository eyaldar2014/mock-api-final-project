import react from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {

  const [data, setData] = react.useState({
    name: '',
    password: ''
  })

  const handleChange =(e) =>{
    let newData = data
    newData[e.target.id] = e.target.value
    setData(newData)
    // console.log(newData)
  }

  const userRegister = async (e) =>{
    e.preventDefault()

    console.log(data)
    const req = await axios.post('/api/users/register', {data: data})
  }


  return <>
    {/* {console.log(data.name)} */}

    <h1>Register</h1>
    
    <form>
      <label htmlFor='name'>User Name</label>
      <input id='name' type='text' placeholder='user name' onChange={handleChange} />
      <br/>
      <label htmlFor='password'>password</label>
      <input id='password' type='password' placeholder='password'onChange={handleChange} />
      <input type='submit' onClick={userRegister} />
    </form>

    <Link to='/'>back Home</Link>

  </>
}

export default Register;
