import React from 'react'
import './Card.css'
import './Card1.css'
import Image from './Image'
import './Preview.css'

function Preview() {
    
    var email = localStorage.getItem('email');
    var name = localStorage.getItem('name');
    var phone = localStorage.getItem('phone');
    var gender = localStorage.getItem('gender');
    var addr = localStorage.getItem('addr');

  return (
    <div className="full-page">
      <div className='card-style'>
        <div className="box">
          <section className='left'>
            <div className='pages'>
            <div className='other'>1</div>
            <div className='other'>2</div>
            <div className='current'>3</div>
            </div>
            <div>
              <header><h1>Preview</h1></header>
              <form className='details'>
                <label htmlFor="Email"><strong>Email</strong></label>
                <input className='email' style={{color: 'rgb(95, 95, 95)'}} type="text" id='Email' name='email' value={email} readOnly required/>
                <br />
                <label htmlFor="Name"><strong>Name</strong></label>
                <input className='name' style={{color: 'rgb(95, 95, 95)'}} type="text" id='Name' name='name' value={name} readOnly required/>
                <br />
                <label htmlFor="phone"><strong>Phone</strong></label>
                <input className="phone" style={{color: 'rgb(95, 95, 95)'}} type="tel" id="Phone" name="phone" value={phone} readOnly required/>
                <br />
                <label htmlFor="Gender"><strong>Gender</strong></label>
                <input className='gender' style={{color: 'rgb(95, 95, 95)'}} type="text" id='gender' name='gender' value={gender} readOnly required/>
                <br />
                <label htmlFor="Address"><strong>Address</strong></label>
                <input className='addr' style={{color: 'rgb(95, 95, 95)'}} type="text" id='addr' name='addr' value={addr} readOnly required/>
                <br />
              </form>
            </div>
          </section>
          <Image/>
        </div>
      </div>
    </div>
  )
}

export default Preview