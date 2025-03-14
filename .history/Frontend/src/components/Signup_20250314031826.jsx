import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <dialog id="my_modal_3" className="shadow-md shadow-black p-7 rounded-md">
          <form method="dialog">
            {/* Close button */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            
            <h3 className="font-bold text-lg">Signup</h3>

            <div className='py-1'>
                <p>Name</p>
                <input type="text" placeholder='Enter your name' className="rounded-md mt-1 border-2 dark:border-2" />
            </div>

            <div className='py-1'>
                <p>Email</p>
                <input type="email" placeholder='Enter your email' className="rounded-md mt-1 border-2 dark:border-2" />
            </div>

            <div className='py-1'>
                <p>Password</p>
                <input type="password" placeholder='Enter your password' className="rounded-md mt-1 border-2 dark:border-2" />
            </div>

            <div className='flex justify-around mt-4'>
                <button type="submit" className="dark:bg-white dark:text-black rounded-md py-1 px-2 bg-blue-800 text-white">
                  Signup
                </button>
                <p>Have Account? <Link to="/" className="underline" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</Link></p>
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
}

export default Signup;
