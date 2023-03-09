import React from 'react'
import StickersImg from '../../assets/stickers.png'
import NewIcon from '../../assets/new.png'
import "./Stickers.scss"

function Stickers() {
  return (
    <section className='stickers'>
      <img src={StickersImg} alt="" className='stickers-img'/>     
      <img src={NewIcon} alt="" className='new-icon'/>
    </section>
  )
}

export default Stickers
