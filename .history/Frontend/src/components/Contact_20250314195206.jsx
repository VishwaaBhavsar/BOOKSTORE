import React from 'react';
import Navbar from './Navbar';

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center mt-30 '>
        <div className='justify-center font-semibold text-2xl  p-10 shadow-bo'>
        <p>Contact Us</p>
        <p>Name</p>
        <input type='text' placeholder='Enter your name'/>
        <p>Email</p>
        <input type="email" placeholder='Email Address' />
        <p>Message</p>
        <textarea
        className='" text-black'
        placeholder='Enter your text here'></textarea>
        </div>
        <div>

        </div>

    </div>
    </>
  );
}

export default Contact;
