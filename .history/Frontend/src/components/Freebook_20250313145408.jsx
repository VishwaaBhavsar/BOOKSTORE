import React from "react";
import list from "../../public/list.json"
function Freebook() 
{
    const filterData=list.filter((data)=>{data.category==="Free"});
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    
    return(
        <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <h1 className="font-semibold text-xl pb-2">Free Offered Course</h1>
        <p>Knowledge Shouldn’t Have a Price Tag – Unlock a World of Insights with This Free Book! <br/>No Catches, Just Pure Learning Awaits You.</p>
        </div>
        <div
        </>
    )
}

export default Freebook