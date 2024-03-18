import { Link } from "react-router-dom"
import formatPrice from "../../utils/formatPrice"
import "./styles.css"

export default function ProductCard({ productData }) {
    const linkImage = productData?.items[0]?.images[0]?.imageUrl
    const price = productData?.items[0]?.sellers[0]?.commertialOffer?.Price
    const skuCode=productData?.productReferenceCode
    const categories=productData?.categories[0].slice(1).slice(0,-1)

    return (
        <div className="container-card">
            <p className="container-categories">{categories}</p>
            <img className="image-card" src={linkImage} width="200" />
            <h3 className="title-card">{productData?.productName}</h3>
            <div className="container-brand">
                <p className="brand-card">{productData?.brand}</p>
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
