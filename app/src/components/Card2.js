import React from 'react'
import './Card.css'
import './Card2.css'
import Image from './Image'

function Card1() {
  
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
              <form className='details'>
                <label class='lab' for="Gender"><strong>Gender</strong></label>
                <input list="genders" class='gender' type="text" id='gender' name='gender' placeholder='Select Gender' required/>
                <datalist id="genders">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </datalist>
                <br />
                <label class='lab' for="Address"><strong>Address</strong></label>
                <input class="addr" type="text" id='addr' name='addr' placeholder='Your Address' required/>
                <br />
                <br />
                <input class="back-btn" type="submit" value="Back" />
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