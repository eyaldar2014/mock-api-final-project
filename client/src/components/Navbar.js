// import react from 'react'

import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { GiPhone, GiBlackBook } from "react-icons/gi";

const Navbar =()=>{

    return <>
        <nav className={'navbarContainer'}>

            <ul className={'navbar'}>
                <li>
                    <Link to="/" className="navItem"><FiHome /> Home</Link>
                </li>                
                <li>
                    <Link to="/about" className="navItem"><GiBlackBook /> About</Link>
                </li>
                <li><Link to="/contact" className="navItem"><GiPhone /> Contact</Link>
                </li>
            </ul>

        </nav>

    </>
}


export default Navbar