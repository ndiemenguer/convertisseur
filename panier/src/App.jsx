import { useState } from "react";
import "./App.css";
import Product from "./components/Product";
import Article from "./components/Article";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ]);

  const [cart, setCart] = useState([]);

  const updateCart = (purpose, product) => {
    let quantity = 0;
    setCart((cart) => {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === product.id) {
          purpose === "add"
            ? (quantity = cartItem.quantity + 1)
            : (quantity = cartItem.quantity - 1);
          return { ...cartItem, quantity: quantity };
        }
        return cartItem;
      });
      return newCart;
    });
  };

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      updateCart("add", product);
    } else {
      setCart((cart) => [...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart((cart) => cart.filter((item) => item.id !== product.id));
  };

  const decreaseQuantity = (product) => {
    if (product.quantity === 1) {
      removeFromCart(product);
    } else {
      updateCart("dec", product);
    }
  };

  const total = cart.reduce(
    (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
    0
  );

  return (
    <>
      {products.map((product) => (
        <Product key={product.id} addToCart={addToCart} product={product} />
      ))}

      <h2>Panier</h2>
      {cart.length === 0 ? (
        "Votre panier est vide"
      ) : (
        <>
          {cart.map((cartItem) => (
            <Article
              key={cartItem.id}
              cartItem={cartItem}
              addToCart={addToCart}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          <p>Total : {total} FCFA</p>
        </>
      )}
    </>
  );
}
export default App;
