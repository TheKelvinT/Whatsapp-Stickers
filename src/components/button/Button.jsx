import React from 'react'
import "./Button.scss"

function Button({title, loading}) {
    return (
      <button className='button'>
            <span>
            {loading ? "Loading..." : title}
            </span>
      </button> 
    )
  }

export default Button
