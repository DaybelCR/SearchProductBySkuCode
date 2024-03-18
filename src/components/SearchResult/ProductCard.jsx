import { Link } from "react-router-dom"
import formatPrice from "../../utils/formatPrice"
import formatDataProduct from "../../utils/formatDataProduct"
import "./styles.css"


export default function ProductCard({ productData }) {
    const { categories, urlImage, productName, brand, skuCode, price } = formatDataProduct(productData)

    return (
        <div className="container-card">
            <p className="container-categories">{categories}</p>
            <img src={urlImage} width="200" />
            <h3>{productName}</h3>
            <div className="container-brand">
                <p className="brand-card">{brand}</p>
                <p>SKU: {skuCode}</p>
            </div>
            <div className="container-price">
                <p className="price-card">{formatPrice(price)}</p>
                <button className="button">
                    <Link className="link" to={`product/${skuCode}`}>Ver Detalle</Link>
                </button>
            </div>
        </div>
    )
}
