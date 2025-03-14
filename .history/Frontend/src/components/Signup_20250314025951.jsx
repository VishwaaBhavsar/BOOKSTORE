import React from 'react'
import { Link } from 'react-router'

function Signup() {
  return (
    <>
      <div className='flex h-screen items-center justify-center '>
      <div id="my_modal_3" className="border-[1px] shadow-md p-5 rounded-md px-3">
  <div className=" justify-around">
    <form method="div">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='py-1 '>
        <p>Name</p>
        <input type="text" placeholder=' Enter your name' className='dark:border-2 rounded-md mt-1 border-2' />
    </div>
    <div className='py-1 '>
        <p>Email</p>
        <input type="email" placeholder=' Enter your email' className='dark:border-2 rounded-md mt-1 border-2' />
    </div>
    <div className='py-1 '>
        <p>Password</p>
        <input type="password" placeholder=' Enter your password' className='dark:border-2 rounded-md mt-1 border-2' />
    </div>
    <div className='flex justify-around '>
        <button className='dark:bg-white dark:text-black rounded-md py-1 px-2 mt-2 bg-blue-800 text-white '>Login</button>
        <p>Not Signup? <Link to="/"  className='underline py-7' onClick={()=>{document.getElementById("my_model_3").showModal()}}>Signup</Link></p>
    </div>
  </div>
</div>
      </div>
    </>
  ) 
}

export default Signup
