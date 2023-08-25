import "./App.css";
function App() {
  const [product, setProduct] = useState([
    { id: 1, name: "Iphone 12", price: 1200 },
    { id: 2, name: "Iphone 11", price: 1000 },
    { id: 3, name: "Iphone 10", price: 800 },
  ]);

  return (
    <>
      {product.map((item) => (
        <div>
          {item.name}
          {item.price}
        </div>
      ))}
    </>
  );
}
export default App;
