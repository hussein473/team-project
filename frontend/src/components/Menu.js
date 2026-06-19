// src/components/Menu.js
import React, { useState } from 'react';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    // Sushi Rolls
    { id: 1, name: 'California Roll', category: 'rolls', price: '$12.99', description: 'Crab, avocado, cucumber', image: '🍣' },
    { id: 2, name: 'Spicy Tuna Roll', category: 'rolls', price: '$14.99', description: 'Tuna, spicy mayo, cucumber', image: '🌶️' },
    { id: 3, name: 'Dragon Roll', category: 'rolls', price: '$16.99', description: 'Eel, avocado, cucumber', image: '🐉' },
    { id: 4, name: 'Rainbow Roll', category: 'rolls', price: '$15.99', description: 'Assorted fish, avocado', image: '🌈' },
    { id: 5, name: 'Salmon Nigiri', category: 'nigiri', price: '$8.99', description: 'Fresh salmon on rice', image: '🐟' },
    { id: 6, name: 'Tuna Nigiri', category: 'nigiri', price: '$9.99', description: 'Fresh tuna on rice', image: '🐠' },
    { id: 7, name: 'Shrimp Nigiri', category: 'nigiri', price: '$7.99', description: 'Cooked shrimp on rice', image: '🦐' },
    { id: 8, name: 'Eel Nigiri', category: 'nigiri', price: '$10.99', description: 'Grilled eel on rice', image: '🐍' },
    { id: 9, name: 'Salmon Sashimi', category: 'sashimi', price: '$13.99', description: 'Fresh salmon slices', image: '🍣' },
    { id: 10, name: 'Tuna Sashimi', category: 'sashimi', price: '$14.99', description: 'Fresh tuna slices', image: '🐟' },
    { id: 11, name: 'Mixed Sashimi', category: 'sashimi', price: '$18.99', description: 'Assorted fish slices', image: '🍱' },
    { id: 12, name: 'Volcano Roll', category: 'special', price: '$17.99', description: 'Spicy tuna, tempura, special sauce', image: '🌋' },
    { id: 13, name: 'Samurai Roll', category: 'special', price: '$19.99', description: 'Salmon, tuna, avocado, special sauce', image: '⚔️' },
    { id: 14, name: 'Geisha Roll', category: 'special', price: '$18.99', description: 'Shrimp, crab, avocado, mango', image: '🌸' },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'rolls', label: 'Rolls' },
    { id: 'nigiri', label: 'Nigiri' },
    { id: 'sashimi', label: 'Sashimi' },
    { id: 'special', label: 'Special' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <p className="menu-subtitle">Discover our authentic Japanese cuisine</p>

      <div className="menu-categories">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-card">
            <div className="menu-card-icon">{item.image}</div>
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>{item.name}</h3>
                <span className="menu-price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <button className="order-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;