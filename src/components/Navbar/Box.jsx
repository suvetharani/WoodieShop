import React, { useState } from "react";
import { useCart } from "../../Context/CartContext";

const products = [
  {
    id: 1,
    name: "Wooden Box",
    category: "Box",
    image: "/assets/box1.jpg",
    price: "Rs.120.00",
    oldPrice: "Rs.150.00",
    rating: 4.6,
    label: "Modern Box",
  },
  {
    id: 2,
    name: "Wooden Box",
    category: "Box",
    image: "/assets/box2.jpg",
    price: "Rs.125.00",
    oldPrice: "Rs.130.00",
    rating: 4.6,
    label: "Modern Box",
  },
  {
    id: 3,
    name: "Wooden Box",
    category: "Box",
    image: "/assets/box3.jpg",
    price: "Rs.150.00",
    oldPrice: "Rs.170.00",
    rating: 4.6,
    label: "Modern Box",
  },
  {
    id: 4,
    name: "Wooden Box",
    category: "Box",
    image: "/assets/box4.jpg",
    price: "Rs.150.00",
    oldPrice: "Rs.170.00",
    rating: 4.6,
    label: "Modern Box",
  },
  {
    id: 5,
    name: "Wooden Box",
    category: "Box",
    image: "/assets/box5.jpg",
    price: "Rs.150.00",
    oldPrice: "Rs.170.00",
    rating: 4.6,
    label: "Modern Box",
  },
  {
    id: 6,
    name: "Wooden Box",
    category: "Box",
    image: "/assets/box6.jpg",
    price: "Rs.190.00",
    oldPrice: "Rs.200.00",
    rating: 3.8,
    label: "Modern Box",
  },
  {
    id: 7,
    name: "Wooden Box",
    category: "Box",
    image: "/assets/box7.jpg",
    price: "Rs.155.00",
    oldPrice: "Rs.180.00",
    rating: 4.6,
    label: "Modern Box",
  },
  {
    id: 8,
    name: "Wooden Box",
    category: "Box",
    image: "/assets/box8.jpg",
    price: "Rs.150.00",
    oldPrice: "Rs.170.00",
    rating: 3.9,
    label: "Modern Box",
  }
];

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-[#EEEEEE] rounded-lg shadow-md overflow-hidden p-4 relative transform transition-transform duration-300 hover:-translate-y-2">
      {/* Sale Label */}
      <span className="absolute top-3 left-3 bg-[#7D0A0A] text-[#EEEEEE] text-xs font-bold px-2 py-1 rounded-lg">
        {product.label}
      </span>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-36 object-cover rounded-md mb-3"
      />

      {/* Product Details */}
      <h3 className="text-[#7D0A0A] font-bold">{product.name}</h3>
      <p className="text-[#BF3131] text-sm">{product.category}</p>
      <div className="flex items-center">
        <span className="text-[#7D0A0A] font-semibold">{product.price}</span>
        <span className="text-gray-500 text-sm ml-2 line-through">{product.oldPrice}</span>
      </div>

      {/* Rating */}
      <div className="text-[#EAD196] text-sm mt-1">
        {"⭐".repeat(Math.floor(product.rating))}
        {product.rating % 1 !== 0 && "⭐"}
      </div>

      {/* Quantity Selector with Add to Cart */}
      <div className="flex items-center justify-between mt-4">
        {/* Quantity Controls */}
        <div className="flex items-center space-x-1">
          <button
            onClick={handleDecrease}
            className="bg-[#BF3131] text-white px-2 py-1 rounded-full text-xs"
          >
            -
          </button>
          <span className="text-[#7D0A0A] text-sm">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="bg-[#7D0A0A] text-white px-2 py-1 rounded-full text-xs"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="bg-[#7D0A0A] text-white px-3 py-1 rounded-lg text-xs"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductCabinet = () => {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-[#7D0A0A] mb-1">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductCabinet;
