import { createContext, useState } from "react"
import fetchProduct from "./utils/fetchProduct"

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)

  const queryProduct = async (code) => {
    if (!code) {
      alert('Ingresa el código de sku')
      return
    }
    await fetchProduct(code, setProduct)
    setLoading(true)
    const timeOut = setTimeout(() => {
      setLoading(false)
    }, [1000])
    return () => clearTimeout(timeOut)
  }
  const data = { product, loading, queryProduct }

  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductProvider }
export default ProductContext