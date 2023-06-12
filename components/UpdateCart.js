import { useState } from "react";
import PlantItem from "./PlantItem";

function UpdateCart({ id, cover, name, water, light, price, handleCart }) {
  const [quantity, setQuantity] = useState(0);
  function handleClick(event) {
    event.preventDefault();
    setQuantity(event.target.value);
  }

  return (
    <div key={id}>
      <PlantItem cover={cover} name={name} water={water} light={light} />
      <button onClick={() => handleCart(name, price, quantity)}>Ajouter</button>
      <input
        type="number"
        value={quantity}
        min="0"
        onChange={handleClick}
        name="quantity"
      ></input>
    </div>
  );
}
export default UpdateCart;
