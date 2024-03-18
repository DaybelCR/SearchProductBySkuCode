import formatPrice from "../../utils/formatPrice"
import "./styles.css"

export default function RightContainer({ productData }) {
  const price = productData?.items[0]?.sellers[0]?.commertialOffer?.Price
  const listPrice = productData?.items[0]?.sellers[0]?.commertialOffer?.ListPrice

  return (
    <div className="right-container">
      <h2>{productData?.productName}</h2>
      <div className="container-brand">
        <p>{productData?.brand}</p>
        <p>SKU: {productData?.productReferenceCode}</p>
      </div>
      <p className="right-container-price">Precio Online <span>{formatPrice(price)}</span></p>
      {(price === listPrice) ? null : <p className="right-container-price">Precio Lista <span className="container-listPrice">{formatPrice(listPrice)}</span></p>}
      <p>{productData?.description}</p>
    </div>
  )
}
