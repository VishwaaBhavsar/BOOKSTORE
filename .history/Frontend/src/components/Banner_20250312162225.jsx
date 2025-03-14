import React from 'react'
import banner from '../../public/banner.webp'
function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className= ' w-full order-2 md:order-1 md:w-1/2 mt-10 md:mt-32'>
        <h1 className='text-4xl font-bold px-5 '>Hello, welcome here to learn something <span className='text-blue-900'>new everyday!!</span></h1>
        <p className='mt-12'>Every purchase at More Than Words supports our nonprofit mission to empower youth with job training. 
        Our full used book collection includes gently-used books from our generous donors  and are curated by the youth who run the business.</p>
        <div className='mt-3'>
        <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  <input type="email" placeholder="mail@site.com" required/>
</label>
<div className="validator-hint hidden">Enter valid email address</div>

        </div>
        <button className="mt-5 btn btn-primary">Secondary</button>
    </div>
    
        
        <div className=' order-1 w-full md:w-1/2 flex justify-center md:justify-encd md:mt-0'>
        <img src={banner} className="w-98 h-88 mt-20" alt="Banner" />

       </div>
    </div>
    </>
  )
}

export default Banner
