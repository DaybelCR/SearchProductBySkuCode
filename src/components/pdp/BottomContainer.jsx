import React from "react";
import parse from "html-react-parser"

export default function BottomContainer({ productData }) {
    let arrayDataSheet
    if (productData && productData["Ficha Técnica"]) {
        let dataSheet = productData["Ficha Técnica"]
        arrayDataSheet = dataSheet.map(prop => {
            return { [prop]: productData[prop][0] };
        })
    }
    const htmlString=(productData?.DescriptionBrand)?productData?.DescriptionBrand[0]: ''
    const htmlElement=parse(htmlString)
  
    return (
        <>
        {
            htmlString!==""?
            <table>
            <thead>
                <tr>
                    <th>
                        Descripción
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{htmlElement}</td>
                </tr>
            </tbody>
        </table>:null
        }
       
       
        <div>
            <table>
            <thead>
                <tr>
                    <th>
                        Ficha técnica
                    </th>
                </tr>
            </thead>
                <tbody>
                    {arrayDataSheet && arrayDataSheet.map((obj, index) => (<tr key={index}>{
                        Object.entries(obj).map(([prop, val]) => (<React.Fragment key={prop}><td>{prop}</td><td>{val}</td></React.Fragment>))
                    }</tr>))}
                </tbody>
            </table>
        </div>
        </>
    )
}
