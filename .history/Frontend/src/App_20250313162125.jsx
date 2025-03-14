import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebook from './components/Freebook'
import Course from './components/Course'
import {Route,Routes} from "react-router"
import Home from './components/home/Home'
import Courses from './components/courses/Courses'
const App = () => {
  return (
    <>      
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>} />
   </Routes>
    </>
  )
}

export default App
