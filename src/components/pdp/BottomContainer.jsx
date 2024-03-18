import React from "react"
import parse from "html-react-parser"

export default function BottomContainer({ productData }) {
    const {descriptionBrand,dataSheet}=productData
    const htmlElement = parse(descriptionBrand)

    return (
        <div className="bottom-container">
            {
                descriptionBrand !== "" ?
                    <table className="bottom-container-table">
                        <thead>
                            <tr>
                                <th>
                                    <h3>Descripción</h3>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{htmlElement}</td>
                            </tr>
                        </tbody>
                    </table> : null
            }

            <table className="bottom-container-table">
                <thead>
                    <tr>
                        <th colSpan="2">
                            <h3>Ficha técnica</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dataSheet && dataSheet.map((obj, index) => (<tr key={index}>{
                        Object.entries(obj).map(([prop, val]) => (<React.Fragment key={prop}><td style={{ fontWeight: "500" }}>{prop}</td><td>{val}</td></React.Fragment>))
                    }</tr>))}
                </tbody>
            </table>
        </div>
    )
}
