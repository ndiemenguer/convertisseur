import { useState } from "react";
import "./App.css";
function App(){
      const [product,setProduct]=useState([
        {id:1,name:"Iphone 12",price:  1200},
        {id:2,name:"Iphone 11",price:  1000},
        {id:3,name:"Iphone 10",price:  800},
      ]);
       const [garderelement, setGarderelement] =useState([]);

       function addToCart(product){
      
          if(garderelement.find((item)=>item.id ===product.id)){
            setGarderelement((garderelement) =>{
              const newGarderelement = garderelement.map((item) => {
                if(item.id === product.id){
                  return {...item, quantity: item.quantity + 1};
                }
                return item;
              });
              return newGarderelement;
              
            });
          }
          else{
              setGarderelement((garderelement)=> [...garderelement,{...product, quantity: 1}]);
            }
          }

          function removeFromCart(product){
            setGarderelement((garderelement)=>{
              return garderelement.filter((item) => item.id !== product.id);
            });
          }

          const total = garderelement.reduce((acc, item) => acc +(item.price * item.quantity), 0);
       
          function decrement(product) {
            if(product.quantity === 1){
              removeFromCart(product);
            }else{

            setGarderelement((garderelement) =>{
              const newGarderelement = garderelement.map((item) => {
                if(item.id === product.id){
                  return {...item, quantity: item.quantity - 1};
                }
                return item;
              });
              return newGarderelement;
              
            });
          }
          }
      return(
        <>
        {product.map((item)=>(
        <div key={item.id}>
            {item.name} {""}
            {item.price}

            <button onClick={() => addToCart(item)}>Ajouter produit</button>
            </div>))}
            <hr/>
            <h1>Panier</h1>
            {garderelement.length === 0  ?<div>Le panier est vide</div>:<div>total:{total}(s)</div>}
            {garderelement.map((item) =>(
              <div key={item.id}>
                {item.name} {" "}
                {item.price * item.quantity}F{" "}*{item.quantity}
                <button onClick={() => removeFromCart(item)}>Supprimer</button>
                <button onClick={()=>decrement(item)}>-</button>
                 {item.quantity}
                <button onClick={()=>addToCart(item)}>+</button>
              </div>
            ))}
        </>
      );
}

export default App;