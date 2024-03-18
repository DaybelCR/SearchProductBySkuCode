import { useState, useContext } from "react"
import ProductContext from "../../ProductContext"
import "./styles.css"


export default function SearchBar() {
  const { product, queryProduct } = useContext(ProductContext)
  const [skuCodeInput, setSkuCodeInput] = useState('')

  const onSearchProduct = async (e) => {
    e.preventDefault()
    await queryProduct(skuCodeInput)
    setSkuCodeInput('')
  }

  return (
    <nav className="container-searchBar">
      <form onSubmit={(e) => onSearchProduct(e)}>
        <input type="text" name="skuCode" placeholder="Escribe el código de sku" value={skuCodeInput} onChange={(e) => setSkuCodeInput(e.target.value)} />
        <button type="submit" className="button">
          Buscar
        </button>
      </form>
    </nav>
  )
}
