import react from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import ImageHeader from './Accessories/ImageHeader'


const Engine = ({ user }) => {


  const [textarea, setTextarea] = react.useState("")
  const [guide, setGuide] = react.useState("first, set up your custom maid schema. enter a text with custom fields between 1 to 100, that looks like this:                       {\"minLength\": 1,\"maxLength\": 3}                   -this will represent the length of the name allowed in you db")

  const [schemaCreated, setSchemaCreated] = react.useState(false)

  const handleTextArea = (e) => {

    setTextarea(e.target.value)
  }

  const createUserSchema = async () => {

    try {
      let objectToPost = JSON.parse(textarea)

      await axios.post('/api/mocks/createSchema', objectToPost)
      setTextarea("")
      setGuide("a name between minLength to maxLength, only one name at a time for now. example :           {\"name\": \"John\"}"          )
      setSchemaCreated(true)
    }
    catch (error) {
      setTextarea(error + ' enter valid fields please')
    }
  }

  const createUserData = async () => {

    try {
      if (!schemaCreated) throw new Error('first create schema')
      let objectToPost = JSON.parse(textarea)

      const response = await axios.post('/api/mocks/createData', objectToPost)
      setTextarea(JSON.stringify(response.data))
    }
    catch (error) {
      setTextarea(error)
    }
  }

  const getAllData = async () => {

    try {
      const response = await axios.get('/api/mocks/getData')
      setTextarea(JSON.stringify(response.data))
    }
    catch (error) {
      setTextarea(error)
    }
  }
  const deleteAllData = async () => {
    try {
      const response = await axios.delete('/api/mocks/deleteData')
      setTextarea(JSON.stringify(response.data))
    }
    catch (error) {
      setTextarea(error)
    }
  }



  return <>

    {!user ? <>

      <div className="formContainer">
        <div className='form'>
          <ImageHeader name='Mock Api' img='mockApiImg' />

          <div >
            <button><Link to="/" className="button homeButton"> Sign In </Link></button>
          </div>

        </div>
      </div>

    </> : <>

      <div className="formContainer">
        <div className='form'>
          <ImageHeader name='Mock Api' img='mockApiImg' />

          <div >
            <button><Link to="/about" className="button guideButton"> About the project </Link></button>
          </div>

          <div>
            <textarea className="formInput mockApiTextarea textAreaLocation" placeholder={guide} onChange={handleTextArea} value={textarea}></textarea>
          </div>

          <div >
            <button onClick={createUserSchema} className="button createSchemaButton"> create unique schema (POC - more features coming)</button>
          </div>

          <div >
            <button onClick={createUserData} className="button createDataButton"> create your data,  (POC - more features coming)</button>
          </div>
          
          <div >
            <button onClick={getAllData} className="button getMockData"> getAllData</button>
          </div>

          <div >
            <button onClick={deleteAllData} className="button deleteMockData"> deleteAllData</button>
          </div>


        </div>
      </div>





    </>}
  </>
}

export default Engine;
