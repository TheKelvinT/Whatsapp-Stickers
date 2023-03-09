import React from 'react'
import "./Reviews.scss"
import Testimonial from "../../assets/testimonial.png"
import Star from "../../assets/star.png"
function Reviews() {
  return (
    <section className='reviews'>
        <div className='container'>
          <div className='left'>
            <img src={Testimonial} alt="" />
          </div>
          <div className='right'>
            <p className='review'>
                It's good. There are many cool stickers!
            </p>
            <div className='rating'>
                <span><img src={Star} alt="" /></span>
                <span><img src={Star} alt="" /></span>
                <span><img src={Star} alt="" /></span>
                <span><img src={Star} alt="" /></span>
            </div>
            <p className='name'>- Fikri Aziz</p>
          </div>
        </div>
    </section>
  )
}

export default Reviews
