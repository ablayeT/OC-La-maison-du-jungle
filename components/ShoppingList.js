import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import UpdateCart from "../components/UpdateCart";

function ShoppingList({ cart, updateCart }) {
  // Petite précision : categories nous vient de la partie précédente pour récupérer toutes les catégories uniques de plantes.

  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  );
  console.log(cart);

  const handleCart = (name, price, quantity) => {
    console.log(quantity);
    if (quantity < 1) {
      return;
    }
    const plantAdded = cart.find((plant) => plant.name === name);
    if (plantAdded) {
      const cartFiltered = cart.filter((plant) => plant.name !== name);
      updateCart([
        ...cartFiltered,
        { name, price, quantity, amount: plantAdded.amount + quantity },
      ]);
    } else {
      updateCart([...cart, { name, price, quantity, amount: quantity }]);
    }
  };

  return (
    <div className="lmj-shopping-list">
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price }) => (
          <UpdateCart
            id={id}
            cover={cover}
            water={water}
            name={name}
            light={light}
            price={price}
            handleCart={handleCart}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
