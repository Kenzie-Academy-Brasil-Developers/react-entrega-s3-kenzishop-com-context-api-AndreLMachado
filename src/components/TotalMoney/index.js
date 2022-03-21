const TotalMoney = ({ productsCart }) => {
  return productsCart
    .reduce((acc, product) => acc + Number(product.preco), 0)
    .toFixed(2);
};

export default TotalMoney;
