import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebook from './components/Freebook'
import {Route,Routes} from "react-router"
import Home from './components/home/Home'
import Courses from './components/courses/Courses'
const App = () => {
  return (
    <>      
   <div className='dark'>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>} />
   </Routes>
   </div>
    </>
  )
}

export default App
