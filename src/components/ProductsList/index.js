import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import { CatalogueContext } from "../../Providers/vitrine";
import Button from "../Button";

import "./style.css";

const ProductsList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <ul>
      {type === "catalogue" &&
        catalogue.map((item, index) => (
          <li key={index}>
            <img src={item.img} alt="img"></img>
            <p>{item.titulo}</p>
            <p>{item.descricao}</p>
            <Button type={type} item={item} />
          </li>
        ))}

      {type === "cart" &&
        cart.map((item, index) => (
          <li key={index}>
            <img src={item.img} alt="img"></img>
            <p>{item.titulo}</p>
            <p>{item.descricao}</p>
            <Button type={type} item={item} />
          </li>
        ))}
    </ul>
  );
};

export default ProductsList;
