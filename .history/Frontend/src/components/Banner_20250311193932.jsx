import React from 'react'

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 mt-12 md:mt-32'>
        <h1 className='text-4xl font-bold px-5 '>Hello, welcome here to learn something new everyday!!</h1>
        <p className=''>Every purchase at More Than Words supports our nonprofit mission to empower youth with job training. 
        Our full used book collection includes gently-used books from our generous donors  and are curated by the youth who run the business.</p>
        </div>
        <div className='w-full md:w-1/2'></div>
    </div>
    </>
  )
}

export default Banner
