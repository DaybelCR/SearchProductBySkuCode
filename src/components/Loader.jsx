import Loading from "../assets/loading.gif"
export default function Loader() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", textAlign: "center" }}>
            <img src={Loading} width="100" />
        </div>
    )
}
