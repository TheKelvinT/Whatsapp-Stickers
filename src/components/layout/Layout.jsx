import React, { Children } from 'react'
import "./Layout.scss"
import Confetti from "../../assets/confetti.png"
import Donut from '../../assets/donut.png'

import Header from '../header/Header'
function Layout({children}) {
  return (
    <div className='layout'>
        <div className='bg-image-container'>
            <img src={Confetti} alt="confetti-bg" className='bg-image' />
            <Header/>
            {children}         
            <img src={Donut} alt="" className='donut' />      
        </div>       
    </div>
  )
}

export default Layout
