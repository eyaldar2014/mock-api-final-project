import react from 'react'
import axios from 'axios';

import ImageHeader from './Accessories/ImageHeader'


function SignIn({ pageState }) {

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

    // if change login \ register than hide comment
    setResponse({
      success: true,
      status: ""
    })

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

  const userDetails = async (e) => {
    e.preventDefault()
    e.target.disabled = true

    await callApi()

    return e.target.disabled = false
  }

  const callApi = async () => {

    // console.log(inputs)
    try {
      await axios.post('/api/users/' + action.current.toLowerCase(), inputs)
      // console.log('result', result.data)

      // if success then change page component to logged in (send true to Home component)
      pageState(true)
      
      return true
    }
    catch (error) {
      // if error print error to the user and try again

      if (error.response.data.details.includes('duplicate')) {
        error.response.data.details = 'email already exists'
      }
      else if (!error.response.data.details.includes('password must ')) {
        error.response.data.details = 'invalid login'
      }
      // console.error('error', 'status: ' + error.response.status, error.response.data.details)

      setResponse({
        success: false,
        status: error.response.data.details
      })

      return false
    }
  }


  return <>

    <div className="formContainer">
      <div className='form'>
        <ImageHeader name={action.current} img='signBgImg' />

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

        <div >
          <button className="formSignButton" onClick={setPage}>Or {action.second} </button>
        </div>

      </div>
    </div>

  </>
}

export default SignIn;