export default function LeftContainer({ productData }) {

    const linkImage = productData?.items[0]?.images[0]?.imageUrl

    return (
        <div className="left-container">
            <img src={linkImage} width="800" />
        </div>
    )
}
