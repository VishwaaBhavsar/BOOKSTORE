import React from 'react'

const Navbar = () => {
  const navItems=(
    <>
    <li>
        <a>Home</a>
      </li>
      
      <li>
        <a>Course</a>
      </li>
      
      <li>
        <a>Contact</a>
      </li>
      
      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">{navItems}
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="text-2xl font-bold cursor-pointer">Timeless Tales</a>
  </div>
  <div className='navbar-end'>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems }
    </ul>
  </div>
  <div className> 
    <a className="btn">Login</a>
  </div>
</div>
</div>
    </div>
    

    </>
    
  )
}

export default Navbar
