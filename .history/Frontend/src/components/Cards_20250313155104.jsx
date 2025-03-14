import React from "react";
function Cards({item})
{
    return(
        <>
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="{item.image}"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </>
    )
}
export default Cards