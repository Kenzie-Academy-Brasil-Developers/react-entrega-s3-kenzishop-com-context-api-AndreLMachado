import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import Button from "../Button";
import { v4 as uuid } from "uuid";

import "./style.css";

const ProductsListCart = ({ type }) => {
  const { cart } = useContext(CartContext);

  console.log(cart);

  return (
    <ul>
      {cart.map((item, index) => (
        <li key={index} id={uuid()}>
          <img src={item.img} alt="img"></img>
          <p>{item.titulo}</p>
          <p>{item.descricao}</p>
          <Button type={type} item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsListCart;
