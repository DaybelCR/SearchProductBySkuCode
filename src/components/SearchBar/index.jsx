import { useState , useContext } from "react"
import ProductContext from "../../ProductContext"


export default function SearchBar() {
   const {product, queryProduct}=useContext(ProductContext)
   const [skuCodeInput, setSkuCodeInput] = useState('');

  const onSearchProduct = async() => {
     await queryProduct(skuCodeInput)
     setSkuCodeInput('')
  }

console.log('producto desde searchbar',product)

  return (
    <nav className="flex">
      <input type="text" name="skuCode" placeholder="Escribe el código de sku" value={skuCodeInput} onChange={(e) => setSkuCodeInput(e.target.value)} />
      <button onClick={onSearchProduct}>
        Consultar
      </button>
    </nav>
  )
}
