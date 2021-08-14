// import react from 'react'

import { Link } from "react-router-dom";

const Footer = (props) => {



    return <>
        <div className={'footerContainer'}>

            <hr className='topHr' />

            <ul className={'footer'}>
                <ul className='innerList'>
                    <li className='footHead'>
                        <span>Acount</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                </ul>
                <ul className='innerList'>
                    <li className='footHead'>
                        <span>Articles</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                </ul>
                <ul className='innerList'>
                    <li className='footHead'>
                        <span>More info</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                </ul>
                <ul className='innerList'>
                    <li className='footHead'>
                        <span>Services</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                    <li className='footItem'>
                        <span>option</span>
                    </li>
                </ul>
            </ul>

            <div className='white'>call us at any time :  1900-900-900 | go to <Link to="/contact" className="navItem">Contact</Link></div>
            <br />

            <hr className='bottomHr' />


            <div className='fooBottomCont'>
                <span className='white'>Copyright © 2021 Wowowow Inc. All rights reserved.</span>
                <br />
                <span className='white'>Terms of Use | Legal stuff</span>
            </div>


        </div>

    </>
}


export default Footer