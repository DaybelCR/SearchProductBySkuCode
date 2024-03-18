const formatDataProduct = (data) => {
    let arrayDataSheet
    if (data && data["Ficha Técnica"]) {
        let dataSheet = data["Ficha Técnica"]
        arrayDataSheet = dataSheet.map(prop => {
            return { [prop]: data[prop][0] }
        })
        return {
            id: data.productId,
            productName: data.productName,
            brand: data.brand,
            skuCode: data.productReferenceCode,
            urlImage: data?.items[0]?.images[0]?.imageUrl,
            price: data?.items[0]?.sellers[0]?.commertialOffer?.Price,
            listPrice: data?.items[0]?.sellers[0]?.commertialOffer?.ListPrice,
            categories: data?.categories[0].slice(1).slice(0, -1),
            dataSheet: arrayDataSheet,
            description: data.description,
            descriptionBrand: (data.DescriptionBrand) ? data.DescriptionBrand[0] : ''
        }
    }
}

export default formatDataProduct
