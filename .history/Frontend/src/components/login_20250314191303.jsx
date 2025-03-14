import React from 'react'
import { Link } from 'react-router'
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal ">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} >
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='py-1 '>
        <p>Email</p>
        <input type="email" placeholder=' Enter your email' className='dark:border-2 rounded-md mt-1 border-2 ' {...register("email", { required: true })} />
        <br/>
        {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
    </div>
    <div className='py-1 '>
        <p>Password</p>
        <input type="password" placeholder=' Enter your password' className='dark:border-2 rounded-md mt-1 border-2' {...register("password", { required: true })} />
        <br/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-around '>
        <button type='submit' className='dark:bg-white dark:text-black rounded-md py-1 px-2 mt-2 bg-blue-800 text-white '>Login</button>
        <p>Not Signup? <Link to='/signup'  className='underline py-7' onClick={()=>{document.getElementById("my_modal_3").showModal()}}>Signup</Link></p>
    </div>
    <Form/>
  </div>
</dialog>
    </>
  )
}

export default Login
