import React from 'react'
import './Card.css'
import './Card1.css'
import Image from './Image'
// import Phone from './Phone'
// import {Link} from 'react-router-dom';

function Card1() {

  const handleSubmit = (e) =>{
    // e.preventDefault();
    var email;
    var name;
    var phone;
    
    email = document.getElementById("Email").value;
    name = document.getElementById("Name").value;
    phone = document.getElementById("Phone").value;

    localStorage.setItem('email', email);
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);

    
  }

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
              <form className='details' action='/more_details'>
                <label htmlFor="Email"><strong>Email</strong></label>
                <input className='email' type="text" id='Email' name='email' placeholder='example@xyz.com' pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}' required/>
                <br />
                <label htmlFor="Name"><strong>Name</strong></label>
                <input className='name' type="text" id='Name' name='name' placeholder='Type your name' required/>
                <br />
                <div className="phoneno">
                {/* <label id="phone" htmlFor="Phone"><strong>Phone</strong></label>
                <Phone/> */}
                </div>
                <label htmlFor="phone"><strong>Phone</strong></label>
                <input className='phone' type="tel" id="Phone" name="phone" pattern="[1-9]{1}[0-9]{9}" placeholder='123456789' required/>
                <br />
                {/* <Link to='/more_details' type='submit' onClick={handleSubmit} className="next-btn">Next</Link> */}
                {/* <input className="next-btn" type="submit" onClick={handleSubmit} value='Next'/> */}
                <input className="next-btn" style={{left: '90px'}} type="submit" onClick={handleSubmit} value="Next" />
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