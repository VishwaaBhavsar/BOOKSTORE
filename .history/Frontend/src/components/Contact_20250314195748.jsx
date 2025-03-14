import React from 'react';
import Navbar from './Navbar';

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center mt-30 '>
        <div className='justify-center font-semibold text-2xl  p-10 shadow-amber-950'>
        <p className='justify-center '>Contact Us</p>
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
    </>
  );
}

export default Contact;
