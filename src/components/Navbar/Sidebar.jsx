import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (category) => {
    if (category === "Cabinets") {
      navigate("/category/cabinets");
    } else if (category === "Beds") {
      navigate("/category/beds");
    } else if (category === "Coffee Table") {
      navigate("/coffee-table");
    } else if (category === "Chair") {
      navigate("/category/chairs");
    } else if (category === "Box") {
      navigate("/category/box"); 
    } else if (category === "Study Table") {
      navigate("/category/study");
    } else if (category === "Sofa") {
      navigate("/category/sofa");
    } else if (category === "Box") {
      navigate("/category/box");
    }
    
    onClose(); // Close sidebar after clicking
  };

  return (
    <div className={`fixed top-0 left-0 w-80 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}>
      <button className="text-red-700 font-bold text-xl p-4" onClick={onClose}>✖</button>
      <h3 className="text-[#7D0A0A] font-bold text-lg p-4">CATEGORY</h3>
      <ul className="p-4 space-y-4">
        {[
          { icon: '👗', name: 'Cabinets' },
          { icon: '🛏️', name: 'Beds' },
          { icon: '☕', name: 'Coffee Table' },
          { icon: '🪑', name: 'Chair' },
          { icon: '🛋️', name: 'Sofa' },
          { icon: '📦', name: 'Box' },
          { icon: '📚', name: 'Study Table' }
        ].map((item, index) => (
          <li key={index} onClick={() => handleNavigation(item.name)} className="flex justify-between items-center text-[#7D0A0A] cursor-pointer hover:text-[#BF3131]">
            <span>{item.icon} {item.name}</span>
            <span>+</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
