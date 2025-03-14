import React from 'react';
import Navbar from './Navbar';

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center mt-30 '>
        <div className='justify-center font-semibold text-2xl  p-10 shadow-amber-950 shadow-md rounded-2xl backdrop-blur-lg transform-3d '>
        <p className='justify-center text-3xl transform scale-100 hover:scale-105 transition duration-300 text-gray-800'>Contact Us</p>
        <p className='py-2'>Name</p>
        <input className="border rounded-md mt-0.4  " type='text' placeholder='Enter your name' />
        <p className='mt-1.5'>Email</p>
        <input className='border rounded-md mt-1' type="email" placeholder='Email Address' />
        < p className='mt-1.5'>Message</p>
        <textarea
        className='rounded-md border mt-1.5'
        placeholder='Enter your text here'></textarea>
        </div>
        <div>

        </div>

    </div>
    <div className="flex items-center justify-center h-screen bg-gray-900">
  <h1 className="text-6xl font-extrabold text-white transform scale-100 hover:scale-105 transition duration-300" 
      style={{ textShadow: "4px 4px 10px rgba(255, 255, 255, 0.3)" }}>
    3D TEXT
  </h1>
</div>
    </>
  );
}

export default Contact;
