import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([])

  function addToCart(item) {
    // cartItems is an array the ... expands the array to give individual ele and 
    // appending new item to end of array
    setCartItems([...cartItems, item])
  }
  function grandTotal(items) {
    const myPrices = items.map(item => item.price)
    const sum = myPrices.reduce((price, item) => price + item, 0)
    return sum
  }
  return (
    <div className="App">
      <div className="left">
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div className="bi">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem details={item} key={index} addToCart={addToCart}/>
            // <p>Bakery Item {index}</p> // replace with BakeryItem component
          ))} 
        </div>
      </div>

      <div className ="right">
        <h2>Cart</h2>
        {cartItems.map((item, index) => <p>{item.name}</p>)}
        <p>Grand total = {grandTotal(cartItems)}</p>
      </div>
    </div>
  );
}

export default App;
