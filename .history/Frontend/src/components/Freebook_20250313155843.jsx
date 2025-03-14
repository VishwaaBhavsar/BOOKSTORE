import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Freebook() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/list.json")
      .then((res) => res.json()) // ✅ Fix: Call `.json()`
      .then((data) => setList(data))
      .catch((err) => console.log("Error loading:", err));
  }, []);

  const filterData = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Course</h1>
          <p>
            Knowledge Shouldn’t Have a Price Tag – Unlock a World of Insights
            with This Free Book! <br />
            No Catches, Just Pure Learning Awaits You.
          </p>
        </div>

        <div>
          {filterData.length > 0 ? ( // ✅ Check if data exists before rendering Slider
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          ) : (
            <p className="text-center text-gray-500">Loading free books...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Freebook;
