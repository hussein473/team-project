const menuItems = [
  { name: "Salmon Nigiri",   description: "Fresh salmon over sushi rice.",    price: "$8",  image: "" },
  { name: "California Roll", description: "Crab, avocado and cucumber.",      price: "$10", image: "" },
  { name: "Dragon Roll",     description: "Eel, avocado and special sauce.",  price: "$14", image: "" },
  { name: "Tuna Sashimi",    description: "Premium sliced tuna.",             price: "$12", image: "" },
];

function Menu() {
  return (
    <section id="menu" className="section">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            {item.image ? (
              <img src={item.image} alt={item.name} className="dish-image" />
            ) : (
              <div className="image-placeholder">Add Dish Photo</div>
            )}
            <div className="menu-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
