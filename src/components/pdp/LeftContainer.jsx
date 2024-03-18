import { Link } from "react-router-dom"
export default function LeftContainer({ productData }) {

    const linkImage = productData?.items[0]?.images[0]?.imageUrl
    const categories = productData?.categories[0].slice(1).slice(0, -1)

    return (
        <div>
            <p className="container-categories"><Link to="/">Home</Link>/{categories}</p>
            <img src={linkImage} width="500" />
        </div>
    )
}
