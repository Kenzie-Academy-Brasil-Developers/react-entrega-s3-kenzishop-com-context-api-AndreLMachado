import "./App.css";
import ProductsList from "./components/ProductsList";
import { CartProvider } from "./Providers/cart";
import { CatalogueProvider } from "./Providers/vitrine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CatalogueProvider>
          <CartProvider>
            <ProductsList type={"catalogue"} />
            <ProductsList type={"cart"} />
          </CartProvider>
        </CatalogueProvider>
      </header>
    </div>
  );
}

export default App;
