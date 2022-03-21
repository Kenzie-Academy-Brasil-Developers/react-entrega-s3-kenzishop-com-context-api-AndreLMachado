import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

const Button = ({ type, item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const text =
    type === "cart" ? "Adicionar ao  Carrinho" : "Remover do Carrinho";

  const handleClick = () => {
    if (type === "cart") {
      addToCart(item);
    } else {
      removeFromCart(item);
    }
  };
  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
