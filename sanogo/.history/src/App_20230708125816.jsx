import React, { useState } from "react";
import "./App.css";
import Article from "./Article";
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
  function decrement(product) {
    if (product.quantity === 1) {
      removeFromCart(product);
    } else {
      setGarder((garder) => {
        const newGarder = garder.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        return newGarder;
      });
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
      {garder.length === 0 ? (
        <div>le panier est vide</div>
      ) : (
        <div>total: {total}</div>
      )}
      {garder.map((item) => (
        <Article
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          decrement={decrement}
        />
      ))}
    </>
  );
}
export default App;