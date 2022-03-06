import React from 'react'
import './Card.css'
import './Card1.css'
import Image from './Image'
import Phone from './Phone'

function Card1() {
  
  return (
    <div className="full-page">
      <div className='card-style'>
        <div className="box">
          <section className='left'>
            <div className='pages'>
            <div className='current'>1</div>
            <div className='other'>2</div>
            <div className='other'>3</div>
            </div>
            <div>
              <header><h1>Details</h1></header>
              <form className='details'>
                <label for="Email"><strong>Email</strong></label>
                <input class="email" type="text" id='Email' name='email' placeholder='example@xyz.com' pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}' required/>
                <br />
                <label for="Name"><strong>Name</strong></label>
                <input class="name" type="text" id='Name' name='name' placeholder='Type your name' required/>
                <br />
                <div className="phoneno">
                {/* <label for="phone"><strong>Phone</strong></label>
                <Phone/> */}
                </div>
                <label for="phone"><strong>Phone</strong></label>
                <input type="tel" id="phone" name="phone" pattern="[1-9]{1}[0-9]{9}" required/>
                <br />
                <input class="next-btn" type="submit" value="Next" />
              </form>
            </div>
          </section>
          <Image/>
        </div>
      </div>
    </div>
  )
}

export default Card1