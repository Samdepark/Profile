import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import NavBar from '../components/navbar'
import Footer from '../components/footer'


function contacts() {
  return <>
    <NavBar/>
    <form>
      <input type='name' name="name" className='inpt' placeholder='Name'/>
      <input type='name' name="name" className='inpt' placeholder='Email'/>
      <input type='name' name="message" className='msg' placeholder='Message'/>
    </form>
    <div className='cont'>
      <Link to='' className='socials'>Facebook</Link>
      <Link to='' className='socials'>Twitter</Link>
      <Link to='' className='socials'>Linked-In</Link>
    </div>
    <input type='email' name='email' placeholder='Send me an Email' className='Mail'/>
    <Footer/>
  </>
}

export default contacts