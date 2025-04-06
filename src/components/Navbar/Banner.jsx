import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#EAD196] text-[#7D0A0A] flex justify-between items-center w-full shadow-lg p-6">
      
      {/* Left Section - Text */}
      <div className="max-w-lg">
        <h2 className="text-md text-[#BF3131] font-semibold uppercase">
          Trending Furnitures
        </h2>
        <h1 className="text-3xl font-bold mt-2 text-[#7D0A0A]">MODERN WOOD PRODUCTS</h1>
        <p className="text-md mt-2 text-[#BF3131]">Starting at Rs.900.00</p>
        <p className="mt-4 text-[#7D0A0A] font-semibold">
          Discover our latest collection of premium furniture.
        </p>
      </div>

      {/* Right Section - Images */}
      <div className="w-1/2 flex justify-end gap-4">
        <img
          src="/assets/banner1.jpg"
          alt="Modern Furniture"
          className="w-[180px] h-[220px] rounded-md shadow-md object-cover"
        />
        <img
          src="/assets/banner3.jpg"
          alt="Modern Furniture"
          className="w-[180px] h-[220px] rounded-md shadow-md object-cover"
        />
        <img
          src="/assets/banner4.jpg"
          alt="Modern Furniture"
          className="w-[180px] h-[220px] rounded-md shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
