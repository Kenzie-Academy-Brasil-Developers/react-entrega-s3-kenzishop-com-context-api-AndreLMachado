import { createContext, useState } from "react"; //importando
import { Products } from "./products";

export const CatalogueContext = createContext(Products); //criando contexto

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState(Products);

  return (
    <CatalogueContext.Provider value={{ catalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};
