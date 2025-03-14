import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router";
function Course()
{
    return(
    <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 justify-center items-center text text-center">
            <h1 className="text-2xl font md:text-4xl ">We're delighted to have you <span className="text-blue-700">here! :)</span> </h1>
            <p className=" mt-12"> 
            Grab your next favorite book and dive into amazing stories!<br/>
             Whether you love fiction, mystery, or self-help, we have something for every reader
            </p>
           <Link to='/'>
           <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 duration-300">
                Back
            </button>
           </Link>
        </div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-4">
    {list.map((item)=>(
         <Cards item={item} key={item.id}/>
))}
</div>
     </div>
    </>
    )
}
export default Course;