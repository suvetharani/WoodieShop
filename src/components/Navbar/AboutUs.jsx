import React from "react";

const AboutUs = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">About WoodieShop</h2>
      <p className="mb-4">
        Welcome to WoodieShop! We are passionate about offering high-quality wooden products
        that blend aesthetics with functionality. Our curated collection includes elegant
        furniture, unique decor pieces, and sustainable home essentials.
      </p>

      <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
      <p className="mb-4">
        Our mission is to create sustainable and stylish living spaces by offering wooden
        products made with craftsmanship and care. Every piece tells a story and brings a
        touch of nature into your home.
      </p>

      <h3 className="text-lg font-semibold mb-2">Why Choose Us?</h3>
      <ul className="list-disc list-inside">
        <li>Premium quality handcrafted wooden items</li>
        <li>Eco-friendly and sustainable sourcing</li>
        <li>Personalized customer service</li>
        <li>Fast and reliable delivery</li>
      </ul>
    </div>
  );
};

export default AboutUs;
