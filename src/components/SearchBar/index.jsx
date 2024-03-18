import { useState , useContext } from "react"
import ProductContext from "../../ProductContext"
import "./styles.css"


export default function SearchBar() {
   const {product, queryProduct}=useContext(ProductContext)
   const [skuCodeInput, setSkuCodeInput] = useState('');

  const onSearchProduct = async() => {
     await queryProduct(skuCodeInput)
     setSkuCodeInput('')
  }

console.log('producto desde searchbar',product)

  return (
    <nav className="container-searchBar">
      <input type="text" name="skuCode" placeholder="Escribe el código de sku" value={skuCodeInput} onChange={(e) => setSkuCodeInput(e.target.value)} />
      <button className="button" onClick={onSearchProduct}>
        Buscar
      </button>
    </nav>
  )
}
