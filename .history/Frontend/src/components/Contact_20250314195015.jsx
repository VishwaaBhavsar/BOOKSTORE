import React from 'react';
import Navbar from './Navbar';

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center mt-30 '>
        <div className='justify-center font-semibold text-2xl border-2 p-10'>
        <p>Contact Us</p>
        <p>Name</p>
        <input type='text' placeholder='Enter your name'/>
        <p>Email</p>
        <input type="email" placeholder='Email Address' />
        <p>Message</p>
        <textarea
        className='placeholder=:Enter text here" text-black'></textarea>
        </div>
        <div>

        </div>

    </div>
    </>
  );
}

export default Contact;
