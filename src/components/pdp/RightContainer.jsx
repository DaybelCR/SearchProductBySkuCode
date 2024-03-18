import formatPrice from "../../utils/formatPrice"
import "./styles.css"

export default function RightContainer({productData}) {
    const price = productData?.items[0]?.sellers[0]?.commertialOffer?.Price
    const listPrice=productData?.items[0]?.sellers[0]?.commertialOffer?.ListPrice
    
  return (
    <div>
      <h2>{productData?.productName}</h2>
      <div className="container-brand">
      <p>{productData?.brand}</p>
      <p>SKU: {productData?.productReferenceCode}</p>
      </div>
      <p>Precio Online{formatPrice(price)}</p>
      {(price===listPrice)?null: <p>Precio Lista <span className="container-listPrice">{formatPrice(listPrice)}</span></p>}
      <p>{productData?.description}</p>
    </div>
  )
}
