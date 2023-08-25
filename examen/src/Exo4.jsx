import React, { useState } from 'react';
import './App.css'
// Composant Article

const Article = ({ item, onAddToCart, onRemoveFromCart, onUpdateQuantity }) => {
  const { id, name, price, quantity } = item;

  const handleAddToCart = () => {
    onAddToCart(id);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(id);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    onUpdateQuantity(id, newQuantity);
  };

  return (
    <div  className='container'>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={handleAddToCart}>Ajouter</button>
      <button onClick={handleRemoveFromCart}>Supprimer</button>
      <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />
    </div>
  );
};

// Composant Panier
const Cart = ({ cartItems }) => {
  const [cart, setCart] = useState(cartItems);

  const addToCart = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return <p>Le panier est vide.</p>;
  }

  return (
    <div>
      {cart.map((item) => (
        <Article
          key={item.id}
          item={item}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      ))}
      <h1>Total Price: {calculateTotalPrice()}</h1>
    </div>
  );
};

// Composant principal
const App = () => {
  const initialCartItems = [
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    { id: 3, name: 'Product 3', price: 15, quantity: 1 },
  ];

  return <Cart cartItems={initialCartItems} />;
};

export default App;

