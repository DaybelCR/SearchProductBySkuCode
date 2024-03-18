import { useContext } from "react"
import ProductContext from "../../ProductContext"
import ProductCard from "./ProductCard"
import "./styles.css"

export default function SearchResult() {
    const { product } = useContext(ProductContext)
  
    return (
        <section className="container-results">
            {(!product) ? <p>No se encontraron resultados</p> :
                <ProductCard productData={product} />
            }
        </section>
    )
}
