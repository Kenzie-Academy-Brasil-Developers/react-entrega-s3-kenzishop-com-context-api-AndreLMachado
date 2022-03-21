import { useContext } from "react";
import { useHistory } from "react-router-dom";
import ProductsListCart from "../../components/ProductsListCart";
import TotalMoney from "../../components/TotalMoney";
import { CartContext } from "../../Providers/cart";

import "./style.css";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const history = useHistory();

  const toHome = () => {
    history.push("./");
  };

  return (
    <div>
      <header>
        <div className="divHeader">
          <h3>Kenzie Shop</h3>
          <div className="buttonSpan">
            <div className="total">
              <span>Quantidade de Produtos {cart.length} un</span>
              <span>
                Valor total: R$ <TotalMoney productsCart={cart} />
              </span>
            </div>
            <div className="buttonsRHeader">
              <button className="buttonHome" onClick={toHome}>
                Voltar ao Shop
              </button>
              <button className="buttonHome" onClick={toHome}>
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <ProductsListCart />
      </main>
    </div>
  );
};

export default Cart;
