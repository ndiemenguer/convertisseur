function Product({ product, addToCart }) {
  return (
    <div style={{ display: "flex" }}>
      <p>
        {product.name} - {product.price} FCFA
      </p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  );
}

export default Product;
