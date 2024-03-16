import {useContext } from "react"
import ProductContext from "../../ProductContext"
export default function SearchResult() {
 const {product, queryProduct}=useContext(ProductContext)
 console.log(product,'resultado: producto')
  return (
    <div></div>
  )
}
