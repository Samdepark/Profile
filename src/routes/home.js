import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const Home=()=>{
  return<>
        <NavBar/>
        <section className='self'>
          <p>Hi, My name is,</p>
          <h1 className='name'>Samuel Gitau </h1>
          <h5>I'm a Fullstack in both Web & Software Development.</h5>
          <p>I love codding and am getting really passionate about it, Mainly building it as my carrier 
          </p>
          <button className='btn'>Get in touch</button>


        </section>
        <Footer/>
        </>
}

export default Home