import { useContext } from "react"
import ProductContext from "../../ProductContext"
import ProductCard from "./ProductCard"
import "./styles.css"
import Loader from "../Loader"

export default function SearchResult() {
    const { product, loading } = useContext(ProductContext)

    return (
        <section className="container-results">
            {loading ? (<Loader />) : (!product) ? (<p style={{ textAlign: "center", margin: "5rem 0", fontWeight: "300", fontSize: "1.5rem" }}>No se encontraron resultados</p>) : (<ProductCard productData={product} />)
            }
        </section>
    )
}
