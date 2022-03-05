import React from 'react'
import './Card.css'
import logo from "./images/logo.png";

function Card1() {
  
  return (
    <div className="full-page">
      <div className='card-style'>
        <div className="box">
          <section className='left'>
            <div>
              hghw
            </div>
            <div>
            <header><h1>Details</h1></header>
            <form>
              <label for="Email">Email</label>
              <input type="text" id='Email' name='email' placeholder='example@xyz.com'/>
              <br />
              <label for="Name">Name</label>
              <input type="text" id='Name' name='name' placeholder='Type your name'/>
              <br />
              <label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone" pattern="[1-9]{1}[0-9]{9}" required/>
              <br />
              <input type="submit" value="Next" />
            </form>
            </div>
          </section>
          <div><img src={logo} alt='logo' /></div>
        </div>
      </div>
    </div>
  )
}

export default Card1