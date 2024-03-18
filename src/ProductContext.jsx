import { createContext, useState } from "react"
import fetchProduct from "./utils/fetchProduct";

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const queryProduct = (code) => {
    if (!code) {
      alert('Ingresa el código de sku')
      return
    }
   fetchProduct(code,setProduct) 
  };
  const data = { product, queryProduct }

  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider }
export default ProductContext;