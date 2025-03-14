import React from 'react';
import Navbar from './Navbar';

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center mt-30 '>
        <div className='justify-center font-semibold text-2xl  p-10 shadow-amber-950'>
        <p>Contact Us</p>
        <p className='py-2'>Name</p>
        <input className="border rounded-md py-1  " type='text' placeholder='Enter your name' />
        <p>Email</p>
        <input className='border rounded-md' type="email" placeholder='Email Address' />
        <p>Message</p>
        <textarea
        className='rounded-md border'
        placeholder='Enter your text here'></textarea>
        </div>
        <div>

        </div>

    </div>
    </>
  );
}

export default Contact;
