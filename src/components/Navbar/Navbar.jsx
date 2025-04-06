import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { GiDeadWood } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="bg-[#7D0A0A] text-[#EEEEEE] p-4">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <GiDeadWood className="mr-2" />
            <h1 className="text-xl font-bold">WoodieShop</h1>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li className="hover:text-[#EAD196] cursor-pointer" onClick={() => navigate('/')}>Home</li>
            <li className="hover:text-[#EAD196] cursor-pointer" onClick={toggleSidebar}>Categories</li>
            <li className="hover:text-[#EAD196] cursor-pointer" onClick={() => navigate('/about-us')}>About Us</li>
            <li className="hover:text-[#EAD196] cursor-pointer" onClick={() => navigate('/contact-feedback')}>Contact Us</li>
            
            {/* Cart Link using React Router */}
            <li>
              <Link to="/cart" className="hover:text-[#EAD196] cursor-pointer">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      {/* Overlay for Blur Effect when Sidebar is Open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 z-40" 
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
