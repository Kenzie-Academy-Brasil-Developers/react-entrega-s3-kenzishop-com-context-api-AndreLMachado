import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  console.log(cart);

  const addToCart = (item) => {
    item = {
      img: item.img,
      alt: item.alt,
      preco: item.preco,
      descricao: item.descricao,
      filtro: item.filtro,
      titulo: item.titulo,
      id: uuid(),
    };

    setCart([...cart, item]);

    const list = JSON.parse(localStorage.getItem("cart")) || [];

    const newList = [...list, item];

    localStorage.setItem("cart", JSON.stringify(newList));
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.id !== item.id);
    setCart(newCart);

    const list = JSON.parse(localStorage.getItem("cart")) || [];

    const newList = list.filter((products) => products.id !== item.id);

    localStorage.setItem("cart", JSON.stringify(newList));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
