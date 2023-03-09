import React from 'react'
import "./Header.scss"
import Layout1 from "../../assets/layout1.png"
import Layout2 from "../../assets/layout2.png"
import Layout3 from "../../assets/layout3.png"

function Header() {
  return (
    <div className='header'>
        <div className='header-container' >
            <img src={Layout3} alt="icon1" className='header-one'/>
        </div>
        <div className='header-container'>
            <img src={Layout2} alt="icon2" className='header-two' />
        </div>
        <div className='header-container' >
            <img src={Layout1} alt="icon3" className='header-three'/>
        </div>
    </div>
  )
}

export default Header
