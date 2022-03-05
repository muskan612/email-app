import React from 'react'
import './Card.css'
import logo1 from "./images/logo1.png";

function Image() {
  return (
    <div className='image'>
        <img src={logo1} alt="" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum possimus enim magni, error earum tempore iusto illo repudiandae dolor, tempora quidem blanditiis, autem vero numquam necessitatibus eligendi. Sapiente, vel praesentium.</p>
    </div>
  )
}

export default Image