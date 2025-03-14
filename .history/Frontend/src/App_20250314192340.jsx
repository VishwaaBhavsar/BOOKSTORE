import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Freebook from './components/Freebook'
import {Route,Routes} from "react-router"
import Home from './components/home/Home'
import Courses from './components/courses/Courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
const App = () => {
  return (
    <>      
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/contact' element={Contact/}></Route>
   </Routes>
   </div>
    </>
  )
}

export default App
