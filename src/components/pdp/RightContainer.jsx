import formatPrice from "../../utils/formatPrice"
import "./styles.css"

export default function RightContainer({ productData }) {
  const { productName, brand, skuCode, price, listPrice ,description} = productData

  return (
    <div className="right-container">
      <h2>{productName}</h2>
      <div className="container-brand">
        <p>{brand}</p>
        <p>SKU: {skuCode}</p>
      </div>
      <p className="right-container-price">Precio Online <span>{formatPrice(price)}</span></p>
      {(price === listPrice) ? null : <p className="right-container-price">Precio Lista <span className="container-listPrice">{formatPrice(listPrice)}</span></p>}
      <p>{description}</p>
    </div>
  )
}
