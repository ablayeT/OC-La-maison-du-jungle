import Banner from "../src/components/Banner";
import logo from "../src/assets/logo.png";
import Exemple from "./components/Exemple";
// import Cart from './Cart'
import Footer from "../src/components/Footer";
import ShoppingList from "../src/components/ShoppingList";
import Cart from "./components/Cart";
import "./styles/layout.css";
import { useState } from "react";
import UpdateCart from "./components/UpdateCart";

function App() {
  const [cart, updateCart] = useState([]);
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <UpdateCart />
      <Exemple />
      <Footer />
    </div>
  );
}

export default App;

/*

class Exemple extends React.Component {
  constructor (props) {
 super (props){
this.state = {
  count : 0
}
 }  }
}

render() {
  return 
  <div>
    <p>Vous avez cliqué {this.propos.count} fois</p>
    <button onClick={() => this.setState({count: this.state.count + 1})}>
    cliqué ici
    </button>
  </div>
}*/
