import LeftContainer from "../components/pdp/LeftContainer"
import RightContainer from "../components/pdp/RightContainer"
import BottomContainer from "../components/pdp/BottomContainer"
import Loader from "../components/Loader"
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import fetchProduct from "../utils/fetchProduct"

export default function ProductDetailPage() {
  const [productData, setProductData] = useState(null)

  const categories = productData?.categories[0].slice(1).slice(0, -1)
  let { skuCode } = useParams()

  useEffect(() => {
    fetchProduct(skuCode, setProductData)
  }, [setProductData])

  return (
    <div className="pdp-container">
      {
        productData ? (<>
          <p className="container-categories"><Link to="/">Home</Link>/{categories}</p>
          <div className="pdp-top">
            <LeftContainer productData={productData} />
            <RightContainer productData={productData} />
          </div>
          <BottomContainer productData={productData} /></>) : (<Loader />)
      }
    </div>
  )
}
