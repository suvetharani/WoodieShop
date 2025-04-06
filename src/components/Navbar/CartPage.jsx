import React from "react";
import { useCart } from "../../Context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-[#7D0A0A] mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product, index) => (
          <div key={index} className="flex items-center justify-between border-b py-4">
            <div>
              <h3 className="text-[#7D0A0A] font-bold">{product.name}</h3>
              <p className="text-[#BF3131]">{product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-[#BF3131] text-white px-4 py-1 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
