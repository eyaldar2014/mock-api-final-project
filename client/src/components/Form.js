import react from 'react'

import ImageHeader from './Accessories/ImageHeader'

const Form = () => {

  const [ inputs, setInputs ] = react.useState({
    name : "",
    email : ""
  })
  const [ textarea, setTextarea ] = react.useState("")

  const handleChange = (e) => {

    const { name, value } = e.target

    let inputsMemory = {}
    for( let x in inputs ){
      inputsMemory[x] = inputs[x]
    }
    inputsMemory[name] = value
    
    // console.log(inputsMemory)
    setInputs(inputsMemory)
  }

  const handleTextArea = (e) => {

    // console.log(e.target.value)
    setTextarea(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Form was submitted ');

    setInputs({
      name : "",
      email : ""
    })
    setTextarea("")
  }


  return <>
    <div className="formContainer">
      <div className='form'>
        <ImageHeader name='Tell Us Anything' img='formBgImg' />

        <form className="formInputs">
          <input className="formInput" type="text" name="name" placeholder="Name" value={ inputs.name } onChange={ handleChange }/>
          <br />
          <input className="formInput" type="text" name="email" placeholder="E-mail"  value={ inputs.email } onChange={ handleChange } />
          <br />
          <textarea className="formInput formTextarea" placeholder="enter text..." onChange={ handleTextArea } value={ textarea }></textarea>
          <br />
          <input className="formInput" type="submit" value="Submit" onClick={ handleSubmit }/>
        </form>

      </div>
    </div>
  </>
}

export default Form;
