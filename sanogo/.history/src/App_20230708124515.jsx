import React, { useState } from "react";
import "./App.css";
function App() {
  const [product, setProduct] = useState([
    { id: 1, name: "Iphone 12", price: 1200 },
    { id: 2, name: "Iphone 11", price: 1000 },
    { id: 3, name: "Iphone 10", price: 800 },
  ]);
  const [garder, setGarder] = useState([]);
  function addToCart(product) {
    if (garder.find((item) => item.id === product.id)) {
      setGarder((garder) => {
        const newGarder = garder.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return newGarder;
      });
    } else {
      setGarder((garder) => [...garder, { ...product, quantity: 1 }]);
    }
  }
  function removeFromCart(product) {
    setGarder((garder) => {
      return garder.filter((item) => item.id !== product.id);
    });
  }
  const total = garder.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  function increment(product) {
    
    });
  }
  return (
    <>
      {product.map((item) => (
        <div key={item.id}>
          {item.name} {"  "}
          {item.price}
          <button onClick={() => addToCart(item)}>Ajouter produit</button>
        </div>
      ))}
      <hr />
      <h1>Panier</h1>
      {garder.length === 0 ? (
        <div>le panier est vide</div>
      ) : (
        <div>total: {total}</div>
      )}
      {garder.map((item) => (
        <div key={item.id}>
          {item.name} {"  "}
          {item.price * item.quantity}€ {"  "}
          <button onClick={() => removeFromCart(item)}>Supprimer</button>
          <button>-</button>
          {item.quantity}
          <button>+</button>
        </div>
      ))}
    </>
  );
}
export default App;
