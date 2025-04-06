import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Navbar/Banner';
import FeaturesSection from './components/Navbar/FeaturesSection';
import InfoPage from './components/Navbar/InfoPage';
import Footer from './components/Navbar/Footer';
import AboutUs from './components/Navbar/AboutUs';
import ProductCabinet from './components/Navbar/ProductCabinet';
import BedsPage from './components/Navbar/BedsPage';
import ContactUsFeedback from './components/Navbar/ContactUsFeedback';
import ProductCoffeeTable from './components/Navbar/CoffeeTable';
import ProductChair from './components/Navbar/Chair';
import ProductSofa from './components/Navbar/Sofa';
import ProductBox from './components/Navbar/Box';
import ProductStudy from './components/Navbar/StudyTable';
import CartPage from './components/Navbar/CartPage';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <main className='overflow-x-hidden'>
          {/* Navbar on all pages */}
          <Navbar />

          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<><Banner /><FeaturesSection /><InfoPage /></>} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-feedback" element={<ContactUsFeedback />} />
            <Route path="/category/cabinets" element={<ProductCabinet />} />
            <Route path="/category/beds" element={<BedsPage />} />
            <Route path="/coffee-table" element={<ProductCoffeeTable />} />
            <Route path="/category/chairs" element={<ProductChair />} />
            <Route path="/category/sofa" element={<ProductSofa />} />
            <Route path="/category/box" element={<ProductBox />} />
            <Route path="/category/study" element={<ProductStudy />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>

          {/* Footer on all pages */}
          <Footer />
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;