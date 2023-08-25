import React from "react";

function Article({ cartItem, decreaseQuantity, addToCart, removeFromCart }) {
  return (
    <div key={cartItem.id} style={{ display: "flex" }}>
      {cartItem.quantity}x {cartItem.name} -{" "}
      {cartItem.price * cartItem.quantity} FCFA{" "}
      <button onClick={() => decreaseQuantity(cartItem)}>-</button>{" "}
      <button onClick={() => addToCart(cartItem)}>+</button>
      <button onClick={() => removeFromCart(cartItem)}>Supprimer</button>
    </div>
  );
}

export default Article;
