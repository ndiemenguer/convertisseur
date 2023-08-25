import React from "react";

function Article() {
  return (
    <div key={item.id}>
      {item.name} {"  "}
      {item.price * item.quantity}€ {"  "}
      <button onClick={() => removeFromCart(item)}>Supprimer</button>
      <button onClick={() => decrement(item)}>-</button>
      {item.quantity}
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}

export default Article;
