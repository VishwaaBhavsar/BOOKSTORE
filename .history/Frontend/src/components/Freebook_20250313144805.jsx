import React from "react";
import list from "../../public/list.json"
function Freebook() 
{
    const filterData=list.filter((data)=>{data.category==="Free"});
    console.log((filterData ));
    
    return(
        <>
        <div className="max-w-screen-2xl">
        <h1>Free Offered Course</h1>
        </div>
        </>
    )
}

export default Freebook