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
        const newGarder = [...garder];
      });
    } else {
      setGarder((garder) => [...garder, { ...product, quantity: 1 }]);
    }
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
      {garder.map((item) => (
        <div key={item.id}>
          {item.name} {"  "}
          {item.price * item.quantity}€ {"  "}x{item.quantity}
        </div>
      ))}
    </>
  );
}
export default App;
