import LeftContainer from "../components/pdp/LeftContainer"
import RightContainer from "../components/pdp/RightContainer"
import BottomContainer from "../components/pdp/BottomContainer"
import { useParams } from "react-router-dom";
import { useEffect ,useState} from "react";
import fetchProduct from "../utils/fetchProduct";

export default function ProductDetailPage() {
const [productData,setProductData] = useState(null)
let {skuCode} = useParams();

useEffect(()=>{
   fetchProduct(skuCode,setProductData)
},[setProductData])

  return (
      <div className="pdp-container">
        <div className="pdp-top">
          <LeftContainer productData={productData}/>
          <RightContainer productData={productData}/>
        </div>
        <BottomContainer productData={productData}/>
      </div>
  )
}
