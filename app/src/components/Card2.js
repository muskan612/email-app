import React from 'react'
import './Card.css'
// import './Card2.css'
import Image from './Image'

function Card2() {
  
  const handleSubmit = (e) => {
    var gender = document.getElementById("gender").value;
    var addr = document.getElementById("addr").value;

    localStorage.setItem('gender', gender);
    localStorage.setItem('addr', addr);
  }
  return (
    <div className="full-page">
      <div className='card-style'>
        <div className="box">
          <section className='left'>
            <div className='pages'>
                <div className='other'>1</div>
                <div className='current'>2</div>
                <div className='other'>3</div>
            </div>
            <div>
              <header><h1>More Details</h1></header>
              <form className='details' action='/preview'>
                <label className='lab' htmlFor="Gender"><strong>Gender</strong></label>
                <input list="genders" className='gender' type="text" id='gender' name='gender' placeholder='Select Gender' required/>
                <datalist id="genders">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </datalist>
                <br />
                <label className='lab' htmlFor="Address"><strong>Address</strong></label>
                <input className="addr" type="text" id='addr' name='addr' placeholder='Your Address' required/>
                <br />
                <br />
                <a href='/details'><input className="back-btn" type="button" value="Back" /></a>
                <input className="next-btn" type="submit" onClick={handleSubmit} value="Next" />
              </form>
            </div>
          </section>
          <Image/>
        </div>
      </div>
    </div>
  )
}

export default Card2