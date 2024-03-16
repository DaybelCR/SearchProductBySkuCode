import {createContext,useState} from "react"

const ProductContext=createContext()

const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(null);
  
    const queryProduct = async (code) => {
      try {
        const response = await fetch(`https://api-vtex-search-product.onrender.com/product/${code}`);
        if (!response.ok) {
          throw new Error('Error al obtener datos de la API');
        }
        const responseData = await response.json();
        setProduct(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    const data={product,queryProduct}
  
    return (
      <ProductContext.Provider value={data}>
        {children}
      </ProductContext.Provider>
    );
  };

  export {ProductProvider}
  export default ProductContext;