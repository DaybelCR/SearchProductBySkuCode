export default function LeftContainer({ productData }) {
    const {urlImage}=productData
   
    return (
        <div className="left-container">
            <img src={urlImage} width="800" />
        </div>
    )
}
