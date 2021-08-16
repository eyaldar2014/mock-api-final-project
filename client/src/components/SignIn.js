import react from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import ImageHeader from './Accessories/ImageHeader'


function SignIn({pageState}) {
// react.useEffect(() => {}, [])


// const [action, setAction] = react.useState({
//   current: 'Login',
//   second: 'Register'
// })




  const [action, setAction] = react.useState({
    current: 'Login',
    second: 'Register'
  })
  const [inputs, setInputs] = react.useState({
    email: "",
    password: ""
  })
  const [apiResponse, setResponse] = react.useState({
    success: true,
    status: ""
  })

  const handleChange = (e) => {

    const { name, value } = e.target

    let inputsMemory = {}
    for (let x in inputs) {
      inputsMemory[x] = inputs[x]
    }
    inputsMemory[name] = value

    // console.log(inputsMemory)
    setInputs(inputsMemory)
  }

  const setPage = (e) => {

    if (action.current === "Login") {
      setAction({
        current: 'Register',
        second: 'Login'
      })
    }
    else {
      setAction({
        current: 'Login',
        second: 'Register'
      })
    }
  }




  const userDetails = (e) => {
    e.preventDefault()
    e.target.disabled = true

    const response = callApi()
    console.log(response)

    // if error print error to the user and try again




    // if success then change page component to logged in
    // if success - what should I do with the token?

    



    return e.target.disabled = false
  }
  const callApi = async () => {

    // console.log(inputs)
    try {
      const result = await axios.post('/api/users/' + action.current.toLowerCase(), inputs)

      console.log('result', result.data)

      return pageState(true)
    }
    catch (error) {
      console.error('error', 'status: ' + error.response.status, error.response.data)
      setResponse({
        success: false,
        status: 'invalid fields'
      })
    }
  }

  
  return <>

  <div className="formContainer">
    <div className='form'>
      <ImageHeader name={action.current} img='formBgImg' />

      <form className="formInputs">
        <div className='formInputsSpan'>
          {action.current === 'Login' ? null : <>
            <div className='formInputsSpanBg'>
              <span>Note that password must contain at least: </span>
              <br />
              <span>* one numeric digit </span>
              <br />
              <span>* one uppercase character</span>
              <br />
              <span>* one lowercase character</span>
              <br />
              <br />
            </div>
          </>}
          
            {apiResponse.success ? null : <>
              <div className='formInputsSpanBg'>
              <span>invalid attept : {apiResponse.status} </span>
              </div>
              </>}
        </div>


        <br />
        <input className="formInput" type="text" name="email" placeholder="Email" value={inputs.email} onChange={handleChange} />
        <br />
        <input className="formInput" type="text" name="password" placeholder="Password" value={inputs.password} onChange={handleChange} />
        <br />
        <input className="formInput" type="submit" value="Submit" onClick={userDetails} />
        <br />
      </form>

      <div className="formSpan">
        <span> Or <a onClick={setPage}>{action.second} Now</a></span>
      </div>

    </div>
  </div>

</>





{/* <Link to='/'>back Home</Link> */}
}

export default SignIn;