import React, { useState } from "react";
import "./Menu.css"; 
//import dessert1 from "../../components/images/dessert1.png";
import salades from "../../components/images/salades.png" ;
import foiegras from "../../components/images/foiegras.png" ;
//import oeufarcis from "../../components/images/oeufarcis.png" ;
//import entreechaud from "../../components/images/entreechaud.png" ;
import djnkoume from "../../components/images/djnkoume.png" ;
import dessert2 from "../../components/images/dessert2.png" ;
//import modelviewer from './components/modelviewer';


const menuItems = [
  { id: 1, name: "Salade César", category: "Entrées", price: "5.00€", image: {salades} },
  { id: 2, name: "Foiegras", category: "Plats", price: "12.50€", image: {foiegras} },
   { id: 4, name: "Djinkoume", category: "Plats", price: "10.00€", image: {djnkoume} },
  { id: 5, name: "Cocktail Fruits Rouges", category: "Boissons", price: "4.50€", image: {dessert2} },
];

const categories = ["Tous", "Entrées", "Plats", "Desserts", "Boissons"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredItems =
    selectedCategory === "Tous" ? menuItems : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-container">
      <h2 className="menu-title">Notre Menu</h2>
      
      <div className="menu-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-items">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-img" />
            <h3 className="menu-name">{item.name}</h3>
            <p className="menu-price">{item.price}</p>
          </div>
        ))}
      </div>

      {/* <div>
      <h1>Mon Modèle 3D</h1>
      <modelviewer src="/models/modele.glb" alt="Un modèle 3D" />
    </div> */}

    
    </div>

    
  );
};

export default Menu;
