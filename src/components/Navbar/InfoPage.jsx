import React from 'react';

const InfoPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-[#7D0A0A]">
      {/* Two Column Section */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column - Popular Categories */}
        <div>
          <h2 className="text-lg font-bold">Popular Categories</h2>
          <p className="text-sm mt-2 text-[#BF3131] leading-relaxed">
            Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets, Recliners, Sofa cum Beds, Cabinets, Book Shelves, TV Unit, Wardrobes, Outdoor Furniture, Mattresses, Study Tables, Dining Room Furniture, Office Furniture, Bed Room Furniture, Dining Table, Beds, Sofas.
          </p>
        </div>

        {/* Right Column - Cities We Deliver To */}
        <div>
          <h2 className="text-lg font-bold">Cities We Deliver To</h2>
          <p className="text-sm mt-2 text-[#BF3131] leading-relaxed">
            Arakkonam, Coimbatore, Cuddalore, Dharmapuri, Dindigul, Erode, Kanchipuram, Karur, Madurai, Nagercoil, Namakkal, 
            Pudukkottai, Rameswaram, Salem, Thanjavur, Theni, Tirunelveli, Tiruppur, Tiruvallur, Trichy, Vellore, Villupuram,
            Virudhunagar</p>
        </div>
      </div>

      {/* One-Stop Shop Section Below */}
      <div className="mt-10">
        <h2 className="text-lg font-bold">One-Stop Shop For Plastic Chairs</h2>
        <p className="text-sm mt-2 text-[#BF3131] leading-relaxed">
          Woodie"s wide plastic chair wholesale varieties are perfect for you to browse through and revamp your space with some truly fun options. These chairs are crafted with durable material and showcase exquisite designs that blend well with any décor style. And for all this, you don’t have to take a stroll in the market anymore. With the immense ease of shopping online and the heavy discounts on plastic chairs price options, you can get maximum satisfaction as you buy your favorite chairs.
        </p>
      </div>
    </div>
  );
};

export default InfoPage;
