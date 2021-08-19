// import react from 'react'

import ImageHeader from './Accessories/ImageHeader'
import IconCard from './Accessories/IconCard'
import { Link } from "react-router-dom";


const Contact = (props) => {

    return <>
        <div className={'contactContainer'}>

            <div className={'contact'}>

                <ImageHeader name='CONTACT US' img='contactBgImg' />

                <div className='contactBoxContainer'>
                    <div className='contactBox1'>
                        <IconCard icon="phone" body='call us !' bottom='+972 515-635-206' />
                    </div>
                    <div className='contactBox2'>
                        <IconCard icon="mail" body='mail us !' bottom='eyaldar2014@gmail.com' />
                    </div>
                </div>
                
                <div className='leaveDetails'> or leave details <Link to="/form" className="blue"> Here</Link></div>

            </div>

        </div>

    </>
}

export default Contact;