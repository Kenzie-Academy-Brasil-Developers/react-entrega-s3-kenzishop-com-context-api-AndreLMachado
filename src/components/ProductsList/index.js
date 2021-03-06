import { useContext } from "react";
import { CatalogueContext } from "../../Providers/vitrine";
import Button from "../Button";

import "./style.css";

const ProductsList = () => {
  const { catalogue } = useContext(CatalogueContext);

  return (
    <ul>
      {catalogue.map((item, index) => (
        <li key={index}>
          <img src={item.img} alt="img"></img>
          <p>{item.titulo}</p>
          <p>{item.descricao}</p>
          <p>{item.preco}</p>
          <Button type={"cart"} item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
