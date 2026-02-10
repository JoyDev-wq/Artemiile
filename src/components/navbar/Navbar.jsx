import React from 'react'
import arrow from '../../assets/arrow-inquiries.svg'
import './Navbar.css'
const Navbar = () => {
  return (
    <div  data-scroll-section className='navbar'>
      <div className='heading-name'>
        <h2> <span>A</span>rtemii <span>L</span>ebedev</h2>
      </div>
      <div>
        <p>hello@artemiilebedev.com</p>
      </div>
      <div className='list'>
        <ul>
            <li>Work,</li>
            <li>Exhibitions,</li>
            <li>Stries,</li>
            <li>About.</li>
        </ul>
      </div>
      <div>
        <div className='inquries'>
            <p>Inquries</p>
            <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
