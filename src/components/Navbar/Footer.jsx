import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#7D0A0A] text-[#EEEEEE] p-4">
      <div className="container mx-auto flex justify-between items-center text-xs">
        
        {/* Follow Us Section - Left */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Follow Us</span>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-[#45e03a] text-white p-2 rounded-full">
            <FaWhatsapp size={16} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] text-white p-2 rounded-full">
            <FaFacebookF size={16} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="bg-[#FF0000] text-white p-2 rounded-full">
            <FaYoutube size={16} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#C13584] text-white p-2 rounded-full">
            <FaInstagram size={16} />
          </a>
        </div>

        {/* Copyright Section - Center */}
        <p className="text-center">© 2025 WoodieShop. All Rights Reserved.</p>

        {/* Payment Section - Right */}
        <div className="flex items-center space-x-2">
          <span>We Accept Secure Payment</span>
          <img src="/assets/visa.jpg" alt="Visa" className="w-10 h-6 object-contain" />
          <img src="/assets/mastercard.jpg" alt="MasterCard" className="w-10 h-6 object-contain" />
          <img src="/assets/gpay.jpg" alt="Gpay" className="w-10 h-6 object-contain" />
          <img src="/assets/bhim.png" alt="BHIM UPI" className="w-10 h-6 object-contain" />
          <img src="/assets/phonepe.jpg" alt="Phonepe" className="w-10 h-6 object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
