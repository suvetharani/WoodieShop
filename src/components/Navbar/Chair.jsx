import React, { useState } from "react";
import { useCart } from "../../Context/CartContext";

const products = [
  {
    id: 1,
    name: "Wooden Chair",
    category: "Chair",
    image: "/assets/chair1.jpg",
    price: "$1200.00",
    oldPrice: "$1500.00",
    rating: 4.6,
    label: "Chair",
  },
  {
    id: 2,
    name: "Classic Wooden Chair",
    category: "Chair",
    image: "/assets/chair2.jpg",
    price: "$1400.00",
    oldPrice: "$1700.00",
    rating: 4.8,
    label: "Chair",
  },
  {
    id: 3,
    name: "Wooden Chair",
    category: "Chair",
    image: "/assets/chair3.jpg",
    price: "$2000.00",
    oldPrice: "$2500.00",
    rating: 4.7,
    label: "Chair",
  },
  {
    id: 4,
    name: "Wooden Chair",
    category: "Chair",
    image: "/assets/chair4.jpg",
    price: "$800.00",
    oldPrice: "$940.00",
    rating: 4.7,
    label: "Chair",
  },
  {
    id: 5,
    name: "Wooden Chair",
    category: "Chair",
    image: "/assets/chair5.jpg",
    price: "$800.00",
    oldPrice: "$940.00",
    rating: 2.7,
    label: "Chair",
  },
  {
    id: 6,
    name: "Wooden Chair",
    category: "Chair",
    image: "/assets/chair6.jpg",
    price: "$2000.00",
    oldPrice: "$2500.00",
    rating: 4.7,
    label: "Chair",
  },,
  {
    id: 7,
    name: "Wooden Chair",
    category: "Chair",
    image: "/assets/chair7.jpg",
    price: "$1000.00",
    oldPrice: "$1500.00",
    rating: 4.7,
    label: "Chair",
  },,
  {
    id: 8,
    name: "Wooden Chair",
    category: "Chair",
    image: "/assets/chair8.jpg",
    price: "$1300.00",
    oldPrice: "$1500.00",
    rating: 4.7,
    label: "Chair",
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
