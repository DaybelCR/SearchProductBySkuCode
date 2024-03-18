import LeftContainer from "../components/pdp/LeftContainer"
import RightContainer from "../components/pdp/RightContainer"
import BottomContainer from "../components/pdp/BottomContainer"
import Loader from "../components/Loader"
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import fetchProduct from "../utils/fetchProduct"
import formatDataProduct from "../utils/formatDataProduct"

export default function ProductDetailPage() {
  const [productData, setProductData] = useState(null)
  const formatData = formatDataProduct(productData)
  let { skuCode } = useParams()

  useEffect(() => {
    fetchProduct(skuCode, setProductData)
  }, [setProductData])

  return (
    <div className="pdp-container">
      {
        productData ? (<>
          <p className="container-categories"><Link to="/">Home</Link>/{formatData.categories}</p>
          <div className="pdp-top">
            <LeftContainer productData={formatData} />
            <RightContainer productData={formatData} />
          </div>
          <BottomContainer productData={formatData} /></>) : (<Loader />)
      }
    </div>
  )
}
