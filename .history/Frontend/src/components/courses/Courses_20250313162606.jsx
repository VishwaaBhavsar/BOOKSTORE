import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Course from '../Course'

function Courses() {
  return (
    <>
      <Navbar/>
      <div className='min-h'>
      <Course/>
      </div>
      
      <Footer/>

    </>
  )
}

export default Courses
