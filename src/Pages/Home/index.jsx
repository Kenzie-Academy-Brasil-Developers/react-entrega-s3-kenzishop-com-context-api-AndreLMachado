import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProductsList from "../../components/ProductsList";

import "./style.css";

import imgCart from "../../assets/img/carrinho.jpg";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

const Home = () => {
  const { cart } = useContext(CartContext);

  const history = useHistory();

  const toCart = () => {
    history.push("/cart");
  };

  console.log(cart);

  return (
    <div>
      <header>
        <div className="divHeader">
          <h3>Kenzie Shop</h3>
          <div className="headerRigth">
            <button className="buttonCart" onClick={toCart}>
              <img className="imgButtonCart" src={imgCart} alt="img"></img>
            </button>
            <span className="qntProd">{cart.length}</span>
            <button className="entrar">Entrar</button>
          </div>
        </div>
      </header>
      <main>
        <ProductsList />
      </main>
    </div>
  );
};

export default Home;
