import react from 'react'
import { Link } from 'react-router-dom';

import ImageHeader from './Accessories/ImageHeader'


const Engine = ({ user }) => {


  return <>

    {/* where should I redirect the client? the place where the mockApi schema is made - new component
 this new component should depend on the authentication proccess and token. also, must be unique for each 
    customer (schema like profile) */}

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
            <span className="button homeButton"> Guide / link to about </span>
          </div>

          <div >
            <span className="button homeButton"> options :<br/><br/> create schema(only length of name for now),<br/><br/> create data(only one name at a time for now),<br/><br/>
             see all data,<br/><br/> delete all data</span>
          </div>

        </div>
      </div>

      



    </>}
  </>
}

export default Engine;
