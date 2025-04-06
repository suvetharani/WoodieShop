import React from "react";

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to WoodieShop</h1>
      <p>Explore our latest collections and enjoy shopping!</p>
      <nav>
        <ul>
          <li><Link to="/chairs">Chairs</Link></li>
          <li><Link to="/cabinets">Cabinets</Link></li>
          <li><Link to="/beds">Beds</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
